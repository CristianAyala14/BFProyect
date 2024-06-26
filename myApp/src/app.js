import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
//routes
import { authUserRouter } from "./routes/authUserRoute.js";
import { taskRouter } from "./routes/taskRoute.js";
const app = express()
app.use(express.urlencoded({extended: true}));
app.use(cors({origin:"http://localhost:5173", credentials: true}))
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())
//routes
app.use("/api/authuser",authUserRouter)
app.use("/api/tasks",taskRouter)

export default app;



