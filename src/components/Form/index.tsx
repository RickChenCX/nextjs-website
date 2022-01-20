import React from "react";
import Form from "components/Modal/Form";
import Footer from "./Footer";
import { ModalInfo } from "constant/formConfig";

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
      <aside className="bg-white mx-4" style={{ padding: "16px 1px 0" }}>
        <Form page={page} isMobile={true}></Form>
      </aside>
      <Footer />
    </div>
  );
}

export default CustomForm;
