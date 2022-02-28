import { Modal, Spin } from "antd";
import CustomForm from "./Form";
import Footer from "./Footer";
import Result from "components/Result";
import { ProductType, ModalInfo } from "constant/formConfig";
import useSubmit from "hooks/useSubmit";

interface IProps {
  visible?: boolean;
  page: keyof typeof ModalInfo;
  product?: ProductType[];
  handleCancel?: () => void;
}
function CustomModal({ visible, page, handleCancel, product }: IProps) {
  const { handleResultClose, handleSubmit, spinning, showResult } = useSubmit({
    page,
    handleCancel,
  });
  return (
    <>
      <Modal
        visible={visible}
        footer={null}
        width={944}
        onCancel={handleCancel}
        style={{ overflowY: "auto", top: 72 }}
        destroyOnClose
        getContainer={false}
      >
        <div className="flex">
          <article
            className={`${ModalInfo[page].bg} text-white -my-6 mr-0 -ml-6`}
          >
            <section className="my-10 ml-10 mr-6" style={{ width: "264px" }}>
              <header className="text-4xxl font-medium">
                {ModalInfo[page].title}
              </header>
              <article className={`${ModalInfo[page].color} text-sm pt-4`}>
                {ModalInfo[page].desc}
              </article>
              <Footer page={page} color={ModalInfo[page].color} />
            </section>
          </article>
          <aside className="flex-1 pr-6 pl-10 pt-4">
            <Spin size="large" spinning={spinning}>
              <CustomForm
                page={page}
                handleSubmit={handleSubmit}
                product={product}
              />
            </Spin>
          </aside>
        </div>
      </Modal>
      <Result visiable={showResult} onClose={handleResultClose} />
    </>
  );
}

export default CustomModal;
