import Image from "next/image";

interface ResultProps {
  visiable: boolean;
  onClose: () => void;
}
export default function Result({ visiable, onClose }: ResultProps) {
  return (
    <div
      className={`${
        visiable ? "" : "hidden"
      } fixed z-30 lg:bg-black maxlg:bg-white lg:bg-opacity-50 flex items-center justify-center w-screen h-screen top-0 left-0`}
      onClick={(e) => {
        onClose();
        e.stopPropagation();
      }}
      onScroll={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        className="bg-white text-neutral12 flex flex-col items-center justify-center lg:w-944 lg:h-685 lg:px-40 text-center w-screen h-screen px-6"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Image src="/images/result.png" width={212} height={153} alt="result" />
        <p className="lg:text-5xxl maxlg:text-3xxl font-light my-4 italic">
          Thank you for registering your interest!
        </p>
        <p className="text-base">
          A member of our team will get in touch with you shortly.
        </p>
        <button
          className="text-base bg-primary text-white font-medium px-6 py-2.5 "
          onClick={onClose}
        >
          Back
        </button>
      </div>
    </div>
  );
}
