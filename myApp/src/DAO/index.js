import { authUserService } from "./services/authUserService.js";
import { taskService } from "./services/taskService.js";

export const authUserDao = new authUserService();
export const taskDao = new taskService();