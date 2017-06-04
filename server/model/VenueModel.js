"use strict";
exports.__esModule = true;
var DataAccess_1 = require("../DataAccess");
var mongoose = DataAccess_1["default"].mongooseInstance;
var mongooseConnection = DataAccess_1["default"].mongooseConnection;
var VenueModel = (function () {
    function VenueModel() {
        this.createSchema();
        this.createModel();
    }
    VenueModel.prototype.createSchema = function () {
        this.schema = mongoose.Schema({
            eventId: String,
            eventName: String,
            venues: [{
                    name: String,
                    venueId: Number,
                    address: String,
                    venueType: String
                }]
        }, { collection: 'venues' });
    };
    VenueModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Venue", this.schema);
    };
    VenueModel.prototype.retrieveVenueDetails = function (response, filter) {
        console.log("filter: " + JSON.stringify(filter));
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            console.log("venues: " + itemArray);
            response.json(itemArray);
        });
    };
    VenueModel.prototype.retrieveVenueCount = function (response, filter) {
        var query = this.model.find(filter).select('venues').count();
        query.exec(function (err, numberOfVenues) {
            console.log('number of venues: ' + numberOfVenues);
            response.json(numberOfVenues);
        });
    };
    return VenueModel;
}());
exports["default"] = VenueModel;
