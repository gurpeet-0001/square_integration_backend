import mongoose from "mongoose";

export const dbConnection = async()=> {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
        console.log('Connected to database')
        
    } catch (error) {
        console.log(`Error connection to Database : ${error}`);
    }
}
