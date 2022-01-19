import Image from "next/image";
import TextContainer from "./TextContainer";
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
        {itemConfig.imageUrlInLeft && (
          <div className={`xs:text-center`}>
            <Image
              src="/images/flex-0.jpg"
              width={480}
              height={320}
              alt={itemConfig.title}
            />
          </div>
        )}
        <TextContainer
          title={itemConfig.title}
          description={itemConfig.description}
          list={itemConfig.list}
          funcList={itemConfig.funcList}
        />
        {itemConfig.imageUrl && (
          <div className={`xs:text-center`}>
            <Image
              src="/images/flex-0.jpg"
              width={360}
              height={320}
              alt={itemConfig.title}
            />
          </div>
        )}
      </div>
      <div>{ChildComponent && <ChildComponent />}</div>
    </>
  );
}
export default Card;
