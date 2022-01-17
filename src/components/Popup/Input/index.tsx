import { InputItem } from "antd-mobile";
import RequiredTag from "../RequiredTag";
import styles from "./index.module.css";
import commonStyles from "../common.module.css";

interface IProps {
  label: string;
  required?: boolean;
}

function CustomInput({ label, required }: IProps) {
  return (
    <div>
      <div className={commonStyles.label}>
        {required && <RequiredTag />}
        {label}
      </div>
      <InputItem className={styles.inputMobile} />
    </div>
  );
}

export default CustomInput;
