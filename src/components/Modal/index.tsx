import { Modal } from "antd";
import CustomForm from "./Form";
import Footer from "./Footer";
import { ModalInfo } from "constant/formConfig";
interface IProps {
  visible?: boolean;
  page: keyof typeof ModalInfo;
  handleCancel?: () => void;
}
function CustomModal({ visible, page, handleCancel }: IProps) {
  return (
    <Modal visible={visible} footer={null} width={944} onCancel={handleCancel}>
      <div className="flex">
        <article
          className={`${ModalInfo[page].bg} text-white -my-6 mr-0 -ml-6`}
        >
          <section className="my-10 mx-10" style={{ width: "264px" }}>
            <header className="text-4xxl font-medium">
              {ModalInfo[page].title}
            </header>
            <article className="text-neutral7 text-sm pt-4">
              {ModalInfo[page].desc}
            </article>
            <Footer />
          </section>
        </article>
        <aside className="flex-1 pr-6 pl-10 pt-7">
          <CustomForm page={page} />
        </aside>
      </div>
    </Modal>
  );
}

export default CustomModal;
