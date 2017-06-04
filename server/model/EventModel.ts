import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IEventModel from '../interfaces/IEventModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class EventModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                eventName: String,
                description: String,
                eventId: String,
                date: String,
                status: String,
                venue: String,
                time: String
            }, {collection: 'events'} //changed
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IEventModel>("Events", this.schema); //changed quotes
    }

    public retrieveAllEvents(response:any): any {
        var query = this.model.find();
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }

   public retrieveEventDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
   }
}

/*import Mongoose = require('mongoose');
import DataAccess from '../DataAccess';
import IEventModel from '../interfaces/IEventModel';

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

export default class EventModel {
    public schema:Mongoose.Schema;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema =  mongoose.Schema(
            {
                eventName: String,
                description: String,
                eventId: String,
                date: String,
                status: String,
                venue: String,
                time: String
            }, {collection: 'events'} //changed
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IEventModel>("Events", this.schema); //changed quotes
    }

    public retrieveAllEvents(response:any): any {
        var query = this.model.find();
        query.exec( (err, events) => {
            response.json(events);
        });
    }

   public retrieveEventDetails(response:any, filter:Object) {
        console.log("filter: " + JSON.stringify(filter));
        var query = this.model.findOne(filter);
        query.exec( (err, event) => {
            console.log("event: " + event);
            response.json(event);
        });
   }
}*/
