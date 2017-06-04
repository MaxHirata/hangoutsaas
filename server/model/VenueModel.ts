import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IVenueModel from '../interfaces/IVenueModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class VenueModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                eventId: String,
                eventName: String,
                venues: [ {
                name: String,
                venueId: Number,
                address: String,
                venueType: String
                }]
            }, {collection: 'venues'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IVenueModel>("Venue", this.schema);
    }
    
     public retrieveVenueDetails(response:any, filter:Object) {
        console.log("filter: " + JSON.stringify(filter)); 
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            console.log("venues: " + itemArray); 
            response.json(itemArray);
        });
    }

    public retrieveVenueCount(response:any, filter:Object) {
        var query = this.model.find(filter).select('venues').count();
        query.exec( (err, numberOfVenues) => {
            console.log('number of venues: ' + numberOfVenues);
            response.json(numberOfVenues);
        });
    }
}