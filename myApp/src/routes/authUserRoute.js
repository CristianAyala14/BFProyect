import {Router} from "express";
import { authUserController } from "../controllers/authUserController.js";
import { validateToken } from "../middlewares/validateToken.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { registerSchema , loginSchema } from "../validateSchemas/authSchema.js";
const router = Router()

router.post("/register", schemaValidator(registerSchema),authUserController.register)
router.post("/login", schemaValidator(loginSchema),authUserController.login)
router.post("/logout", authUserController.logout)
router.get("/profile", validateToken ,authUserController.profile)
router.get("/veryfytoken",authUserController.veryfyToken)
export {router as authUserRouter};