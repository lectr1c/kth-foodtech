
type TEvent = {
    _id?: number,
    datePosted?: Date,
    eventDate?: Date,
    title?: string,
    brief?: string,
    description?: string,
    imageURL?: string,
    link?: string
}

type TStaff = {
    _id?: number,
    name?: string,
    email?: string,
    role?: string,
    pictureURL?: string
}

type TEmail = {
    _id?: number,
    name?: string,
    email?: string,
    message?: string
}
export type {
    TEvent, TStaff, TEmail
}