import React, { useCallback, useState } from "react";
import { Form, Input, Select, Checkbox, Row, Col } from "antd";

import {
  ProductType,
  productTypeOptions,
  businessTypeOptions,
  countryOptions,
  optionType,
  roleOptions,
  numberOfLocationOptions,
  commonRules,
} from "constant/formConfig";
import CustomPopup from "../Popup";

const { TextArea } = Input;

interface IProps {
  page: "bookDemo" | "contactUs";
  product?: ProductType[];
  isMobile?: boolean;
  handleSubmit?: (values: any) => void;
}

function CustomForm({ page, isMobile, handleSubmit, product }: IProps) {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(true);
  const [popupOptions, setPopupOptions] = useState<any>();
  const [popupOptionType, setPopupOptionType] = useState<optionType>("country");

  const handlePicker = (v: any, key: optionType) => {
    setVisible(false);
    form.setFieldsValue({ [key]: v });
  };

  const getFields = useCallback(() => {
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
        rules: [],
        span: 12,
        mobileSpan: 24,
      },
      {
        name: "country",
        label: "Country/Region",
        rules: [],
        tag: (
          <Select
            options={isMobile ? undefined : countryOptions}
            placeholder="Select"
            dropdownMatchSelectWidth={false}
            notFoundContent={null}
            onClick={() => {
              if (isMobile) {
                setPopupOptions(countryOptions);
                setPopupOptionType("country");
                setVisible(true);
              }
            }}
          />
        ),
        span: 12,
        mobileSpan: 12,
      },
      {
        name: "businessType",
        label: "Business Type",
        rules: [],
        tag: (
          <Select
            options={isMobile ? undefined : businessTypeOptions}
            dropdownMatchSelectWidth={false}
            placeholder="Select"
            notFoundContent={null}
            onClick={() => {
              if (isMobile) {
                setPopupOptions(businessTypeOptions);
                setPopupOptionType("businessType");
                setVisible(true);
              }
            }}
          />
        ),
        span: 8,
        mobileSpan: 12,
      },
      {
        name: "role",
        label: "Your Role",
        rules: [],
        tag: (
          <Select
            options={isMobile ? undefined : roleOptions}
            placeholder="Select"
            dropdownMatchSelectWidth={false}
            notFoundContent={null}
            onClick={() => {
              if (isMobile) {
                setPopupOptions(roleOptions);
                setPopupOptionType("role");
                setVisible(true);
              }
            }}
          />
        ),
        span: 8,
        mobileSpan: 12,
      },
      {
        name: "numberOfLocation",
        label: "Number of Locations",
        rules: [],
        tag: (
          <Select
            options={isMobile ? undefined : numberOfLocationOptions}
            placeholder="Select"
            dropdownMatchSelectWidth={false}
            notFoundContent={null}
            onClick={() => {
              if (isMobile) {
                setPopupOptions(numberOfLocationOptions);
                setPopupOptionType("numberOfLocation");
                setVisible(true);
              }
            }}
          />
        ),
        span: 8,
        mobileSpan: 12,
      },
      {
        name: "product",
        label: "Which product are you interested in?",
        tag: (
          <Checkbox.Group defaultValue={product}>
            {productTypeOptions.map((item) => {
              return (
                <Checkbox key={item.value} value={item.value}>
                  {item.label}&nbsp;
                  {
                    <span style={{ color: "#CCCCCC" }}>
                      {item.descripition}
                    </span>
                  }
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        ),
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
  }, [isMobile, page, product]);

  return (
    <>
      <Form
        id="form"
        form={form}
        name="basic"
        colon={false}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ product: product }}
      >
        {isMobile && popupOptions && (
          <CustomPopup
            visible={visible}
            options={popupOptions}
            optionType={popupOptionType}
            handleClose={() => setVisible(false)}
            handlePicker={handlePicker}
          />
        )}
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
                  transition ease-in-out duration-300 
                  border border-solid w-full h-10 maxlg:h-9 text-white
                  border-primary
                  bg-primary
                  text-sm
                  hover:bg-primary2 hover:border-primary2
                  active:bg-primary3 active:border-primary3
                  my-4
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
