import Image from "next/image";
import TextContainer from "./TextContainer";
import styles from "./index.module.css";
import { Introduce } from "components/CustomAnchor/index.d";
import CustomCarousel from "components/CustomCarousel";
import ContactUs from "./contactUs";
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
        className={`${styles.card} maxlg:flex-col lg:border-l border-neutral5`}
        id={id}
      >
        {itemConfig.imageUrlInLeft && (
          <>
            <div className={`maxlg:text-center maxlg:hidden`}>
              <Image
                src={`/images/${itemConfig.imageUrlInLeft}`}
                width={480}
                height={320}
                unoptimized={true}
                alt={itemConfig.title}
              />
            </div>
            <div className={`maxlg:text-center lg:hidden`}>
              <Image
                src={`/images/${itemConfig.imageUrlInLeftMobile}`}
                width={480}
                height={320}
                unoptimized={true}
                alt={itemConfig.title}
              />
            </div>
          </>
        )}
        <TextContainer
          title={itemConfig.title}
          description={itemConfig.description}
          list={itemConfig.list}
          funcList={itemConfig.funcList}
        />
        {itemConfig.imageUrl && (
          <>
            <div className={`maxlg:text-center maxlg:hidden`}>
              <Image
                src={`/images/${itemConfig.imageUrl}`}
                width={360}
                height={320}
                unoptimized={true}
                alt={itemConfig.title}
              />
            </div>
            <div className={`maxlg:text-center lg:hidden`}>
              <Image
                src={`/images/${itemConfig.imageUrlMobile}`}
                width={375}
                height={300}
                unoptimized={true}
                alt={itemConfig.title}
              />
            </div>
          </>
        )}
      </div>
      <div>{ChildComponent && <ChildComponent />}</div>
    </>
  );
}
export default Card;
