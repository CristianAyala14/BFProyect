import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
//routes
import { authUserRouter } from "./routes/authUserRoute.js";
import { taskRouter } from "./routes/taskRoute.js";
const app = express()
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())
//routes
app.use("/api/authuser",authUserRouter)
app.use("/api/tasks",taskRouter)

export default app;



