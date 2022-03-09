import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FooterListData } from "./constant";
import { ProductType } from "constant/formConfig";
import BookFreeDemoButton from "./../BookFreeDemoButton";
import ContactUsButton from "./../ContactUsButton";
import EmailSvg from "./../../svgs/email.svg";
import AddressSvg from "./../../svgs/address.svg";
import { Input } from "antd";
import { createEmail } from "api/submit";
import Result from "components/Result";
import LogoPrimary from "../../svgs/logo_primary.svg";

interface IFooterProps {
  from?: "homePage" | "aboutPage";
  product?: ProductType[];
}

export default function Footer({ from = "homePage", product }: IFooterProps) {
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
        <section className="bg-home-footer maxlg:bg-home-footer-mobile bg-cover justify-center lg:py-14 py-10 maxlg:pl-4">
          <div className="lg:grid lg:grid-cols-12 lg:px-32 lg:gap-2 ">
            <div className="lg:col-span-1"></div>
            <div className="lg:col-span-8 xl:col-span-7 lg:w-560 pb-2">
              <h3 className="text-white mb-0 lg:text-5xxl text-3xxl font-light italic xs:max-w-168 pb-2">
                Ready to get started?
              </h3>
              <p className="mb-0 text-base text-neutral7 font-normal lg:w-560 xs:max-w-290">
                Take the first step to run your workspace business with the
                leading space management software today.
              </p>
            </div>
            <div className="maxlg:flex maxlg:mt-16 lg:mt-4 lg:col-span-3 xl:col-span-4">
              <div className="maxlg:hidden lg:mb-6">
                <BookFreeDemoButton product={product} />
              </div>
              <div className="lg:hidden maxlg:mr-2">
                <BookFreeDemoButton buttonHeight={38} product={product} />
              </div>
              <div className="maxlg:hidden">
                <ContactUsButton />
              </div>
              <div className="lg:hidden">
                <ContactUsButton buttonWidth={117} buttonHeight={38} />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="lg:bg-about-footer maxlg:bg-about-footer-mobile bg-cover flex justify-center py-16 maxlg:px-6">
          <div className={`maxlg:hidden lg:grid lg:grid-cols-2 lg:gap-24`}>
            <div>
              <Image
                src="/images/about-map.png"
                alt="map"
                width={369}
                height={282}
              />
            </div>
            <div className="mt-120 flex flex-col justify-between">
              <h3 className="text-white lg:text-5xxl text-3xxl font-light mb-8">
                Our Offices
              </h3>
              <div>
                <div className="flex items-center pb-2">
                  <EmailSvg />
                  <span className="text-base text-white font-normal pl-3">
                    Contact@getbossbuilding.com
                  </span>
                </div>
                <div className="flex items-center">
                  <AddressSvg />
                  <span className="text-base text-white font-normal pl-3">
                    We are based in Singapore, Shanghai and Taiwan.
                  </span>
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
                  <div className="w-5 h-5 mt-0.5">
                    <EmailSvg />
                  </div>
                  <span className="text-base text-white font-normal pl-3">
                    Contact@getbossbuilding.com
                  </span>
                </div>
                <div className="flex">
                  <div className="w-5 h-5 mt-0.5">
                    <AddressSvg />
                  </div>
                  <span className="text-base text-white font-normal pl-3">
                    We are based in Singapore, Shanghai and Taiwan.
                  </span>
                </div>
              </div>
            </div>
            <div className={`flex justify-center`}>
              <Image
                src="/images/about-map-mobile.png"
                alt="map"
                width={327}
                height={250}
              />
            </div>
          </div>
        </section>
      )}
      <section className="maxlg:flex py-8 maxlg:px-4 relative">
        <div className="maxlg:hidden lg:absolute left-8">
          <Link href="/">
            <a className="block" style={{ width: "68px" }}>
              <LogoPrimary />
            </a>
          </Link>
        </div>
        <div className="lg:grid lg:grid-cols-12 lg:gap-2 lg:px-32">
          <div className="lg:col-span-1"></div>
          <div className="maxlg:hidden lg:col-span-5 xls:col-span-7">
            <div className="flex">
              {FooterListData.map((item, index1) => {
                return (
                  <div key={index1} className="lg:pr-16">
                    <h3 className="mb-0 text-2xl text-neutral12 pb-4 font-normal">
                      {item.title}
                    </h3>
                    {item.children.map((temp, index2) => (
                      <div key={index2}>
                        {temp.flag ? (
                          <ContactUsButton
                            from="footer"
                            fontWeight="font-normal"
                          />
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
            <div className="text-neutral7 pt-300">
              <span className="text-xxs pr-4">Terms & Conditions</span>
              <span className="text-xxs pr-4">Privacy Policy</span>
              <span className="text-xxs ">©2022 BOSS All Rights Reserved.</span>
            </div>
          </div>
          <div className="font-normal lg:col-span-6 xls:col-span-4">
            <p className="mb-0 text-neutral12 text-2xl pb-2">Newsletter</p>
            <p className="mb-0 text-neutral12 text-sm pb-12 lg:w-488">
              Stay up to date with coworking insights, feature highlights,
              company news, upcoming webinars, and eBooks.
            </p>
            <div className="flex border-b border-solid pb-2 lg:w-488 justify-between">
              <div className="w-full lg:mr-2.5 mt-2 inputWrapper">
                <Input
                  placeholder="Enter your business email"
                  style={{ width: "100%", paddingLeft: 0 }}
                  value={email}
                  bordered={false}
                  onChange={handleInputChange}
                />
              </div>
              <button
                className="transition ease-in-out duration-300 maxlg:hidden border border-solid border-primary w-118 h-10 text-white bg-primary text-sm maxlg:text-base hover:bg-primary2 hover:border-primary2 active:bg-primary3 active:border-primary3"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-neutral7 mb-0 pt-2 lg:w-488">
              You may unsubscribe at any time. For more information please
              review our
              <a className="text-neutral12 text-xs hover:text-primary">
                &nbsp;Privacy Policy
              </a>
              .
            </p>
            <div className="lg:hidden mt-6 mb-20">
              <button
                className="transition ease-in-out duration-300 border border-solid border-primary w-full h-10 text-white bg-primary text-sm maxlg:text-base hover:bg-primary2 hover:border-primary2 active:bg-primary3 active:border-primary3"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
            <div className="lg:hidden">
              <Link href="/">
                <a>
                  <LogoPrimary />
                </a>
              </Link>
            </div>
            <div className="lg:hidden text-neutral7 mt-4">
              <span className="text-xxs pr-2.5">Terms & Conditions</span>
              <span className="text-xxs pr-2.5">Privacy Policy</span>
              <span className="text-xxs ">©2022 BOSS All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </section>
      <Result visiable={isModalVisable} onClose={handleModalClose} />
    </footer>
  );
}
