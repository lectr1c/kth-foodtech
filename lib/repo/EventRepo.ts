import EventsModel from "../model/EventsModel";
import mongoose, {MongooseError} from "mongoose";
import { TEvent } from '../../types';
import eventModel from "../model/EventsModel";

class EventRepo {
    constructor() {
        mongoose.connect("mongodb+srv://lectr1c:" + process.env.MONGO_PASS + "@cluster0.0w2vvps.mongodb.net/?retryWrites=true&w=majority")
    }

    async addEvent(event : TEvent) : Promise<TEvent>{
        try {
            return await EventsModel.create({
                title: event.title,
                brief: event.brief,
                description: event.description,
                imageURL: event.imageURL,
                datePosted: new Date()
            })
        } catch (e : MongooseError | any) {
            return e;
        }
    }

    async getEvents() : Promise<TEvent[]> {
        try {
            const events = await EventsModel.find({}, ["Title", "Brief", "Description", "DatePosted", "ImageLink"], {
                sort: {
                    DatePosted: -1
                }});
            return events;
        } catch (e : MongooseError | any) {
            return e
        }
    }

    async getEvent(id: string) : Promise<TEvent> {
        try {
            const event = await EventsModel.findById(id);
            return event;
        } catch (e : MongooseError | any) {
            return e
        }
    }
}

export default EventRepo