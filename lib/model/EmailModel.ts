import mongoose, {Schema} from "mongoose"
import {string} from "prop-types";

const conn = mongoose.createConnection("mongodb+srv://root:" + process.env.MONGO_PASS + "@kthfoodtech.tm3zvaf.mongodb.net/?retryWrites=true&w=majority");


const Email = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    message: String
})

const EmailModel = conn.models.Email || conn.model("Email", Email);

export default EmailModel;