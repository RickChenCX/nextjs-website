import { Carousel } from "antd";
import styles from "./index.module.css";
import Image from "next/image";

function CustomCarousel() {
  return (
    <Carousel
      autoplay
      className={`${styles.container} xl:px-26 xl:py-10 xs:px-6 xs:pt-10 xs:pb-18`}
    >
      <div>
        <div
          className={`flex justify-between xs:flex-col-reverse xs:text-center`}
        >
          <div className={`xs:hidden`}>
            <Image src="/images/flexPc-0.png" width={320} height={320} alt="" />
          </div>
          <div className={`xl:hidden`}>
            <Image src="/images/flexPc-0.png" width={240} height={240} alt="" />
          </div>
          <section className={`${styles.detail} flex justify-between`}>
            <h3 className={`xl:text-5xxl xl:w-12 xs:text-3xxl xs:w-8`}>1</h3>
            <div>
              <h4
                className={`xl:text-5xxl xl:w-447 pb-4 xs:text-3xxl xs:w-263`}
              >
                Leasing Management
              </h4>
              <h5 className={`xl:text-base xl:w-455 xs:w-263 xs:pb-6`}>
                Unify core and flex leasing operations to sell more, reach full
                occupancy sooner, and operate with the highest efficiency.
              </h5>
            </div>
          </section>
        </div>
      </div>
      <div>
        <div
          className={`flex justify-between xs:flex-col-reverse xs:text-center`}
        >
          <div className={`xs:hidden`}>
            <Image src="/images/flexPc-0.png" width={320} height={320} alt="" />
          </div>
          <div className={`xl:hidden`}>
            <Image src="/images/flexPc-0.png" width={240} height={240} alt="" />
          </div>
          <section className={`${styles.detail} flex justify-between`}>
            <h3 className={`xl:text-5xxl xl:w-12 xs:text-3xxl xs:w-8`}>2</h3>
            <div>
              <h4
                className={`xl:text-5xxl xl:w-447 pb-4 xs:text-3xxl xs:w-263`}
              >
                Tenant Experience
              </h4>
              <h5 className={`xl:text-base xl:w-455 xs:w-263 xs:pb-6`}>
                Deliver a superior user experience and boost customer retention.
              </h5>
            </div>
          </section>
        </div>
      </div>
      <div>
        <div
          className={`flex justify-between xs:flex-col-reverse xs:text-center`}
        >
          <div className={`xs:hidden`}>
            <Image src="/images/flexPc-0.png" width={320} height={320} alt="" />
          </div>
          <div className={`xl:hidden`}>
            <Image src="/images/flexPc-0.png" width={240} height={240} alt="" />
          </div>
          <section className={`${styles.detail} flex justify-between`}>
            <h3 className={`xl:text-5xxl xl:w-12 xs:text-3xxl xs:w-8`}>3</h3>
            <div>
              <h4
                className={`xl:text-5xxl xl:w-447 pb-4 xs:text-3xxl xs:w-263`}
              >
                Portfolio Business Insight
              </h4>
              <h5 className={`xl:text-base xl:w-455 xs:w-263 xs:pb-6`}>
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
