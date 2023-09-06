import mongoose from 'mongoose';

let isConnected= false;

export const connectToDb = async () =>{
    mongoose.set('strictQuery',true); // If you attempt to query for fields that don't exist in the schema, Mongoose will throw an error.
    
    if(!process.env.MONGODB_URL) return console.log('MONGODB URL not found');
    if(isConnected) return console.log("COnnected");
    try {
        await mongoose.connect(process.env.MONGODB_URL);
    
        isConnected = true; // Set the connection status to true
        console.log("MongoDB connected");
      } catch (error) {
        console.log(error);
      }
    };