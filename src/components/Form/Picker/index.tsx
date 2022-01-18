import { useState } from "react";
import { Picker, List } from "antd-mobile";
import RequiredTag from "../RequiredTag";
import commonStyles from "../common.module.css";

const seasons = [
  [
    {
      label: "2013",
      value: "2013",
    },
    {
      label: "2014",
      value: "2014",
    },
  ],
  [
    {
      label: "春",
      value: "春",
    },
    {
      label: "夏",
      value: "夏",
    },
  ],
];

interface IProps {
  required?: boolean;
  label?: string;
}
function CustomPicker({ required, label }: IProps) {
  const [pickerValue, setPickerValue] = useState<any>(undefined);
  return (
    <div>
      <div className={commonStyles.label}>
        {required && <RequiredTag />}
        {label}
      </div>
      <Picker
        data={seasons}
        cascade={false}
        extra=" "
        value={pickerValue}
        onChange={(v) => setPickerValue(v)}
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
