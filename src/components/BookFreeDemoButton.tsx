import React, { useState } from "react";
import { ProductType } from "../constant/formConfig";
import CustomModal from "./Modal";
import Form from "./Form2Mobile";

interface IBookFreeDemoButtonProps {
  buttonText?: string;
  buttonWidth?: number;
  buttonHeight?: number;
  textSize?: number;
  type?: "default" | "primary" | "primary2" | "transparent";
  product?: ProductType[];
}

/***
 * 说明：
 * type = "default" => 白底白边框蓝色字体
 * type = "primary" => 蓝底蓝边框白色字体
 * type = "primary2" => 白底蓝边框蓝色字体
 * type = "transparent" => 透明底白边框白色字体
 */
export default function BookFreeDemoButton({
  buttonText = "Book Free Demo",
  buttonWidth = 152,
  buttonHeight = 40,
  textSize = 14,
  type = "default",
  product,
}: IBookFreeDemoButtonProps) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [formVisible, setFormVisible] = useState<boolean>(false);

  return (
    <>
      <div className="maxlg:hidden">
        <button
          style={{
            width: `${buttonWidth}px`,
            height: `${buttonHeight}px`,
            fontSize: `${textSize}px`,
          }}
          className={`
                transition ease-in-out duration-300 
                border border-solid font-medium cursor-pointer
                ${
                  type === "default"
                    ? "text-primary border-white bg-white hover:text-primary2 active:text-primary3"
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
                ${
                  type === "transparent"
                    ? "text-white border-white hover:text-primary hover:border-primary"
                    : ""
                }
              `}
          onClick={() => setModalVisible(true)}
        >
          {buttonText}
        </button>
      </div>
      <div className="lg:hidden">
        <button
          style={{
            width: `${buttonWidth}px`,
            height: `${buttonHeight}px`,
            fontSize: `${textSize}px`,
          }}
          onClick={() => setFormVisible(true)}
          className={`
                transition ease-in-out duration-300 
                border border-solid font-medium cursor-pointer
                ${
                  type === "default"
                    ? "text-primary border-white bg-white hover:text-primary2 active:text-primary3"
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
                ${
                  type === "transparent"
                    ? "text-white border-white hover:text-primary hover:border-primary"
                    : ""
                }
              `}
        >
          {buttonText}
        </button>
      </div>

      <CustomModal
        visible={modalVisible}
        page={"bookDemo"}
        handleCancel={() => setModalVisible(false)}
        product={product}
      />
      <Form
        visible={formVisible}
        page={"bookDemo"}
        handleClose={() => setFormVisible(false)}
      />
    </>
  );
}
