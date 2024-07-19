import {Router} from "express";
import { taskController } from "../controllers/taskController.js";
import { validateToken } from "../middlewares/validateToken.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { createTaskSchema } from "../validateSchemas/taskSchema.js";

const router = Router()

router.get("/getTasks", validateToken, taskController.getTasks )
router.get("/getTask/:id", validateToken, taskController.getTask )
router.post("/createTask", validateToken, schemaValidator(createTaskSchema), taskController.createTask )
router.put("/updateTask/:id", validateToken, taskController.updateTask )
router.delete("/deleteTask/:id", validateToken, taskController.deleteTask )



export {router as taskRouter};