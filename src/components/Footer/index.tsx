import styles from "./index.module.css";
import Image from "next/image";
import { FooterListData } from "./constant";

export default function Footer() {
  return (
    <footer>
      <section className={`bg-black flex justify-center ${styles.footerTop}`}>
        <div className={`flex`}>
          <div className={`${styles.footerLeft}`}>
            <h3 className={`text-white mb-0`}>Ready to get started?</h3>
            <p className={`text-white mb-0`}>
              Take the first step to run your workspace business with the
              leading space management software today.
            </p>
          </div>
          <div className={`${styles.footerRight}`}>
            <div className={`mb-6`}>
              <button
                className={`border border-solid border-primary w-155 h-10 text-primary bg-white sm:text-sm xs:text-base `}
              >
                Book Free Demo
              </button>
            </div>
            <div>
              <button className="border border-solid border-white w-152 h-10 text-white sm:text-sm xs:text-base">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={`flex ${styles.footerBottom}`}>
        <Image src="/images/logo1.png" alt="logo" width={68} height={24} />
        <div className={`lg:grow ${styles.footerBottomMiddle}`}>
          <div className={`flex`}>
            {FooterListData.map((item, index1) => {
              return (
                <div
                  key={index1}
                  className={`${styles.footerBottomMiddleItem}`}
                >
                  <h3 className={`mb-0`}>{item.title}</h3>
                  {item.children.map((temp, index2) => (
                    <p className={`mb-0`} key={index2}>
                      {temp}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
          <div className={`${styles.footerBottomMiddleBottom}`}>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>©2022 BOSS All Rights Reserved.</span>
          </div>
        </div>
        <div className={`${styles.footerBottomRight}`}>
          <h3 className={`mb-0`}>Newsletter</h3>
          <p className={`mb-0`}>
            Stay up to date with coworking insights, feature highlights, company
            news, upcoming webinars, and eBooks.
          </p>
          <div className={`${styles.footerBottomRightInputBox}`}>
            <input
              type="text"
              className={``}
              placeholder="Enter your business email"
            />
            <button
              className={`fr border border-solid border-primary w-155 h-10 text-white bg-primary sm:text-sm xs:text-base `}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
}
