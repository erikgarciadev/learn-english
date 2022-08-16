import Image from "next/image";
import { ICardInformation, ISource, Lang } from "../../interfaces/topic";
import { urlNoImage } from "../../utils/constants";
import { getUrlAudio } from "../../utils/getUrlAudio";
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
        height="80px"
        objectFit="cover"
        src={cardInformation.image_url || urlNoImage}
        alt={cardInformation.name}
      />
      <div>
        <AudioInformation title='English' name={cardInformation.name} lang='en' />
        <AudioInformation title='Spanish' name={cardInformation.name_es} lang='es' />
      </div>
    </div>
  );
};

const AudioInformation = ({
  title,
  name,
  lang
}: {
  title: string;
  name: string;
  lang: Lang
}) => {
  return (
    <div className={styles['wrapper-audio-information']}>
      <p>{title}</p>
      <div>
        <div
          className={styles['wrapper-name-audio']}
        >
          <p>{name}</p>
          <Audio
            sources={[
              {
                type: "mp3",
                audio_url: getUrlAudio(lang, name),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default CardInformation;
