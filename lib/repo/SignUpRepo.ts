import SignUpModel from "../model/SignUpModel";
import {MongooseError} from "mongoose";
import {TSignUp} from '../../types';
import { ST } from "next/dist/shared/lib/utils";

class SignUpRepo {
            async addMember(member: TSignUp) : Promise<TSignUp>{
                    try {
                        return await SignUpModel.create({
                            fullName: member.fullName,
                            email: member.email,
                            accept: member.accept
                        })
                    } catch (e : MongooseError | any) {
                        return e;
                    }
            
        }
}

export default SignUpRepo;