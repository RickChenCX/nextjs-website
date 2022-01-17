import { Flex, Button } from "antd-mobile";
import { Checkbox } from "antd";
import CustomInput from "./Input";
import CustomTextarea from "./Textarea";

function CustomPopup() {
  return (
    <div>
      <aside className="text-white bg-black">
        <header className="p-4">
          <span style={{ fontSize: "40px", fontWeight: 500 }}>
            Ready to talk?
          </span>
          <article className="text-neutral7 text-sm">
            Need more information and automate coworking management? Ask about
            our products, pricing, implementation, or anything else. Our
            advisors are here to help you start your journey to success.
          </article>
        </header>
      </aside>
      <aside className="bg-white" style={{ padding: "16px 1px 0" }}>
        <Flex style={{ margin: "0 16px 0" }} justify="between">
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
            <CustomInput label="Phone Number" />
          </Flex.Item>
        </Flex>

        <Flex style={{ margin: "34px 16px 0" }} justify="between">
          <Flex.Item>
            <CustomInput label="Company Name" required />
          </Flex.Item>
        </Flex>

        <Flex style={{ margin: "34px 16px 0" }} justify="between">
          <Flex.Item>
            <CustomInput label="Country/Region" required />
          </Flex.Item>
          <Flex.Item>
            <CustomInput label="Business Type" required />
          </Flex.Item>
        </Flex>
        <Flex style={{ margin: "34px 16px 0" }} justify="between">
          <Flex.Item>
            <CustomInput label="Your Role" required />
          </Flex.Item>
          <Flex.Item>
            <CustomInput label="Number of Locations" />
          </Flex.Item>
        </Flex>

        <Flex style={{ margin: "34px 16px 0" }} justify="between">
          <Flex.Item>
            <CustomTextarea label="Do you have any specific questions?" />
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
      <footer
        className="bg-neutral3 text-sm"
        style={{
          backgroundColor: "#f5f5f5",
          padding: "16px 16px 40px",
        }}
      >
        <article className="text-neutral12">You can also contact us</article>
        <article className="text-primary pt-2">
          contact@reinventventures.com
        </article>
        <article className="text-xs text-neutral7 pt-6">
          The information you provide will be used in accordance with the terms
          of our <span className="text-primary">Privacy Policy.</span>
        </article>
      </footer>
    </div>
  );
}

export default CustomPopup;
