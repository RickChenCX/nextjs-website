import React from "react";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  Row,
  Col,
  FormInstance,
} from "antd";

import {
  productTypeOptions,
  businessTypeOptions,
  countryOptions,
  phoneCodeOptions,
  roleOptions,
  numberOfLocationOptions,
  commonRules,
} from "constant/formConfig";

const { TextArea } = Input;

// const prefixSelector = (
//   <Form.Item name="phoneCode" noStyle>
//     <Select options={phoneCodeOptions} style={{ width: 70 }}></Select>
//   </Form.Item>
// );

const FormItemConfig = [
  {
    name: "firstName",
    label: "First Name",
    tag: <Input placeholder="Input" />,
    span: 12,
    mobileSpan: 12,
  },
  {
    name: "lastName",
    label: "Last Name",
    tag: <Input placeholder="Input" />,
    span: 12,
    mobileSpan: 12,
  },
  {
    name: "businessEmail",
    label: "Business Email",
    tag: <Input placeholder="Input" />,
    span: 12,
    mobileSpan: 24,
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    tag: <Input placeholder="Input" />,
    rules: [],
    span: 12,
    mobileSpan: 24,
  },
  {
    name: "companyName",
    label: "Company Name",
    tag: <Input placeholder="Input" />,
    span: 12,
    mobileSpan: 24,
  },
  {
    name: "country",
    label: "Country/Region",
    tag: (
      <Select
        options={countryOptions}
        placeholder="Select"
        dropdownMatchSelectWidth={false}
        getPopupContainer={() => document.getElementById("form") as HTMLElement}
      ></Select>
    ),
    span: 12,
    mobileSpan: 12,
  },
  {
    name: "businessType",
    label: "Business Type",
    tag: (
      <Select
        options={businessTypeOptions}
        dropdownMatchSelectWidth={false}
        placeholder="Select"
        getPopupContainer={() => document.getElementById("form") as HTMLElement}
      ></Select>
    ),
    span: 8,
    mobileSpan: 12,
  },
  {
    name: "role",
    label: "Your Role",
    tag: (
      <Select
        options={roleOptions}
        placeholder="Select"
        dropdownMatchSelectWidth={false}
        getPopupContainer={() => document.getElementById("form") as HTMLElement}
      ></Select>
    ),
    span: 8,
    mobileSpan: 12,
  },
  {
    name: "numberOfLocation",
    label: "Number of Locations",
    tag: (
      <Select
        options={numberOfLocationOptions}
        placeholder="Select"
        dropdownMatchSelectWidth={false}
        getPopupContainer={() => document.getElementById("form") as HTMLElement}
      />
    ),
    span: 8,
    mobileSpan: 12,
    rules: [],
  },
  {
    name: "product",
    label: "Which product are you interested in?",
    tag: <Checkbox.Group options={productTypeOptions} />,
    span: 24,
    mobileSpan: 24,
    page: "bookDemo",
  },
  {
    name: "questions",
    label: "Anything else you would like to tell us?",
    tag: (
      <TextArea
        showCount
        maxLength={2000}
        placeholder="Tell us more about your project, needs and timeline."
      />
    ),
    span: 24,
    mobileSpan: 24,
    rules: [],
  },
];

interface IProps {
  page: "bookDemo" | "contactUs";
  isMobile?: boolean;
  handleSubmit?: (values: any) => void;
}

function CustomForm({ page, isMobile, handleSubmit }: IProps) {
  const formRef = React.createRef<FormInstance>();
  const getFields = () => {
    const children: JSX.Element[] = [];
    FormItemConfig.forEach((item, index) => {
      if (!item.page || page === item.page) {
        const span = isMobile ? item.mobileSpan : item.span;
        children.push(
          <Col span={span} key={index}>
            <Form.Item
              name={item.name}
              label={item.label}
              rules={item.rules ?? commonRules}
            >
              {item.tag}
            </Form.Item>
          </Col>
        );
      }
    });
    return children;
  };

  return (
    <>
      <Form
        id="form"
        ref={formRef}
        name="basic"
        colon={false}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Row gutter={24}>
          {getFields()}
          <Col span={24}>
            <Form.Item
              name="subscribe"
              initialValue="NO"
              normalize={(v, prevValue) => {
                return prevValue === "YES" ? "NO" : "YES";
              }}
            >
              <Checkbox>
                Sign me up for product updates and insider knowledge by email.
              </Checkbox>
            </Form.Item>
          </Col>
          <Col span={24}>
            <button
              className={`
                  border border-solid w-full h-10 maxlg:h-9 text-white
                  border-primary
                  bg-primary
                  text-sm
                  hover:bg-primary2 hover:border-primary2
                `}
            >
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default CustomForm;
