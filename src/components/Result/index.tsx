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
      <div className="bg-white flex flex-col items-center justify-center lg:w-944 lg:h-685 lg:px-48 text-center w-screen h-screen px-6">
        <Image src="/images/result.png" width={212} height={153} alt="result" />
        <p className="lg:text-5xxl maxlg:text-3xxl font-light my-4 italic">
          We have received your submission.
        </p>
        <p className="text-base">
          Thank you for reaching out to us! Someone from our Client Success Team
          will get in touch with you within 24 hours.
        </p>
        <button
          className="text-base bg-primary text-white font-medium px-6 py-2.5 "
          onClick={onClose}
        >
          Done
        </button>
      </div>
    </div>
  );
}
