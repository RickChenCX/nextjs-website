import { Modal } from "antd";
import CustomForm from "./Form";
import Close from "../../svgs/Close.svg";

interface IProps {
  visible?: boolean;
  title?: string;
  handleOk?: () => void;
  handleCancel?: () => void;
}
function CustomModal({ visible, title }: IProps) {
  return (
    <Modal visible={visible} footer={null} width={944}>
      <div style={{ display: "flex" }}>
        <article
          style={{
            width: "328px",
            backgroundColor: "#000",
            color: "#fff",
            margin: "-24px 0 -24px -24px",
          }}
        >
          <section style={{ width: "264px", margin: "0 auto" }}>
            <header
              style={{
                fontSize: "40px",
                fontWeight: 500,
                padding: "16px 0",
              }}
            >
              Ready yo talk?
            </header>
            <article style={{ color: "#7f7f7f", fontSize: "14px" }}>
              Need more information and automate coworking management? Ask about
              our products, pricing, implementation, or anything else. Our
              advisors are here to help you start your journey to success.
            </article>
            <footer
              style={{
                paddingTop: "330px",
                paddingBottom: "40px",
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              <div>You can also contact us</div>
              <div style={{ paddingTop: "4px", paddingBottom: "24px" }}>
                contact@reinventventures.com
              </div>
              <div style={{ color: "#7f7f7f" }}>
                The information you provide will be used in accordance with the
                terms of our{" "}
                <span style={{ color: "#fff" }}>Privacy Policy</span>.
              </div>
            </footer>
          </section>
        </article>
        <aside style={{ width: "616px", padding: "28px 24px 40px 40px" }}>
          <CustomForm />
        </aside>
      </div>
    </Modal>
  );
}

export default CustomModal;
