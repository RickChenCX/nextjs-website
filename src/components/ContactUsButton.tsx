import { useState } from "react";
import CustomModal from "./Modal";
import Form from "./Form";

interface IContactUsButtonProps {
  textColor?: "white" | "primary";
  borderColor?: "white" | "primary";
  bgColor?: "default" | "white" | "primary";
  from?: "default" | "footer";
  btnWidth?: string;
  onClose?: () => void;
}

export default function ContactUsButton({
  textColor = "white",
  borderColor = "white",
  bgColor = "default",
  from = "default",
  btnWidth,
  onClose,
}: IContactUsButtonProps) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [formVisible, setFormVisible] = useState<boolean>(false);

  return (
    <>
      <div className="maxlg:hidden">
        {from === "default" ? (
          <button
            className={`
                  border border-solid w-152 h-10 maxlg:h-9
                  ${textColor == "white" ? "text-white" : "text-primary"}
                  ${borderColor === "white" ? "border-white" : "border-primary"}
                  ${
                    bgColor === "default"
                      ? ""
                      : bgColor === "white"
                      ? "bg-white"
                      : "bg-primary"
                  }
                  text-sm
                `}
            onClick={() => setModalVisible(true)}
            style={btnWidth ? { width: btnWidth } : {}}
          >
            Contact us
          </button>
        ) : (
          <a
            className="block mb-0 text-sm text-neutral12 pb-2 cursor-pointer text hover:underline hover:text-neutral12"
            onClick={() => setModalVisible(true)}
          >
            Contact Us
          </a>
        )}
      </div>
      <div className="lg:hidden">
        {from === "default" ? (
          <button
            className={`
                  border border-solid w-152 h-10 maxlg:h-9
                  ${textColor == "white" ? "text-white" : "text-primary"}
                  ${borderColor === "white" ? "border-white" : "border-primary"}
                  ${
                    bgColor === "default"
                      ? ""
                      : bgColor === "white"
                      ? "bg-white"
                      : "bg-primary"
                  }
                  text-sm
                `}
            onClick={() => setFormVisible(true)}
          >
            Contact us
          </button>
        ) : (
          <div>
            <a
              onClick={() => setFormVisible(true)}
              className="block mb-0 text-base text-neutral12 cursor-pointer text hover:underline hover:text-neutral12"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
      <CustomModal
        visible={modalVisible}
        page={"contactUs"}
        handleCancel={() => {
          setModalVisible(false);
          onClose && onClose();
        }}
      />
      <Form
        visible={formVisible}
        page="contactUs"
        handleClose={() => setFormVisible(false)}
      />
    </>
  );
}
