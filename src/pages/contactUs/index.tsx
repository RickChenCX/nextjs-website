import React, { ReactElement } from "react";
import CustomForm from "components/Form";

export default function Flex() {
  return <CustomForm page="contactUs" />;
}

Flex.getLayout = function getLayout(Flex: ReactElement) {
  return <>{Flex}</>;
};
