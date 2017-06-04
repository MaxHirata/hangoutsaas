import Mongoose = require("mongoose");

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;
    static DB_CONNECTION_STRING:string = 'mongodb://dbAdmin:test@localhost:3000/HangOut/?authSource=admin';
    static MONGO_LAB_STRING:string = 'mongodb://hangout:hangout4240@ds028540.mlab.com:28540/hangoutdb';

    constructor () {
        DataAccess.connect();
    }
    
    static connect (): Mongoose.Connection {
        if(this.mongooseInstance) return this.mongooseInstance;
        
        this.mongooseConnection  = Mongoose.connection;
        this.mongooseConnection.on("open", () => {
            console.log("Connected to mongodb.");
        });
        
        this.mongooseInstance = Mongoose.connect(this.MONGO_LAB_STRING);
        return this.mongooseInstance;
    }
    
}
DataAccess.connect();
export default DataAccess;