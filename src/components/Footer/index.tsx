import Image from "next/image";
import { FooterListData } from "./constant";

export default function Footer() {
  return (
    <footer>
      <section className="bg-home-footer maxlg:bg-home-footer-mobile flex justify-center lg:py-14 py-10 maxlg:pl-4">
        <div className={`lg:grid lg:grid-cols-3 lg:gap-28`}>
          <div className="lg:col-span-2">
            <h3 className="text-white mb-0 lg:text-5xxl text-3xxl font-light lg:w-560">Ready to get started?</h3>
            <p className="mb-0 text-base text-neutral7 font-normal lg:w-560">
              Take the first step to run your workspace business with the
              leading space management software today.
            </p>
          </div>
          <div className="maxlg:flex maxlg:mt-16">
            <div className="lg:mb-6 maxlg:mr-2">
              <button
                className="border border-solid border-primary w-155 h-10 text-primary bg-white lg:text-sm maxlg:text-base"
              >
                Book Free Demo
              </button>
            </div>
            <div>
              <button className="border border-solid border-white w-152 h-10 text-white lg:text-sm maxlg:text-base">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex lg:p-8 py-8 px-4">
        <div className="maxlg:hidden">
          <Image src="/images/logo-primary.png" alt="logo" width={68} height={24} />
        </div>
        <div className="maxlg:hidden grow pl-24">
          <div className="flex">
            {FooterListData.map((item, index1) => {
              return (
                <div key={index1} className={`pr-24`}>
                  <h3 className="mb-0 text-2xl text-neutral12 pb-4">{item.title}</h3>
                  {item.children.map((temp, index2) => (
                    <p className="mb-0 text-sm text-neutral12 pb-2" key={index2}>
                      {temp}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
          <div className="text-neutral7 pt-44">
            <span className="text-xxs pr-4">Terms & Conditions</span>
            <span className="text-xxs pr-4">Privacy Policy</span>
            <span className="text-xxs ">©2022 BOSS All Rights Reserved.</span>
          </div>
        </div>
        <div>
          <h3 className="mb-0 text-neutral12 text-2xl">Newsletter</h3>
          <p className="mb-0 text-neutral12 text-sm pb-12 lg:w-488">
            Stay up to date with coworking insights, feature highlights, company
            news, upcoming webinars, and eBooks.
          </p>
          <div className="flex border-b border-solid pb-2 lg:w-488">
            <div className="lg:w-80 mr-2.5">
              <input
                type="text"
                placeholder="Enter your business email"
                style={{ width: "100%", border: "none" }}
              />
            </div>
            <button
              className="maxlg:hidden border border-solid border-primary w-155 h-10 text-white bg-primary sm:text-sm xs:text-base"
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-neutral7 mb-0 pt-2">You may unsubscribe at any time. For more information please review our
            <span className="text-neutral12 text-sm">Privacy Policy</span>.
          </p>
          <div className="lg:hidden mt-2 mb-20">
            <button className="border border-solid border-primary w-155 h-10 text-white bg-primary sm:text-sm xs:text-base">
              Subscribe
            </button>
          </div>
          <div className="lg:hidden">
            <Image src="/images/logo-primary.png" alt="logo" width={68} height={24} />
          </div>
          <div className="lg:hidden text-neutral7 mt-4">
            <span className="text-xxs pr-2.5">Terms & Conditions</span>
            <span className="text-xxs pr-2.5">Privacy Policy</span>
            <span className="text-xxs ">©2022 BOSS All Rights Reserved.</span>
          </div>
        </div>
      </section>
    </footer>
  );
}
