import Mongoose = require("mongoose");

interface IEventModel extends Mongoose.Document {
    eventName: string;
    description: string;
    eventId: string;
    date: string;
    status: string;
    venue: string;
    time: string;
}
export default IEventModel;