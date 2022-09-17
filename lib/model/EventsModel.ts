import mongoose, {Schema} from "mongoose"

const Event = new mongoose.Schema({
    id: Number,
    DatePosted: Date,
    DateUpdated: Date,
    Title: String,
    Brief: String,
    Description: String,
    ImageLink: String
})

const EventsModel = mongoose.models.Event || mongoose.model("Event", Event);

export default EventsModel;