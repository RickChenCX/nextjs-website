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
  productTypeOptions,
  businessTypeOptions,
  roleOptions,
  numberOfLocationOptions,
  BussinessType,
  NumberOfLocation,
  ProductType,
  Role,
} from "constant/formConfig";
import { createBookDemo } from "api/submit";

const { TextArea } = Input;
const Option = Select.Option;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
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
  },
  {
    name: "lastName",
    label: "Last Name",
    tag: <Input placeholder="Input" />,
  },
  {
    name: "businessEmail",
    label: "Business Email",
    tag: <Input placeholder="Input" />,
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    tag: <Input addonBefore={prefixSelector} />,
    rules: [],
  },
  {
    name: "companyName",
    label: "Company Name",
    tag: <Input placeholder="Input" />,
  },
  {
    name: "country",
    label: "Country/Region",
    tag: (
      <Select placeholder="Select">
        <Option value="China">中国</Option>
        <Option value="Sig">新加坡</Option>
      </Select>
    ),
  },
  {
    name: "businessType",
    label: "Business Type",
    tag: <Select options={businessTypeOptions} placeholder="Select"></Select>,
    span: 8,
  },
  {
    name: "role",
    label: "Your Role",
    tag: <Select options={roleOptions} placeholder="Select"></Select>,
    span: 8,
  },
  {
    name: "numberOfLocation",
    label: "Number Of Locations",
    tag: (
      <Select options={numberOfLocationOptions} placeholder="Select"></Select>
    ),
    span: 8,
    rules: [],
  },
  {
    name: "product",
    label: "Which product are you interested in?",
    tag: <Checkbox.Group options={productTypeOptions} />,
    span: 24,
    page: "bookDemo",
  },
  {
    name: "questions",
    label: "Do you have any specific questions?",
    tag: <TextArea showCount maxLength={2000} placeholder="Input" />,
    span: 24,
    rules: [],
  },
];

function CustomForm() {
  const formRef = React.createRef<FormInstance>();
  const getFields = () => {
    const children: JSX.Element[] = [];
    FormItemConfig.forEach((item, index) => {
      children.push(
        <Col span={item.span ?? 12} key={index}>
          <Form.Item
            name={item.name}
            label={item.label}
            rules={item.rules ?? commonRules}
          >
            {item.tag}
          </Form.Item>
        </Col>
      );
    });
    return children;
  };

  const handleSubmit = useCallback(async (values: any) => {
    console.log(values);
    await createBookDemo(values);
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
        <Form.Item name="subscribe">
          <Col span={24}>
            <Checkbox>
              Sign me up for product updates and insider knowledge by email.
            </Checkbox>
          </Col>
        </Form.Item>
        <Col span={24}>
          <Button
            htmlType="submit"
            type="primary"
            style={{
              width: "100%",
              height: "40px",
              marginTop: "40px",
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
