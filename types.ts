
type TEvent = {
    id?: number,
    datePosted?: Date,
    dateUpdated?: Date,
    title?: string,
    brief?: string,
    description?: string,
    imageURL?: string
}

type TStaff = {
    id?: number,
    name: string,
    email: string,
    pictureURL: string
}

export type {
    TEvent, TStaff
}