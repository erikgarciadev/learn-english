import { Lang } from "../interfaces/topic";
import { urlBaseAudio } from "./constants";

export const getUrlAudio = (lang: Lang, text: string) => {
  return urlBaseAudio + `?lang=${lang}&text=${text}`;
};
