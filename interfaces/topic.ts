export type Lang = "es" | "en";

export interface ISource {
  audio_url: string;
  type: string;
}

export interface Topic {
  slug: string;
  title: string;
}

export interface ICardInformation {
  id: number;
  name: string;
  name_es: string;
  lang?: Lang;
  image_url: string;
  audio_url: string;
}

interface ITable {
  td: {
    name: string;
    audio_url?: string;
    name_1?: string;
    audio_url_1?: string;
    lang?: Lang;
    lang_1?: Lang;
  }[];
}

export interface TopicInformation {
  name: string;
  data: {
    cards: ICardInformation[];
    table?: ITable[];
  };
}
