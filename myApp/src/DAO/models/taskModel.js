import mongoose from "mongoose";

const collection = "task"
const taskSchema = new mongoose.Schema({
    title:{
      type: String,
      required: true
    },
    description:{
      type: String,
      required: true
    },
    date:{
      type: Date,
      default: Date.now
    },
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
    }

}, {timestamps:true})

const taskModel = mongoose.model(collection, taskSchema)
export default taskModel;