import FetchError from "./errors/FetchError";
import GeneralError from "./errors/GeneralError";
import TokenError from "./errors/TokenError";
import UnknownError from "./errors/UnknownError";
export interface RequestParams {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  data?: FormData | { [key: string]: any };
  includeCredentials?: boolean;
}
interface EnvPatams {
  NEXT_PUBLIC_API_BASE_URL: string;
  DOMAIN: string;
}

const buildPayload = (response: Response) => {
  const responseType = response.headers.get("content-type") || "";

  if (responseType.startsWith("text/")) {
    return response.text();
  }
  if (responseType.indexOf("application/json") !== -1) {
    return response.json();
  }
  return response.blob();
};

const buildResponse = async <T>(response: Response) => {
  const { status, statusText } = response;
  const payload = await buildPayload(response);

  if (status === 401) {
    throw new TokenError(payload.message ?? statusText);
  }

  if (status >= 400 && status < 600) {
    if (typeof payload === "object" && payload.error && payload.message) {
      throw new GeneralError(status, payload.error, payload.message);
    }
    throw new UnknownError(status, statusText);
  }

  return payload as T;
};

const request = async <T>(params: RequestParams): Promise<T> => {
  const env = await window.fetch("/api/envConfig", { method: "GET" });
  const envData = await env.json();
  const baseUrl = envData.NEXT_PUBLIC_API_BASE_URL;
  const { method, path, data, includeCredentials } = params;
  const isRequestJson = method !== "GET" && !(data instanceof FormData);
  let response;
  try {
    response = await window.fetch(`${baseUrl}${path}`, {
      method,
      headers: {
        ...(isRequestJson ? { "Content-Type": "application/json" } : {}),
      },
      ...(method === "GET"
        ? {}
        : { body: data instanceof FormData ? data : JSON.stringify(data) }),
      ...(includeCredentials ? { credentials: "include" } : {}),
    });
  } catch (e) {
    throw new FetchError(e);
  }
  let requestError;
  try {
    return await buildResponse<T>(response);
  } catch (e) {
    requestError = e;
  }

  throw requestError;
};

export default request;
