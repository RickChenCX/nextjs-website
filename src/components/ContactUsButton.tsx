import { useState } from "react";
import CustomModal from "./Modal";
import Form from "./Form2Mobile";

/***
 * 说明：
 * type = "default" => 透明底白边框白色字体
 * type = "primary" => 蓝底蓝边框白色字体
 * type = "primary2" => 白底蓝边框蓝色字体
 */
interface IContactUsButtonProps {
  type?: "default" | "primary" | "primary2";
  from?: "default" | "footer";
  fontWeight?: "font-medium" | "font-normal";
  buttonWidth?: number;
  buttonHeight?: number;
  onClose?: () => void;
}

export default function ContactUsButton({
  type = "default",
  from = "default",
  fontWeight = "font-medium",
  buttonWidth = 152,
  buttonHeight = 40,
  onClose,
}: IContactUsButtonProps) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [formVisible, setFormVisible] = useState<boolean>(false);
  return (
    <>
      <div className="maxlg:hidden">
        {from === "default" ? (
          <button
            style={{
              width: `${buttonWidth}px`,
              height: `${buttonHeight}px`,
            }}
            className={`
                  transition ease-in-out duration-300 
                  border border-solid text-sm font-medium
                  ${
                    type === "default"
                      ? "text-white border-white hover:bg-white hover:bg-opacity-40 active:bg-white active:bg-opacity-20"
                      : ""
                  }
                  ${
                    type === "primary"
                      ? "text-white border-primary bg-primary hover:bg-primary2 hover:border-primary2 active:bg-primary3 active:border-primary3"
                      : ""
                  }
                  ${
                    type === "primary2"
                      ? "text-primary border-primary bg-white hover:text-primary2 hover:border-primary2 hover:bg-purple-50 active:text-primary3 active:border-primary3 active:bg-primary2"
                      : ""
                  }
                `}
            onClick={() => setModalVisible(true)}
          >
            Contact Us
          </button>
        ) : (
          <a
            className={`block mb-0 text-sm text-neutral12 pb-2 cursor-pointer text hover:underline hover:text-neutral12 ${fontWeight}`}
            onClick={() => setModalVisible(true)}
          >
            Contact Us
          </a>
        )}
      </div>
      <div className="lg:hidden">
        {from === "default" ? (
          <button
            style={{
              width: `${buttonWidth}px`,
              height: `${buttonHeight}px`,
            }}
            className={`
                  transition ease-in-out duration-300 
                  border border-solid text-sm font-medium
                  ${
                    type === "default"
                      ? "text-white border-white hover:bg-white hover:bg-opacity-40 active:bg-white active:bg-opacity-20"
                      : ""
                  }
                  ${
                    type === "primary"
                      ? "text-white border-primary bg-primary hover:bg-primary2 hover:border-primary2 active:bg-primary3 active:border-primary3"
                      : ""
                  }
                  ${
                    type === "primary2"
                      ? "text-primary border-primary bg-white hover:text-primary2 hover:border-primary2 hover:bg-purple-50 active:text-primary3 active:border-primary3 active:bg-primary2"
                      : ""
                  }
                `}
            onClick={() => setFormVisible(true)}
          >
            Contact Us
          </button>
        ) : (
          <div>
            <a
              onClick={() => setFormVisible(true)}
              className="block mb-0 text-base text-neutral12 cursor-pointer text hover:text-primary font-medium"
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
