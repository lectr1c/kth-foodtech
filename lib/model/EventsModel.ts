import mongoose, {Schema} from "mongoose"

const conn = mongoose.createConnection("mongodb+srv://root:" + process.env.MONGO_PASS + "@kthfoodtech.tm3zvaf.mongodb.net/?retryWrites=true&w=majority");

const Event = new mongoose.Schema({
    id: Number,
    datePosted: Date,
    dateUpdated: Date,
    title: String,
    brief: String,
    description: String,
    imageURL: String
})

const EventsModel = conn.models.Event || conn.model("Event", Event);

export default EventsModel;