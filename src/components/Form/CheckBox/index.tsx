import { Checkbox } from "antd";
import RequiredTag from "../RequiredTag";
import commonStyles from "../common.module.css";
interface IProps {
  label: string;
  options: any;
  required?: boolean;
}
function CustomCheckbox({ label, required, options }: IProps) {
  return (
    <div>
      <div className={commonStyles.label}>
        {required && <RequiredTag />}
        {label}
      </div>
      <Checkbox.Group options={options} defaultValue={["bossFlex"]} />
    </div>
  );
}

export default CustomCheckbox;
