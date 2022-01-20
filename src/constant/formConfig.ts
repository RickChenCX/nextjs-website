import { countryInfo } from "./country";

export const commonRules = [
  {
    required: true,
  },
];

export const ModalInfo = {
  contactUs: {
    title: "Ready to talk?",
    desc: "Need more information and automate coworking management? Ask about our products, pricing, implementation, or anything else. Our advisors are here to help you start your journey to success.",
    bg: "bg-black",
  },
  bookDemo: {
    title: "Book a Demo",
    desc: "Want to find out more about how our products for flex and coworking spaces could work for you? Simply fill out the form and someone from our team will get in touch with you within 24 hours.",
    bg: "bg-primary1",
  },
};

export enum BussinessType {
  CommercialProperty = "COMMERCIAL_PROPERTY",
  Consulting = "CONSULTING",
  CoworkingOrFlexSpace = "COWORKING_OR_FLEX_SPACE",
  HybridWorkplace = "HYBRID_WORKPLACE",
  Other = "OTHER",
  PropertyManagement = "PROPERTY_MANAGEMENT",
  Technology = "TECHNOLOGY",
}
export const businessTypeOptions = [
  {
    label: "Coworking / Flex Space",
    value: BussinessType.CoworkingOrFlexSpace,
  },
  {
    label: "Hybrid Workplace",
    value: BussinessType.HybridWorkplace,
  },
  {
    label: "Commercial Property",
    value: BussinessType.CommercialProperty,
  },
  {
    label: "Property Management",
    value: BussinessType.PropertyManagement,
  },
  {
    label: "Consulting",
    value: BussinessType.Consulting,
  },
  {
    label: "Technology",
    value: BussinessType.Technology,
  },
  {
    label: "Other",
    value: BussinessType.Other,
  },
];

export enum NumberOfLocation {
  MoreThanThirty = "MORE_THAN_THIRTY",
  One = "ONE",
  OpeningSoon = "OPENING_SOON",
  SixteenThirty = "SIXTEEN_THIRTY",
  SixFifteen = "SIX_FIFTEEN",
  TwoFive = "TWO_FIVE",
  Unknown = "UNKNOWN",
}

export const numberOfLocationOptions = [
  {
    label: "1",
    value: NumberOfLocation.One,
  },
  {
    label: "2-5",
    value: NumberOfLocation.TwoFive,
  },
  {
    label: "6-15",
    value: NumberOfLocation.SixFifteen,
  },
  {
    label: "16-30",
    value: NumberOfLocation.SixteenThirty,
  },
  {
    label: "30+",
    value: NumberOfLocation.MoreThanThirty,
  },
  {
    label: "Opening soon",
    value: NumberOfLocation.OpeningSoon,
  },
  {
    label: "Don’t have a location yet",
    value: NumberOfLocation.Unknown,
  },
];

export enum ProductType {
  BossFlex = "BOSS_FLEX",
  BossTenantEngage = "BOSS_TENANT_ENGAGE",
}

export const productTypeOptions = [
  {
    label: "BOSS Flex (For flex & hybrid coworking space operators)",
    value: ProductType.BossFlex,
  },
  {
    label: "BOSS Tenant Engage (For landlords or space operators)",
    value: ProductType.BossTenantEngage,
  },
];

export enum Role {
  AssetManager = "ASSET_MANAGER",
  Broker = "BROKER",
  Consultant = "CONSULTANT",
  HrManager = "HR_MANAGER",
  Incubator = "INCUBATOR",
  Operator = "OPERATOR",
  Other = "OTHER",
  Owner = "OWNER",
}

export const roleOptions = [
  {
    label: "Owner",
    value: Role.Owner,
  },
  {
    label: "Operator",
    value: Role.Operator,
  },
  {
    label: "Asset Manager",
    value: Role.AssetManager,
  },
  {
    label: "Incubator",
    value: Role.Incubator,
  },
  {
    label: "HR Manager",
    value: Role.HrManager,
  },
  {
    label: "Broker",
    value: Role.Broker,
  },
  {
    label: "Consultant",
    value: Role.Consultant,
  },
  {
    label: "Other",
    value: Role.Other,
  },
];

const countryName2Value = (country: string) => country.replace(/\s*/g, "");
export const countryOptions = countryInfo.map((v) => {
  return { label: v.country, value: countryName2Value(v.country) };
});

export const phoneCodeOptions = countryInfo.map((v) => {
  return { label: `+${v.phoneCode}`, value: v.phoneCode };
});
