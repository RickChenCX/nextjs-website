import styles from "./index.module.css";
import ContactUsButton from "../ContactUsButton";
function CustomChart() {
  return (
    <div
      className={`${styles.contact} flex justify-between items-center pl-10 pr-32 xs:p-8  xs:flex-col xs:items-start `}
    >
      <p>Discover what the BOSS platform can do for you</p>
      <div className={`maxlg:mt-24`}>
        <ContactUsButton
          textColor={"white"}
          borderColor={"primary"}
          bgColor={"primary"}
        />
      </div>
    </div>
  );
}
export default CustomChart;
