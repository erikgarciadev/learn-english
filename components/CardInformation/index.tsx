import Image from "next/image";
import { ICardInformation } from "../../interfaces/topic";
import { urlNoImage } from "../../utils/constants";
import styles from "./CardInformation.module.scss";

const CardInformation = ({
  cardInformation,
}: {
  cardInformation: ICardInformation;
}) => {
  return (
    <div className={styles.wrapper}>
      <Image
        layout="responsive"
        width={"100%"}
        height="100px"
        objectFit="cover"
        src={cardInformation.image_url || urlNoImage}
        alt={cardInformation.name}
      />
      <p>{cardInformation.name}</p>
      <audio
        className={styles.audio}
        controls
        preload="none"
        controlsList="nodownload"
      >
        <source type="audio/mp3" src={`${cardInformation.audio_url}.mp3`} />
        <source type="audio/ogg" src={`${cardInformation.audio_url}.ogg`} />\
      </audio>
    </div>
  );
};

export default CardInformation;
