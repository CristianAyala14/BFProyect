import mongoose from "mongoose";
import { envObject } from "./enviroment.js";
export const connectDB = async ()=>{
  try {
    await mongoose.connect(envObject.mongo.url)
    console.log("DB is connected.")
  } catch (error) {
    console.log("DB connection failed.")
  }
}
