import mongoose, {Schema} from "mongoose"
import {string} from "prop-types";

const conn = mongoose.createConnection("mongodb+srv://root:" + process.env.MONGO_PASS + "@kthfoodtech.tm3zvaf.mongodb.net/?retryWrites=true&w=majority");


const Staff = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    role: String,
    pictureURL: String,
    linkedIn: String
})

const StaffModel = conn.models.Staff || conn.model("Staff", Staff);

export default StaffModel;