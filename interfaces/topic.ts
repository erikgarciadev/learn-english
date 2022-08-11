export interface Topic {
    slug: string
    title: string
}

export interface ICardInformation {
    name: string
    image_url : string
    audio_url : string
}

export interface TopicInformation {
    name: string
    data: {
        cards: ICardInformation[]
    }
}