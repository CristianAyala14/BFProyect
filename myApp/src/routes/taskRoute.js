import {Router} from "express";
import { taskController } from "../controllers/taskController.js";
import { validateToken } from "../middlewares/validateToken.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { createTaskSchema } from "../validateSchemas/taskSchema.js";

const router = Router()

router.get("/", validateToken, taskController.getTasks )
router.get("/:id", validateToken, taskController.getTask )
router.post("/", validateToken, schemaValidator(createTaskSchema), taskController.createTask )
router.put("/:id", validateToken, taskController.updateTask )
router.delete("/:id", validateToken, taskController.deleteTask )



export {router as taskRouter};