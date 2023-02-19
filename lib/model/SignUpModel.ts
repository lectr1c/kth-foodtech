import mongoose, {Schema} from "mongoose"
import {string} from "prop-types";

const conn = mongoose.createConnection("mongodb+srv://root:" + process.env.MONGO_PASS + "@kthfoodtech.tm3zvaf.mongodb.net/?retryWrites=true&w=majority");


const SignUp = new mongoose.Schema({
    id: Number,
    fullName: String,
    email: String,
    accept: Boolean
})

const SignUpModel = conn.models.Staff || conn.model("SignUp", SignUp);

export default SignUpModel;