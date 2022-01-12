import Image from "next/image";
import { FooterListData } from "./constant";

export default function Footer() {
  return (
    <footer>
      <section className="bg-black flex justify-center md:py-14 py-10 maxmd:pl-4">
        <div className={`md:grid md:grid-cols-2 md:gap-28`}>
          <div>
            <h3 className="text-white mb-0 md:text-5xxl text-3xxl font-light md:w-560">Ready to get started?</h3>
            <p className="text-white mb-0 text-base text-neutral7 font-normal md:w-560">
              Take the first step to run your workspace business with the
              leading space management software today.
            </p>
          </div>
          <div className="maxmd:flex maxmd:mt-16">
            <div className="md:mb-6 maxmd:mr-2">
              <button
                className="border border-solid border-primary w-155 h-10 text-primary bg-white md:text-sm maxmd:text-base"
              >
                Book Free Demo
              </button>
            </div>
            <div>
              <button className="border border-solid border-white w-152 h-10 text-white md:text-sm maxmd:text-base">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex md:p-8 py-8 px-4">
        <div className="maxmd:hidden">
          <Image src="/images/logo1.png" alt="logo" width={68} height={24} />
        </div>
        <div className="maxmd:hidden grow pl-24">
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
          <div className="text-xs text-neutral7 pt-44">
            <span className="pr-4">Terms & Conditions</span>
            <span className="pr-4">Privacy Policy</span>
            <span>©2022 BOSS All Rights Reserved.</span>
          </div>
        </div>
        <div>
          <h3 className="mb-0 text-neutral12 text-2xl">Newsletter</h3>
          <p className="mb-0 text-neutral12 text-sm pb-12 md:w-488">
            Stay up to date with coworking insights, feature highlights, company
            news, upcoming webinars, and eBooks.
          </p>
          <div className="flex border-b border-solid pb-2 md:w-488">
            <div className="md:w-80 mr-2.5">
              <input
                type="text"
                placeholder="Enter your business email"
                style={{ width: "100%", border: "none" }}
              />
            </div>
            <button
              className="maxmd:hidden border border-solid border-primary w-155 h-10 text-white bg-primary sm:text-sm xs:text-base"
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-neutral7 pt-2">You may unsubscribe at any time. For more information please review our
            <span className="text-neutral12 text-sm">Privacy Policy</span>.
          </p>
        </div>
      </section>
    </footer>
  );
}
