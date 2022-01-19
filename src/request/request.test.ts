import fetchMock, {
  disableFetchMocks,
  enableFetchMocks,
} from "jest-fetch-mock";

import request from "../request";
import GeneralError from "./errors/GeneralError";
import TokenError from "./errors/TokenError";
import UnknownError from "./errors/UnknownError";

describe("request", () => {
  beforeAll(() => {
    enableFetchMocks();
  });

  afterAll(() => {
    disableFetchMocks();
  });

  it("should return plan text", async () => {
    fetchMock.mockResponseOnce(() => Promise.resolve("foo"));
    const data = await request({
      path: "/text-response",
      method: "POST",
    });

    expect(data).toEqual("foo");
  });
  it("should return json object", async () => {
    fetchMock.mockResponseOnce(() =>
      Promise.resolve({
        body: JSON.stringify({ foo: "bar" }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    );
    const data = await request({
      path: "/json-response",
      method: "POST",
    });

    expect(data).toEqual({ foo: "bar" });
  });
  it("should return blob", async () => {
    fetchMock.mockResponseOnce(() =>
      Promise.resolve({
        body: "data",
        headers: {
          "Content-Type": "application/vnd.ms-excel",
        },
      })
    );
    const data = await request({
      path: "/blob-response",
      method: "POST",
    });

    expect(data.constructor.name).toEqual("Blob");
  });

  it("should throw TokenError", async () => {
    fetchMock.mockResponseOnce(() =>
      Promise.resolve({
        status: 401,
      })
    );
    let error;
    try {
      await request({
        path: "/invalid-token",
        method: "POST",
      });
    } catch (e) {
      error = e;
    }

    expect(error).toBeInstanceOf(TokenError);
  });

  it("should throw GeneralError", async () => {
    fetchMock.mockResponseOnce(() =>
      Promise.resolve({
        status: 400,
        body: JSON.stringify({ error: "CODE", message: "foo bar" }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    );
    let error: GeneralError;
    try {
      await request({
        path: "/general-error",
        method: "POST",
      });
    } catch (e) {
      error = e;
    }

    expect(error).toBeInstanceOf(GeneralError);
    expect(error.status).toBe(400);
    expect(error.error).toBe("CODE");
    expect(error.message).toBe("foo bar");
  });

  it("should throw UnknownError", async () => {
    fetchMock.mockResponseOnce(() =>
      Promise.resolve({
        status: 500,
      })
    );
    let error: UnknownError;
    try {
      await request({
        path: "/unknown-error",
        method: "POST",
      });
    } catch (e) {
      error = e;
    }

    expect(error).toBeInstanceOf(UnknownError);
    expect(error.status).toBe(500);
  });

  it("should pass valid-token and return consistent data", async () => {
    fetchMock.mockResponseOnce(({ headers }) => {
      if (headers.get("Authorization") === "Bearer valid-token") {
        return Promise.resolve({
          body: JSON.stringify({ foo: "bar" }),
          headers: { "Content-Type": "application/json" },
        });
      }
      return Promise.resolve({ status: 401 });
    });

    const data = await request({
      path: "/get-data",
      method: "GET",
      tokenProvider: {
        token: "valid-token",
      },
    });

    expect(data).toEqual({ foo: "bar" });
  });

  it("should refresh token and retry after token expiration", async () => {
    fetchMock.mockResponse(({ headers }) => {
      if (headers.get("Authorization") === "Bearer valid-token") {
        return Promise.resolve({
          body: JSON.stringify({ foo: "bar" }),
          headers: { "Content-Type": "application/json" },
        });
      }
      return Promise.resolve({ status: 401 });
    });

    const data = await request({
      path: "/get-data",
      method: "GET",
      tokenProvider: {
        token: "expiration-token",
        refreshToken: () => Promise.resolve("valid-token"),
      },
    });

    expect(data).toEqual({ foo: "bar" });
  });

  it("should throw token error after refresh token failed", async () => {
    fetchMock.mockResponse(({ headers }) => {
      if (headers.get("Authorization") === "Bearer valid-token") {
        return Promise.resolve({
          body: JSON.stringify({ foo: "bar" }),
          headers: { "Content-Type": "application/json" },
        });
      }
      return Promise.resolve({ status: 401 });
    });
    let error;
    try {
      await request({
        path: "/get-data",
        method: "GET",
        tokenProvider: {
          token: "expiration-token",
          refreshToken: () => Promise.resolve("invalid-token"),
        },
      });
    } catch (e) {
      error = e;
    }
    expect(error).toBeInstanceOf(TokenError);
  });
});
