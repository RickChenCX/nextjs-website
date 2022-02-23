import ContactUsButton from "./../ContactUsButton";
function CustomContactUs() {
  return (
    <div
      className={` bg-black text-white min-h-102 flex justify-between items-center pl-10 pr-32 maxlg:p-8  maxlg:flex-col maxlg:items-start `}
    >
      <p className={`text-left text-2xl m-0`}>
        Discover what the BOSS platform can do for you
      </p>
      <div className={`maxlg:mt-24`}>
        <ContactUsButton type="primary" buttonWidth={120} buttonHeight={38} />
      </div>
    </div>
  );
}
export default CustomContactUs;
