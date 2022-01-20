import { useState, useEffect } from "react";
import Link from "next/link";
import CustomModal from "./Modal";

interface IBookFreeDemoButtonProps {
  textColor?: "white" | "primary";
  borderColor?: "white" | "primary";
  bgColor?: "default" | "white" | "primary";
  buttonText?: string;
}

export default function BookFreeDemoButton({
  textColor = "white",
  borderColor = "white",
  bgColor = "default",
  buttonText = "Book Free Demo",
}: IBookFreeDemoButtonProps) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <div className="maxlg:hidden">
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
        >
          {buttonText}
        </button>
      </div>
      <div className="lg:hidden">
        <Link href="/bookDemo">
          <a>
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
            >
              {buttonText}
            </button>
          </a>
        </Link>
      </div>

      <CustomModal
        visible={modalVisible}
        page={"bookDemo"}
        handleCancel={() => setModalVisible(false)}
      />
    </>
  );
}
