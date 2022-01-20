import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FooterListData } from "./constant";
import BookFreeDemoButton from "./../BookFreeDemoButton";
import ContactUsButton from "./../ContactUsButton";
import EmailSvg from "./../../svgs/email.svg";
import AddressSvg from "./../../svgs/address.svg";
import { Input } from "antd";
import { createEmail } from "api/submit";
import Result from "components/Result";

interface IFooterProps {
  from?: "homePage" | "aboutPage";
}

export default function Footer({ from = "homePage" }: IFooterProps) {
  const [email, setEmail] = useState(undefined);
  const [isModalVisable, setIsModalVisable] = useState<boolean>(false);
  const handleInputChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleSubscribe = useCallback(async () => {
    if (!email) {
      return;
    }
    const params = { businessEmail: email };

    try {
      await createEmail(params);
      setIsModalVisable(true);
    } catch (error) {
      console.error(error);
    }
  }, [email]);

  const handleModalClose = useCallback(() => {
    setIsModalVisable(false);
    setEmail(undefined);
  }, []);

  return (
    <footer>
      {from === "homePage" ? (
        <section className="bg-home-footer maxlg:bg-home-footer-mobile flex justify-center lg:py-14 py-10 maxlg:pl-4">
          <div className={`lg:grid lg:grid-cols-3 lg:gap-28`}>
            <div className="lg:col-span-2">
              <h3 className="text-white mb-0 lg:text-5xxl text-3xxl font-light lg:w-560 pb-2 xs:max-w-168">
                Ready to get started?
              </h3>
              <p className="mb-0 text-base text-neutral7 font-normal lg:w-560">
                Take the first step to run your workspace business with the
                leading space management software today.
              </p>
            </div>
            <div className="maxlg:flex maxlg:mt-16 lg:mt-4">
              <div className="lg:mb-6 maxlg:mr-2">
                <BookFreeDemoButton textColor="primary" bgColor="white" />
              </div>
              <div>
                <ContactUsButton />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-about-footer maxlg:bg-about-footer-mobile flex justify-center py-16 maxlg:px-6">
          <div className={`maxlg:hidden lg:grid lg:grid-cols-2 lg:gap-24`}>
            <div>
              <Image src="/images/map.png" alt="map" width={369} height={282} />
            </div>
            <div className="mt-120">
              <h3 className="text-white lg:text-5xxl text-3xxl font-light mb-8">
                Our Offices
              </h3>
              <div>
                <div className="flex pb-2">
                  <EmailSvg className="mt-1" />
                  <div className="text-base text-white font-normal pl-3">
                    contact@reinventventures.com
                  </div>
                </div>
                <div className="flex">
                  <AddressSvg className="mt-1" />
                  <div className="text-base text-white font-normal pl-3">
                    We are based in Singpore, China and Taiwan.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <div>
              <h3 className="text-white mb-0 lg:text-5xxl text-3xxl font-light">
                Our Offices
              </h3>
              <div className="my-8">
                <div className="flex pb-2">
                  <EmailSvg className="mt-1" />
                  <span className="text-base text-white font-normal pl-3">
                    contact@reinventventures.com
                  </span>
                </div>
                <div className="flex">
                  <AddressSvg className="mt-1" />
                  <span className="text-base text-white font-normal pl-3">
                    We are based in Singpore, China and Taiwan.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/map-mobile.png"
                alt="map"
                width={327}
                height={250}
              />
            </div>
          </div>
        </section>
      )}
      <section className="flex lg:p-8 py-8 px-4">
        <div className="maxlg:hidden">
          <Link href="/">
            <a className="block" style={{ width: "68px" }}>
              <Image src="/images/logo.png" alt="logo" width={68} height={24} />
            </a>
          </Link>
        </div>
        <div className="maxlg:hidden grow">
          <div className="flex">
            {FooterListData.map((item, index1) => {
              return (
                <div key={index1} className="xl:pr-24 lg:pl-16">
                  <h3 className="mb-0 text-2xl text-neutral12 pb-4 font-normal">
                    {item.title}
                  </h3>
                  {item.children.map((temp, index2) => (
                    <div key={index2}>
                      {temp.flag ? (
                        <ContactUsButton from="footer" />
                      ) : (
                        <Link href={temp.link}>
                          <a className="block mb-0 text-sm text-neutral12 pb-2 cursor-pointer text hover:underline hover:text-neutral12">
                            {temp.module}
                          </a>
                        </Link>
                      )}
                    </div>
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
          <h3 className="mb-0 text-neutral12 text-2xl pb-2">Newsletter</h3>
          <p className="mb-0 text-neutral12 text-sm pb-12 lg:w-488">
            Stay up to date with coworking insights, feature highlights, company
            news, upcoming webinars, and eBooks.
          </p>
          <div className="flex border-b border-solid pb-2 lg:w-488">
            <div className="lg:w-80 w-full lg:mr-2.5 mt-2">
              <Input
                placeholder="Enter your business email"
                style={{ width: "100%", border: "none" }}
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <button
              className="maxlg:hidden border border-solid border-primary w-155 h-10 text-white bg-primary text-sm maxlg:text-base"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-neutral7 mb-0 pt-2">
            You may unsubscribe at any time. For more information please review
            our
            <a className="text-neutral12 text-sm">&nbsp;&nbsp;Privacy Policy</a>
            .
          </p>
          <div className="lg:hidden mt-6 mb-20">
            <button
              className="border border-solid border-primary w-full h-10 text-white bg-primary text-sm maxlg:text-base"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
          <div className="lg:hidden">
            <Link href="/">
              <a>
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={68}
                  height={24}
                />
              </a>
            </Link>
          </div>
          <div className="lg:hidden text-neutral7 mt-4">
            <span className="text-xxs pr-2.5">Terms & Conditions</span>
            <span className="text-xxs pr-2.5">Privacy Policy</span>
            <span className="text-xxs ">©2022 BOSS All Rights Reserved.</span>
          </div>
        </div>
        <Result visiable={isModalVisable} onClose={handleModalClose} />
      </section>
    </footer>
  );
}
