import EventsModel from "../model/EventsModel";
import mongoose, {MongooseError} from "mongoose";
import { TEvent } from '../../types';
import eventModel from "../model/EventsModel";

class EventRepo {

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
            const events = await EventsModel.find({}, ["title", "brief", "description", "datePosted", "imageURL"], {
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
            const event = EventsModel.then(value => { return value.findOne({_id: "6328db63e2c89398584d90c4"})});
            return event;
        } catch (e : MongooseError | any) {
            console.log(e);
            return e
        }
    }
}

export default EventRepo