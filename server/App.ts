import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as url from 'url';
import * as bodyParser from 'body-parser';

import EventModel from './model/EventModel';
import VenueModel from './model/VenueModel';
import DataAccess from './DataAccess';

const uuidV4 = require('uuid/v4');

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;
  public Events:EventModel;
  public Venues:VenueModel;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.Events = new EventModel();
    this.Venues = new VenueModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();
    
    router.use( (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    router.get('/app/event/:eventId/count', (req, res) => {
        var id = req.params.eventId;
        console.log('Query single event with id: ' + id);
        this.Venues.retrieveVenueCount(res, {eventId: id});
    });

    router.get('/app/event/:eventId/venues', (req, res) => {
        var id = req.params.eventId;
        console.log('Query All venues with id: ' + id);
        this.Venues.retrieveVenueDetails(res, {eventId: id});
    });

    router.post('/app/event/create', (req, res) => {
        console.log(req.body);
        var jsonObj = req.body;
        var newID = uuidV4();

        console.log("newID: " + newID);

        jsonObj.eventId = newID;
        this.Events.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        res.send(newID.toString());
    });

    router.get('/app/event/:eventId', (req, res) => {
        var id = req.params.eventId;
        console.log('Query single event with id: ' + id);
        this.Events.retrieveEventDetails(res, {eventId: id});
    });

    router.get('/app/event/', (req, res) => {
        console.log('Query All events');
        this.Events.retrieveAllEvents(res);
    });

    this.express.use('/', router);

    //this.express.use('/app/json/', express.static(__dirname+'/app/json'));
    this.express.use('/images', express.static(__dirname+'/img'));
    this.express.use('/', express.static(__dirname+'/dist'));

  }

}

export default new App().express;
