import StaffModel from "../model/StaffModel";
import mongoose, {MongooseError} from "mongoose";
import {TStaff} from '../../types';
import eventModel from "../model/EventsModel";
import {ObjectID} from "bson";

class StaffRepo {
    constructor() {
        mongoose.connect("mongodb+srv://lectr1c:" + process.env.MONGO_PASS + "@cluster0.0w2vvps.mongodb.net/?retryWrites=true&w=majority")
    }

    async addStaff(staff: TStaff) : Promise<TStaff>{
        try {
            return await StaffModel.create({
                Name: staff.name,
                Email: staff.email,
                PictureURL: staff.pictureURL
            })
        } catch (e : MongooseError | any) {
            return e;
        }
    }

    async getStaff() : Promise<TStaff[]> {
        try {
            const staff = await StaffModel.find({}, ["Name", "Email", "PictureURL"], {
                sort: {
                    DatePosted: -1
                }});
            return staff;
        } catch (e : MongooseError | any) {
            return e
        }
    }

    async getStaffByID(id: string) : Promise<TStaff> {
        try {
            const event = await StaffModel.findById(id);
            return event;
        } catch (e : MongooseError | any) {
            return e
        }
    }

    async emailExists(email: string) : Promise<{ _id: any } | null> {
        try {
            const exists = await StaffModel.exists({email: email});
            return exists;
        } catch (e : MongooseError | any) {
            return e;
        }
    }
}

export default StaffRepo;