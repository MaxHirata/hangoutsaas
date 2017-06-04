"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var EventModel_1 = require("./model/EventModel");
var VenueModel_1 = require("./model/VenueModel");
var uuidV4 = require('uuid/v4');
// Creates and configures an ExpressJS web server.
var App = (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
        this.Events = new EventModel_1["default"]();
        this.Venues = new VenueModel_1["default"]();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        router.get('/app/event/:eventId/count', function (req, res) {
            var id = req.params.eventId;
            console.log('Query single event with id: ' + id);
            _this.Venues.retrieveVenueCount(res, { eventId: id });
        });
        router.get('/app/event/:eventId/venues', function (req, res) {
            var id = req.params.eventId;
            console.log('Query All venues with id: ' + id);
            _this.Venues.retrieveVenueDetails(res, { eventId: id });
        });
        router.post('/app/event/create', function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            var newID = uuidV4();
            console.log("newID: " + newID);
            jsonObj.eventId = newID;
            _this.Events.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send(newID.toString());
        });
        router.get('/app/event/:eventId', function (req, res) {
            var id = req.params.eventId;
            console.log('Query single event with id: ' + id);
            _this.Events.retrieveEventDetails(res, { eventId: id });
        });
        router.get('/app/event/', function (req, res) {
            console.log('Query All events');
            _this.Events.retrieveAllEvents(res);
        });
        this.express.use('/', router);
        //this.express.use('/app/json/', express.static(__dirname+'/app/json'));
        this.express.use('/images', express.static(__dirname + '/img'));
        this.express.use('/', express.static(__dirname + '/dist'));
    };
    return App;
}());
exports["default"] = new App().express;
