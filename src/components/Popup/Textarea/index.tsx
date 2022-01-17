import { TextareaItem } from "antd-mobile";
import RequiredTag from "../RequiredTag";
import commonStyles from "../common.module.css";
import styles from "./index.module.css";

interface IProps {
  label: string;
  required?: boolean;
}

function CustomTextarea({ label, required }: IProps) {
  return (
    <div>
      <div className={commonStyles.label}>
        {required && <RequiredTag />}
        {label}
      </div>
      <TextareaItem className={styles.textareaMobile} rows={5} count={2000} />
    </div>
  );
}

export default CustomTextarea;
