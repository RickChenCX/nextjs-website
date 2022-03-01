import { useState, useCallback } from "react";
import { createBookDemo, createContact } from "api/submit";

interface IProps {
  page: "contactUs" | "bookDemo";
  isMobile?: boolean;
  handleCancel?: () => void;
}
function useSubmit({ page, handleCancel, isMobile }: IProps) {
  const [spinning, setSpinning] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async (values: any) => {
      if (isMobile) {
        Object.keys(values).forEach((v) => {
          if (values[v]?.label) {
            values[v] = values[v].value;
          }
        });
      }
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
    [handleCancel, isMobile, page]
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
