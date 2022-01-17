import React, { ReactElement } from "react";
import Layout from "components/Layout";
import CustomPopup from "components/Popup";

export default function Flex() {
  return <CustomPopup />;
}

Flex.getLayout = function getLayout(Flex: ReactElement) {
  return <>{Flex}</>;
};
