import React, { useCallback } from "react";
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
  ModalInfo,
  productTypeOptions,
  businessTypeOptions,
  countryOptions,
  phoneCodeOptions,
  roleOptions,
  numberOfLocationOptions,
} from "constant/formConfig";
import { createBookDemo, createContact } from "api/submit";

const { TextArea } = Input;
const Option = Select.Option;

const prefixSelector = (
  <Form.Item name="phoneCOde" noStyle>
    <Select options={phoneCodeOptions} style={{ width: 70 }}></Select>
  </Form.Item>
);

const commonRules = [
  {
    required: true,
  },
];

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
    tag: <Input addonBefore={prefixSelector} />,
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
    tag: <Select options={countryOptions} placeholder="Select"></Select>,
    span: 12,
    mobileSpan: 12,
  },
  {
    name: "businessType",
    label: "Business Type",
    tag: <Select options={businessTypeOptions} placeholder="Select"></Select>,
    span: 8,
    mobileSpan: 12,
  },
  {
    name: "role",
    label: "Your Role",
    tag: <Select options={roleOptions} placeholder="Select"></Select>,
    span: 8,
    mobileSpan: 12,
  },
  {
    name: "numberOfLocation",
    label: "Number Of Locations",
    tag: (
      <Select options={numberOfLocationOptions} placeholder="Select"></Select>
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
    label: "Do you have any specific questions?",
    tag: <TextArea showCount maxLength={2000} placeholder="Input" />,
    span: 24,
    mobileSpan: 24,
    rules: [],
  },
];

function CustomForm({
  page,
  isMobile,
}: {
  page: keyof typeof ModalInfo;
  isMobile?: boolean;
}) {
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

  const handleSubmit = useCallback(async (values: any) => {
    if (page === "bookDemo") {
      await createBookDemo(values);
    } else {
      await createContact(values);
    }
  }, []);

  return (
    <Form
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
          <Button
            htmlType="submit"
            type="primary"
            style={{
              width: "100%",
              height: "40px",
              margin: "40px auto",
              backgroundColor: "#5528ff",
            }}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default CustomForm;
