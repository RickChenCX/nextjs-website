export interface NavConfigItem {
  name: string;
  desc?: string;
  path?: string;
  group: string;
  groupInnerId?: string;
  children?: NavConfigItem[];
  flag?: string;
  extraPath?: string;
  isMobile?: boolean;
}
const navConfig: NavConfigItem[] = [
  {
    name: "Home",
    path: "/",
    group: "0",
    isMobile: true,
  },
  {
    name: "Products",
    group: "1",
    children: [
      {
        name: "BOSS Flex",
        path: "/",
        group: "1",
        groupInnerId: "1",
        desc: "A property management and tenant engagement platform for flex & hybrid workspaces.",
        extraPath: "/product/flex",
        children: [
          {
            name: "Customer Relationship Management (CRM)",
            group: "1-1",
            groupInnerId: "0",
            path: "/product/flex#&BOSS_FLEX-0-0",
          },
          {
            name: "Contract Management",
            group: "1-1",
            groupInnerId: "1",
            path: "/product/flex#&BOSS_FLEX-0-1",
          },
          {
            name: "Space Inventory Management",
            group: "1-1",
            groupInnerId: "2",
            path: "/product/flex#&BOSS_FLEX-0-3",
          },
          {
            name: "Billing & Payments",
            group: "1-1",
            groupInnerId: "3",
            path: "/product/flex#&BOSS_FLEX-0-7",
          },
          {
            name: "Dashboard",
            group: "1-1",
            groupInnerId: "4",
            path: "/product/flex#&BOSS_FLEX-0-11",
          },
        ],
      },
      {
        name: "BOSS Tenant Engage",
        path: "/",
        group: "1",
        groupInnerId: "2",
        desc: "A tenant connectivity platform to delight tenants and increase customer satisfaction.",
        extraPath: "/product/tea",
        children: [
          {
            name: "Content Management System",
            group: "1-2",
            groupInnerId: "0",
            path: "/product/tea#&BOSS_TENANT_ENGAGE-0-0",
          },
          {
            name: "Meeting Room Booking",
            group: "1-2",
            groupInnerId: "1",
            path: "/product/tea#&BOSS_TENANT_ENGAGE-0-1",
          },
          {
            name: "Tenant Management",
            group: "1-2",
            groupInnerId: "2",
            path: "/product/tea#&BOSS_TENANT_ENGAGE-0-2",
          },
          {
            name: "Billing & Payments",
            group: "1-2",
            groupInnerId: "3",
            path: "/product/tea#&BOSS_TENANT_ENGAGE-0-4",
          },
          {
            name: "Reports & Analytics",
            group: "1-2",
            groupInnerId: "4",
            path: "/product/tea#&BOSS_TENANT_ENGAGE-0-5",
          },
        ],
      },
    ],
  },
  {
    name: "Company",
    path: "/about",
    group: "2",
  },
  {
    name: "Contact Us",
    // path: "/contactUs",
    group: "3",
    isMobile: true,
  },
  {
    name: "Log In",
    path: "/login",
    group: "4",
    flag: "login",
    extraPath: "https://boss-admin.reinventventures.com",
  },
];

export default navConfig;
