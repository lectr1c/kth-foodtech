import mongoose, {Schema} from "mongoose"

const Event = new mongoose.Schema({
    id: Number,
    datePosted: Date,
    dateUpdated: Date,
    title: String,
    brief: String,
    description: String,
    imageURL: String
})

const EventsModel = mongoose.models.Event || mongoose.model("Event", Event);

export default EventsModel;