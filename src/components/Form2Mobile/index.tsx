import React from "react";
import { Spin } from "antd";
import Form from "components/Modal/Form";
import Footer from "./Footer";
import { ModalInfo, ProductType } from "constant/formConfig";
import Result from "components/Result";
import useSubmit from "hooks/useSubmit";
import Union from "../../svgs/Union.svg";

interface IProps {
  page: keyof typeof ModalInfo;
  visible?: boolean;
  product?: ProductType[];
  handleClose: () => void;
}

function CustomForm({ page, visible, handleClose, product }: IProps) {
  const { handleResultClose, handleSubmit, spinning, showResult } = useSubmit({
    page,
    handleCancel: handleClose,
    isMobile: true,
  });

  return (
    <>
      {visible && (
        <div
          className={`${
            visible ? "" : "hidden"
          } fixed z-30 w-screen h-screen top-0 left-0 bg-white overflow-y-auto`}
        >
          <header
            className={`w-full flex items-center justify-end pr-4 h-11 fixed top-0 left-0 z-10`}
            style={{ backgroundColor: ModalInfo[page].bg }}
          >
            <Union onClick={() => handleClose()}></Union>
          </header>
          <aside
            className={`text-white mt-11`}
            style={{ backgroundColor: ModalInfo[page].bg }}
          >
            <header className="px-4 pt-3 pb-4">
              <span className="text-4xl font-medium">
                {ModalInfo[page].title}
              </span>
              <article className={`${ModalInfo[page].color} text-sm`}>
                {ModalInfo[page].desc}
              </article>
            </header>
          </aside>
          <aside className="bg-white mx-4" style={{ padding: "16px 1px 0" }}>
            <Spin
              size="large"
              spinning={spinning}
              style={{ position: "fixed" }}
            >
              <Form
                page={page}
                isMobile={true}
                handleSubmit={handleSubmit}
                product={product}
              />
            </Spin>
          </aside>
          <Footer />
        </div>
      )}
      <Result visiable={showResult} onClose={handleResultClose} />
    </>
  );
}

export default CustomForm;
