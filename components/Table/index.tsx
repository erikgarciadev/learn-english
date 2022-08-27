import React, { ReactNode } from "react";
import { ITd, ITdata, Lang } from "../../interfaces/topic";
import { getUrlAudio } from "../../utils/getUrlAudio";
import Audio from "../Audio";
import styles from "./Table.module.scss";

const Table = ({
  theads,
  tdata = [],
  tbody = null,
}: {
  theads: string[];
  tdata?: ITdata[];
  tbody?: ReactNode | ReactNode[];
}) => {
  return (
    <div className={styles.wrapper_table}>
      <table className={styles.table}>
        <thead>
          <tr>
            {theads.map((thead, i) => (
              <th key={i}>{thead}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbody}
          {tdata.map((data, i) => (
            <tr key={i}>
              {data.td.map((_data, index) => (
                <Td isBold={index === 0} key={index}>
                  <TextsAudio _data={_data} />
                </Td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const Td = ({
  isBold = false,
  children,
}: {
  isBold?: boolean;
  children: ReactNode;
}) => {
  return <td className={isBold ? styles.bold : ""}>{children}</td>;
};

export const TextsAudio = ({ _data }: { _data: ITd }) => {
  if (!_data.name_1 && _data.name.includes("=") && _data.lang !== "es") {
    const names = _data.name.split("=");

    return (
      <div>
        <TextAudio text={names[0].trim()} lang={_data.lang || "en"} />
        <TextAudio text={names[1].trim()} lang={_data.lang || "en"} />
      </div>
    );
  }
  return (
    <div>
      <TextAudio text={_data.name} lang={_data.lang || "en"} />
      {_data.name_1 && (
        <TextAudio text={_data.name_1} lang={_data.lang_1 || "en"} />
      )}
    </div>
  );
};

export const TextAudio = ({ text, lang }: { text: string; lang: Lang }) => {
  return (
    <div className={styles.wrapper_text_audio}>
      <p>{text}</p>
      <Audio
        sources={[
          {
            type: "mp3",
            audio_url: getUrlAudio(lang || "en", text),
          },
        ]}
      />
    </div>
  );
};

export default Table;
