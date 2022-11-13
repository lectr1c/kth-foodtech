
type TEvent = {
    _id?: number,
    datePosted?: Date,
    dateUpdated?: Date,
    title?: string,
    brief?: string,
    description?: string,
    imageURL?: string
}

type TStaff = {
    _id?: number,
    name?: string,
    email?: string,
    role?: string,
    pictureURL?: string
}

export type {
    TEvent, TStaff
}