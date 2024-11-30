import mongoose from 'mongoose'
import { MONGO_URL } from './serverConfig.js'
export default async function connectDB(){
    try{
        await mongoose.connect(MONGO_URL);
        console.log("connect mongoDB server");
        
    }catch(error){
        console.log("failed to connected mogoDB");
        console.log("error");
    }
}