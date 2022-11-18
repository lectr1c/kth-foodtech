import StaffModel from "../model/StaffModel";
import {MongooseError} from "mongoose";
import {TEmail, TStaff} from '../../types';
import { ST } from "next/dist/shared/lib/utils";
import EmailModel from "../model/EmailModel";

class EmailRepo {
          async addEmail(email: TEmail) : Promise<TEmail>{
                    try {
                        return await EmailModel.create({
                            name: email.name,
                            email: email.email,
                            message: email.message
                        })
                    } catch (e : MongooseError | any) {
                        return e;
                    }
            
          }
}

export default EmailRepo;