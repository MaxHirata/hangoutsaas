import Mongoose = require("mongoose");

interface IVenueModel extends Mongoose.Document {
    eventId: string;
    eventName: string;
    venues: [ {
        name: string;
        venueId: number;
        address: string;
        venueType: string;
    }];
}
export default IVenueModel;
