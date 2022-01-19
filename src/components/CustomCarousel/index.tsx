import { Carousel } from "antd";
import styles from "./index.module.css";
import Image from "next/image";

function CustomCarousel() {
  return (
    <Carousel
      autoplay
      className={`${styles.container} lg:px-26 lg:py-10 maxlg:px-6 maxlg:pt-10 maxlg:pb-18`}
    >
      <div>
        <div
          className={`flex justify-between maxlg:flex-col-reverse maxlg:text-center`}
        >
          <div className={`maxlg:hidden`}>
            <Image src="/images/flexPc-0.png" width={320} height={320} alt="" />
          </div>
          <div className={`lg:hidden`}>
            <Image src="/images/flexPc-0.png" width={240} height={240} alt="" />
          </div>
          <section className={`${styles.detail} flex justify-between`}>
            <h3 className={`lg:text-5xxl lg:w-12 maxlg:text-3xxl maxlg:w-8`}>
              1
            </h3>
            <div>
              <h4
                className={`lg:text-5xxl lg:w-447 pb-4 maxlg:text-3xxl maxlg:w-263`}
              >
                Leasing Management
              </h4>
              <h5 className={`lg:text-base lg:w-455 maxlg:w-263 maxlg:pb-6`}>
                Unify core and flex leasing operations to sell more, reach full
                occupancy sooner, and operate with the highest efficiency.
              </h5>
            </div>
          </section>
        </div>
      </div>
      <div>
        <div
          className={`flex justify-between maxlg:flex-col-reverse maxlg:text-center`}
        >
          <div className={`maxlg:hidden`}>
            <Image src="/images/flexPc-0.png" width={320} height={320} alt="" />
          </div>
          <div className={`lg:hidden`}>
            <Image src="/images/flexPc-0.png" width={240} height={240} alt="" />
          </div>
          <section className={`${styles.detail} flex justify-between`}>
            <h3 className={`lg:text-5xxl lg:w-12 maxlg:text-3xxl maxlg:w-8`}>
              2
            </h3>
            <div>
              <h4
                className={`lg:text-5xxl lg:w-447 pb-4 maxlg:text-3xxl maxlg:w-263`}
              >
                Tenant Experience
              </h4>
              <h5 className={`lg:text-base lg:w-455 maxlg:w-263 maxlg:pb-6`}>
                Deliver a superior user experience and boost customer retention.
              </h5>
            </div>
          </section>
        </div>
      </div>
      <div>
        <div
          className={`flex justify-between maxlg:flex-col-reverse maxlg:text-center`}
        >
          <div className={`maxlg:hidden`}>
            <Image src="/images/flexPc-0.png" width={320} height={320} alt="" />
          </div>
          <div className={`lg:hidden`}>
            <Image src="/images/flexPc-0.png" width={240} height={240} alt="" />
          </div>
          <section className={`${styles.detail} flex justify-between`}>
            <h3 className={`lg:text-5xxl lg:w-12 maxlg:text-3xxl maxlg:w-8`}>
              3
            </h3>
            <div>
              <h4
                className={`lg:text-5xxl lg:w-447 pb-4 maxlg:text-3xxl maxlg:w-263`}
              >
                Portfolio Business Insight
              </h4>
              <h5 className={`lg:text-base lg:w-455 maxlg:w-263 maxlg:pb-6`}>
                Increase revenue. In turn, maximize your building&apos;s value.
              </h5>
            </div>
          </section>
        </div>
      </div>
    </Carousel>
  );
}
export default CustomCarousel;
