import { Form, Input, Select, Checkbox, Button, Row, Col } from "antd";
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
      <Select>
        <Option value="86">呜哇</Option>
        <Option value="87">哈哈</Option>
      </Select>
    ),
  },
  {
    name: "businessType",
    label: "Business Type",
    tag: (
      <Select>
        <Option value="86">呜哇</Option>
        <Option value="87">哈哈</Option>
      </Select>
    ),
    span: 8,
  },
  {
    name: "role",
    label: "Your Role",
    tag: (
      <Select>
        <Option value="86">呜哇</Option>
        <Option value="87">哈哈</Option>
      </Select>
    ),
    span: 8,
  },
  {
    name: "numberOfLocation",
    label: "Number Of Locations",
    tag: <Input placeholder="Input" />,
    span: 8,
    rules: [],
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

  return (
    <Form name="basic" colon={false} layout="vertical">
      <Row gutter={24}>
        {getFields()}
        <Col span={24}>
          <Checkbox>
            Sign me up for product updates and insider knowledge by email.
          </Checkbox>
        </Col>
        <Col span={24}>
          <Button
            style={{
              width: "536px",
              height: "40px",
              marginTop: "40px",
              backgroundColor: "#5528ff",
              color: "#fff",
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
