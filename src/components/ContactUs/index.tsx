import styles from "./index.module.css";
function CustomChart() {
  return (
    <div
      className={`${styles.contact} flex justify-between items-center pl-10 pr-32 xs:p-8  xs:flex-col xs:items-start `}
    >
      <p>Discover what the BOSS platform can do for you</p>

      <div className={`${styles.contactBtn} xs:mt-24`}>concat us</div>
    </div>
  );
}
export default CustomChart;
