import React, { ReactElement } from "react";
import CustomForm from "components/Form";

export default function Flex() {
  return <CustomForm page="bookDemo" />;
}

Flex.getLayout = function getLayout(Flex: ReactElement) {
  return <>{Flex}</>;
};
