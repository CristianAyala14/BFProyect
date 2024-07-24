import {Router} from "express";
import { taskController } from "../controllers/taskController.js";
import { validateToken } from "../middlewares/validateToken.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { createTaskSchema } from "../validateSchemas/taskSchema.js";

const router = Router()

router.get("/gettasks", validateToken, taskController.getTasks )
router.get("/gettask/:id", validateToken, taskController.getTask )
router.post("/createtask", validateToken, schemaValidator(createTaskSchema), taskController.createTask )
router.put("/updatetask/:id", validateToken, taskController.updateTask )
router.delete("/deletetask/:id", validateToken, taskController.deleteTask )



export {router as taskRouter};