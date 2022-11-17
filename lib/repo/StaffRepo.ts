import StaffModel from "../model/StaffModel";
import {MongooseError} from "mongoose";
import {TStaff} from '../../types';
import { ST } from "next/dist/shared/lib/utils";

class StaffRepo {

    async addStaff(staff: TStaff) : Promise<TStaff>{
        try {
            return await StaffModel.create({
                name: staff.name,
                email: staff.email,
                pictureURL: staff.pictureURL,
                role: staff.role
            })
        } catch (e : MongooseError | any) {
            return e;
        }
    }

    async getStaff() : Promise<TStaff[]> {
        try {
            return await StaffModel.find({});
        } catch (e : MongooseError | any) {
            console.log(e);
            return e
        }
    }

    async getStaffByID(id: string) : Promise<TStaff> {
        try {
            const staff = await StaffModel.findById(id);
            return staff;
        } catch (e : MongooseError | any) {
            return e
        }
    }

    async emailExists(email: string) : Promise<{ _id: any } | null> {
        try {
            return await StaffModel.exists({email: email});
        } catch (e : MongooseError | any) {
            return e;
        }
    }

    async deleteStaff(id: string) {
        const deleted = await StaffModel.findByIdAndRemove(id,
            function (err: any, docs: any) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Removed User:", docs)
                }
            });
    }
}

export default StaffRepo;