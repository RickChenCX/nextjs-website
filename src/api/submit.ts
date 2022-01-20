import {
  BussinessType,
  NumberOfLocation,
  ProductType,
  Role,
} from "constant/formConfig";
import request from "../request";

interface ICreateBookDemoParams {
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
  product: ProductType[];
  role: Role;
  subscribe: string;
}

interface ICreateEmailParams {
  businessEmail: string;
}

export const createBookDemo = (data: ICreateBookDemoParams) =>
  request({
    method: "POST",
    path: `/api/v1/book-demo`,
    data,
  });

export const createEmail = (data: ICreateEmailParams) =>
  request({
    method: "POST",
    path: `/api/v1/email`,
    data,
  });
