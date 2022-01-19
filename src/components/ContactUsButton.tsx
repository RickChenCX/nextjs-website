import { useState } from "react";
import Link from "next/link";
import CustomModal from "./Modal";

interface IContactUsButtonProps {
  textColor?: "white" | "primary";
  borderColor?: "white" | "primary";
  bgColor?: "default" | "white" | "primary";
}

export default function ContactUsButton({
  textColor = "white",
  borderColor = "white",
  bgColor = "default",
}: IContactUsButtonProps) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <Link href="/">
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
            onClick={() => setModalVisible(true)}
          >
            Contact us
          </button>
        </a>
      </Link>
      <CustomModal
        visible={modalVisible}
        page={"contactUs"}
        handleCancel={() => setModalVisible(false)}
      />
    </>
  );
}
