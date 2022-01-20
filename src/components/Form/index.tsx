import React from "react";
import Form from "components/Modal/Form";
import Footer from "./Footer";
import { ModalInfo } from "constant/formConfig";
import Union from "../../svgs/Union.svg";

interface IProps {
  page: keyof typeof ModalInfo;
}

function CustomForm({ page }: IProps) {
  return (
    <div>
      <header
        className={`${ModalInfo[page].bg} w-full flex items-center justify-end pr-4 h-11 fixed top-0 left-0 z-10`}
      >
        <Union onClick={() => window.history.go(-1)}></Union>
      </header>
      <aside className={`${ModalInfo[page].bg} text-white mt-11`}>
        <header className="px-4 pt-3 pb-4">
          <span style={{ fontSize: "40px", fontWeight: 500 }}>
            {ModalInfo[page].title}
          </span>
          <article className="text-neutral7 text-sm">
            {ModalInfo[page].desc}
          </article>
        </header>
      </aside>
      <aside className="bg-white mx-4" style={{ padding: "16px 1px 0" }}>
        <Form page={page} isMobile={true}></Form>
      </aside>
      <Footer />
    </div>
  );
}

export default CustomForm;
