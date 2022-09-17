import EventsModel from "../model/EventsModel";
import mongoose, {MongooseError} from "mongoose";
import { TEvent } from '../../types';
import eventModel from "../model/EventsModel";

class EventRepo {
    constructor() {
        mongoose.connect("mongodb+srv://lectr1c:" + process.env.MONGO_PASS + "@cluster0.0w2vvps.mongodb.net/?retryWrites=true&w=majority")
    }

    async addEvent(Title: string, Brief: number, Description: string, ImageURL: string) : Promise<TEvent>{
        try {
            return await EventsModel.create({
                Title: Title,
                Brief: Brief,
                Description: Description,
                ImageLink: ImageURL,
                DatePosted: new Date()
            })
        } catch (e : MongooseError | any) {
            return e;
        }
    }

    async getEvents() : Promise<TEvent[]> {
        try {
            const log = await EventsModel.find({}, ["Title", "Brief", "Description", "DatePosted", "ImageLink"], {
                sort: {
                    DatePosted: -1
                }});
            return log;
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