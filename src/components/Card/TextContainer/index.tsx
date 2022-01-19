import { Introduce } from "components/CustomAnchor/index.d";
import Image from "next/image";
import styles from "../index.module.css";

interface IProps extends Omit<Introduce, "imageUrl"> {}
function TextContainer({ funcList, list, title, description }: IProps) {
  return (
    <section className={`${styles.article} lg:pb-10 `}>
      <h2
        className={`text-3xxl pt-10 pr-10 pb-6 pl-10  xs:text-2xl xs:pt-6 xs:pl-6 xs:pr-6`}
      >
        {title}
      </h2>
      <p className={`pb-2 pl-10 pr-10 xs:pl-6 xs:pr-6`}>{description}</p>
      <ul className={`pl-10 xs:pl-6 xs:pb-6`}>
        {list &&
          list.map((item: string) => {
            return (
              <li key={item}>
                <Image
                  src="/images/check.png"
                  width={11}
                  height={9.5}
                  alt="check"
                />
                <span className={`${styles.text} `}>{item}</span>
              </li>
            );
          })}
        {funcList &&
          funcList.map((item, index) => {
            return (
              <>
                <li key={index}>
                  <Image
                    src="/images/check.png"
                    width={11}
                    height={9.5}
                    alt="check"
                  />
                  <span className={`${styles.text} text-neutral12`}>
                    {item.title}
                  </span>
                </li>
                <div
                  key={`${item.title}-div`}
                  className="text-neutral9 pt-2 pb-6 pr-16"
                >
                  {item.description}
                </div>
              </>
            );
          })}
      </ul>
    </section>
  );
}

export default TextContainer;
