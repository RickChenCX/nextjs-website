import { useState, useCallback } from "react";
import { createBookDemo, createContact } from "api/submit";

interface IProps {
  page: "contactUs" | "bookDemo";
  handleCancel?: () => void;
}
function useSubmit({ page, handleCancel }: IProps) {
  const [spinning, setSpinning] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async (values: any) => {
      try {
        setSpinning(true);
        if (page === "bookDemo") {
          await createBookDemo(values);
        } else {
          await createContact(values);
        }
        setShowResult(true);
        setSpinning(false);
        handleCancel && handleCancel();
      } catch (e) {
        console.log(e);
        setSpinning(false);
      }
    },
    [handleCancel, page]
  );
  const handleResultClose = () => setShowResult(false);

  return {
    spinning,
    showResult,
    handleSubmit,
    handleResultClose,
  };
}

export default useSubmit;
