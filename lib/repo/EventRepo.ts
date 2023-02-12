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
                eventDate: event.eventDate,
                link: event.link,
                datePosted: new Date()
            })
        } catch (e : MongooseError | any) {
            return e;
        }
    }

    async getEvents() : Promise<TEvent[]> {
        try {
            const events = await EventsModel.find({}, ["title", "brief", "description", "datePosted", "eventDate", "imageURL", "link"], {
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
            const event = await EventsModel.findOne({_id: id});
            return event;
        } catch (e : MongooseError | any) {
            console.log(e);
            return e
        }
    }

    async deleteEvent(id: string) : Promise<boolean>{
        try {
            await EventsModel.findByIdAndRemove(id);
            return true;
        } catch (e : MongooseError | any) {
            return false;
        }
    }
}

export default EventRepo