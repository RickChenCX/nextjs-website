import { useState, useEffect } from "react";
import Link from "next/link";
import CustomModal from "./Modal";

interface IBookFreeDemoButtonProps {
  textColor?: "white" | "primary";
  borderColor?: "white" | "primary";
  bgColor?: "default" | "white" | "primary";
}

// export function IsPC(): boolean {
//   const userAgentInfo = navigator.userAgent;
//   const Agents = [
//     "Android",
//     "iPhone",
//     "SymbianOS",
//     "Windows Phone",
//     "iPad",
//     "iPod",
//   ];

//   let flag = true;
//   for (let v = 0; v < Agents.length; v++) {
//     if (userAgentInfo.indexOf(Agents[v]) > 0) {
//       flag = false;
//       break;
//     }
//   }
//   return flag;
// }

export default function BookFreeDemoButton({
  textColor = "white",
  borderColor = "white",
  bgColor = "default",
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
          Book Free Demo
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
              Book Demo
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
