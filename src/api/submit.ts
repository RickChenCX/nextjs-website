import {
  BussinessType,
  NumberOfLocation,
  ProductType,
  Role,
} from "constant/formConfig";
import request from "../request";

interface ICommonParams {
  location?: NumberOfLocation;
  phone?: number;
  phoneCode?: string;
  question?: string;
  businessEmail: string;
  businessType: BussinessType;
  companyName: string;
  country: string;
  firstName: string;
  lastName: string;
  role: Role;
  subscribe: string;
}

interface ICreateBookDemoParams extends ICommonParams {
  product: ProductType[];
}

export const createBookDemo = (data: ICreateBookDemoParams) =>
  request({
    method: "POST",
    path: `/api/v1/book-demo`,
    data,
  });

interface ICreateEmailParams {
  businessEmail: string;
}
export const createEmail = (data: ICreateEmailParams) =>
  request({
    method: "POST",
    path: `/api/v1/email`,
    data,
  });

interface ICreateContactParams extends ICommonParams {}

export const createContact = (data: ICreateContactParams) =>
  request({
    method: "POST",
    path: `/api/v1/contact`,
    data,
  });
