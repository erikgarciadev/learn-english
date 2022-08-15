import Image from "next/image";
import { ICardInformation } from "../../interfaces/topic";
import { urlNoImage } from "../../utils/constants";
import Audio from "../Audio";
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
      <div  className="wrapper-center">
        <Audio
          sources={[
            {
              type: "mp3",
              audio_url: cardInformation.audio_url,
            },
            {
              type: "ogg",
              audio_url: cardInformation.audio_url,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default CardInformation;
