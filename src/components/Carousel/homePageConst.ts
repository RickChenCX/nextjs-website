import { ProductType } from "constant/formConfig";

export const productList = [
  {
    productName: "BOSS Flex Operate",
    productDescription:
      "A property management and tenant engagement platform for flex & hybrid coworking spaces.",
    productImage: "/images/home-section2-1.png",
    list: [
      {
        title: "Streamlined customer management from leads to move-in",
      },
      {
        title:
          "Scalable deal types & automated processes throughout the contract lifecycle",
      },
      {
        title: "Flexible product package set up with configurable rules",
      },
      {
        title: "Interactive floor plans with real-time occupancy info",
      },
      {
        title: "Automated billing & invoicing with flexible payment options",
      },
      {
        title: "Customizable dashboard to maximize business results",
      },
    ],
    path: "/product/flex",
    product: ProductType.BossFlex,
  },
  {
    productName: "BOSS Tenant Engage",
    productDescription:
      "A tenant engagement platform to delight tenants and boost customer satisfaction.",
    productImage: "/images/home-section2-2.png",
    list: [
      {
        title: "White-labeled tenant app to connect with tenants as a brand",
      },
      {
        title: "Real-time room & desk booking across buildings",
      },
      {
        title: "Explosive revenue growth via smooth public registration",
      },
      {
        title: "Centralized view of account-based tenants",
      },
      {
        title:
          "Full-spectrum content management system to enrich tenant engagement",
      },
      {
        title: "Various add-on service options with flexible payment options",
      },
    ],
    path: "/product/tea",
    product: ProductType.BossTenantEngage,
  },
  {
    productName: "BOSS Employee Engage",
    productDescription:
      "A smart workplace solution empowering your teams and for all your organization's needs​.",
    productImage: "/images/employeeProduct.svg",
    list: [
      {
        title: "White-labeled employee app that reflects your branding​",
      },
      {
        title: "Hassle-free desk & meeting room booking with interactive maps​",
      },
      {
        title: "Integration with your existing calendars​",
      },
      {
        title: "All-in-one support ticketing system​",
      },
      {
        title:
          "Full-spectrum content management system to boost employee engagement​",
      },
      {
        title:
          "Real-time workplace analytics to better understand your employees and spaces​",
      },
    ],
    path: "/product/employeeEngage",
    product: ProductType.BossFlex,
  },
];
