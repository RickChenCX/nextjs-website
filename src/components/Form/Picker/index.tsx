import { useState } from "react";
import { Picker, List } from "antd-mobile";
import RequiredTag from "../RequiredTag";
import commonStyles from "../common.module.css";

interface IProps {
  options: any;
  required?: boolean;
  label?: string;
  handlePicker?: (v?: any) => void;
}
function CustomPicker({ required, label, options, handlePicker }: IProps) {
  const [pickerValue, setPickerValue] = useState<any>(undefined);
  return (
    <div>
      <div className={commonStyles.label}>
        {required && <RequiredTag />}
        {label}
      </div>
      <Picker
        data={[options]}
        cascade={false}
        extra=" "
        value={pickerValue}
        onChange={(v) => {
          handlePicker && handlePicker(v);
          setPickerValue(v);
        }}
      >
        <List.Item
          arrow="horizontal"
          style={{
            border: "1px solid #d9d9d9",
            width: "100%",
            minHeight: "34px",
            height: "36px",
            borderRadius: "2px",
          }}
        >
          <span className="text-sm text-neutral5">Select</span>
        </List.Item>
      </Picker>
    </div>
  );
}

export default CustomPicker;
