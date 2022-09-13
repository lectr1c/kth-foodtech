import mongoose, {Schema} from "mongoose"
import {string} from "prop-types";

const Staff = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    pictureURL: String
})

const StaffModel = mongoose.models.Staff || mongoose.model("Staff", Staff);

export default StaffModel;