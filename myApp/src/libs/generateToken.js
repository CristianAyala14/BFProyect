import jwt from "jsonwebtoken";
import { envObject } from "../config/enviroment.js";

export const generateToken = (user) => {
  let token = jwt.sign(user, envObject.jwt.key, {expiresIn: "1d"} )
  return token
}