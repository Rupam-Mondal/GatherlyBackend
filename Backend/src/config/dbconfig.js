import mongoose from 'mongoose'
import { db_url } from './serverconfig.js'

async function connectDb(){
    try {
        const response = await mongoose.connect(db_url);
        console.log("Database is connected");
        return response;
    } catch (error) {
        console.log(error);
        console.log("Some error occured in database connection");
        return null;
    }
}

export default connectDb;