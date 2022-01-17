import Image from "next/image";
import styles from "./index.module.css";
import { Introduce } from "components/CustomAnchor/index.d";
import CustomCarousel from "components/CustomCarousel";
import ContactUs from "components/ContactUs";
interface ItemConfig {
  id: string;
  itemConfig: Introduce;
}
function Card({ itemConfig, id }: ItemConfig) {
  const cardCildCompontent = {
    CAROUSEL: CustomCarousel,
    CONTCAT: ContactUs,
  };
  const ChildComponent =
    itemConfig && itemConfig.child && cardCildCompontent[itemConfig.child];
  return (
    <>
      <div
        className={`${styles.card} xs:flex-col xl:border-l border-neutral5`}
        id={id}
      >
        <section className={`${styles.article} lg:pb-10`}>
          <h2
            className={`text-3xxl pt-10 pr-10 pb-6 pl-10  xs:text-2xl xs:pt-6 xs:pl-6 xs:pr-6`}
          >
            {itemConfig.title}
          </h2>
          <p className={`pb-2 pl-10 pr-10 xs:pl-6 xs:pr-6`}>
            {itemConfig.description}
          </p>
          <ul className={`pl-10 xs:pl-6 xs:pb-6`}>
            {itemConfig.list &&
              itemConfig.list.map((item: string, index: number) => {
                return (
                  <li key={item}>
                    <Image
                      src="/images/check.png"
                      width={11}
                      height={9.5}
                      alt="check"
                    />
                    <span className={`${styles.text}`}>{item}</span>
                  </li>
                );
              })}
          </ul>
        </section>
        <div className={`xs:text-center`}>
          <Image
            src="/images/flex-0.png"
            width={360}
            height={320}
            alt={itemConfig.title}
          />
        </div>
      </div>
      <div>{ChildComponent && <ChildComponent />}</div>
    </>
  );
}
export default Card;
