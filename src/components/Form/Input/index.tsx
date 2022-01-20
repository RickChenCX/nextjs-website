import { useState } from "react";
import { InputItem, List, Flex, Picker } from "antd-mobile";
import RequiredTag from "../RequiredTag";
import styles from "./index.module.css";
import commonStyles from "../common.module.css";

interface IProps {
  label: string;
  required?: boolean;
  showPreSelect?: boolean;
  handleInput?: (v: string) => void;
  handlePicker?: (v: any) => void;
}

const phoneCode = [
  [
    {
      label: "+86",
      value: "86",
    },
    {
      label: "+87",
      value: "87",
    },
  ],
];

function CustomInput({
  label,
  required,
  showPreSelect,
  handleInput,
  handlePicker,
}: IProps) {
  const [pickerValue, setPickerValue] = useState<any>(undefined);
  return (
    <div>
      <div className={commonStyles.label}>
        {required && <RequiredTag />}
        {label}
      </div>
      <Flex>
        {showPreSelect && (
          <Picker
            data={phoneCode}
            cols={1}
            cascade={false}
            value={pickerValue}
            onChange={(v) => setPickerValue(v)}
            extra=" "
          >
            <List.Item
              arrow="down"
              style={{
                border: "1px solid #d9d9d9",
                width: "98px",
                minHeight: "34px",
                height: "36px",
              }}
            ></List.Item>
          </Picker>
        )}

        <InputItem className={styles.inputMobile} placeholder="Input" />
      </Flex>
    </div>
  );
}

export default CustomInput;
