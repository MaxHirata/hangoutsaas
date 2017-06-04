"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess = (function () {
    function DataAccess() {
        DataAccess.connect();
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", function () {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(this.MONGO_LAB_STRING);
        return this.mongooseInstance;
    };
    return DataAccess;
}());
DataAccess.DB_CONNECTION_STRING = 'mongodb://dbAdmin:test@localhost:3000/HangOut/?authSource=admin';
DataAccess.MONGO_LAB_STRING = 'mongodb://hangout:hangout4240@ds028540.mlab.com:28540/hangoutdb';
DataAccess.connect();
exports["default"] = DataAccess;
