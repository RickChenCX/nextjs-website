import React from "react";
import { Flex, Button } from "antd-mobile";
import { Checkbox } from "antd";
import CustomInput from "./Input";
import CustomTextarea from "./Textarea";
import CustomPicker from "./Picker";
import Footer from "./Footer";
import { productTypeOptions, ModalInfo } from "constant/formConfig";
import CustomCheckbox from "./CheckBox";

interface IProps {
  page: keyof typeof ModalInfo;
}

function CustomForm({ page }: IProps) {
  return (
    <div>
      <aside className={`${ModalInfo[page].bg} text-white`}>
        <header className="p-4">
          <span style={{ fontSize: "40px", fontWeight: 500 }}>
            {ModalInfo[page].title}
          </span>
          <article className="text-neutral7 text-sm">
            {ModalInfo[page].desc}
          </article>
        </header>
      </aside>
      <aside className="bg-white" style={{ padding: "16px 1px 0" }}>
        <Flex style={{ margin: "0 16px 0" }} justify="between" wrap="wrap">
          <Flex.Item>
            <CustomInput label="First Name" required />
          </Flex.Item>
          <Flex.Item>
            <CustomInput label="Last Name" required />
          </Flex.Item>
        </Flex>

        <Flex style={{ margin: "34px 16px 0" }} justify="between">
          <Flex.Item>
            <CustomInput label="Business Email" required />
          </Flex.Item>
        </Flex>

        <Flex style={{ margin: "34px 16px 0" }} justify="between">
          <Flex.Item>
            <CustomInput label="Phone Number" showPreSelect />
          </Flex.Item>
        </Flex>

        <Flex style={{ margin: "34px 16px 0" }} justify="between">
          <Flex.Item>
            <CustomInput label="Company Name" required />
          </Flex.Item>
        </Flex>

        <Flex style={{ margin: "34px 16px 0" }} justify="between">
          <Flex.Item>
            <CustomPicker label="Country/Region" required />
          </Flex.Item>
          <Flex.Item>
            <CustomPicker label="Business Type" required />
          </Flex.Item>
        </Flex>
        <Flex style={{ margin: "34px 16px 0" }} justify="between">
          <Flex.Item>
            <CustomPicker label="Your Role" required />
          </Flex.Item>
          <Flex.Item>
            <CustomPicker label="Number of Locations" />
          </Flex.Item>
        </Flex>

        {page === "bookDemo" && (
          <Flex style={{ margin: "34px 16px 0" }} justify="between">
            <Flex.Item>
              <CustomCheckbox
                options={productTypeOptions}
                label="Which product are you interested in?"
                required
              />
            </Flex.Item>
          </Flex>
        )}

        <Flex style={{ margin: "34px 16px 0" }} justify="between">
          <Flex.Item>
            <CustomTextarea label="Anything else you would like to tell us?" />
          </Flex.Item>
        </Flex>
        <Flex style={{ margin: "12px 16px 0" }} justify="between">
          <Flex.Item>
            <Checkbox>
              Sign me up for product updates and insider knowledge by email.
            </Checkbox>
          </Flex.Item>
        </Flex>
        <Flex style={{ margin: "12px 16px 0" }} justify="between">
          <Flex.Item>
            <Button
              type="primary"
              style={{ margin: "40px 0", backgroundColor: "#5528ff" }}
            >
              Submit
            </Button>
          </Flex.Item>
        </Flex>
      </aside>
      <Footer />
    </div>
  );
}

export default CustomForm;
