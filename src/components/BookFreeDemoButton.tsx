import Link from "next/link";

interface IBookFreeDemoButtonProps {
  textColor?: "white" | "primary";
  borderColor?: "white" | "primary";
  bgColor?: "default" | "white" | "primary";
}

export default function BookFreeDemoButton({
  textColor = "white",
  borderColor = "white",
  bgColor = "default",
}: IBookFreeDemoButtonProps) {
  return (
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
        >
          Book Free Demo
        </button>
      </a>
    </Link>
  );
}
