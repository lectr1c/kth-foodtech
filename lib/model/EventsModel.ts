import mongoose, {Schema} from "mongoose"

const conn = async () => await mongoose.createConnection("mongodb+srv://root:" + process.env.MONGO_PASS + "@kthfoodtech.tm3zvaf.mongodb.net/?retryWrites=true&w=majority");

const Event = new mongoose.Schema({
    id: Number,
    datePosted: Date,
    dateUpdated: Date,
    title: String,
    brief: String,
    description: String,
    imageURL: String
})

const EventsModel = conn().then(value => { return value.models.Event } ) || conn().then(value => { return value.model("Event", Event)});

export default EventsModel;