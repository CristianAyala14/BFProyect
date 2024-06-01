import jwt from "jsonwebtoken";
import { envObject } from "../config/enviroment.js";

export const validateToken =(req,res,next)=>{
  const {authCookie} = req.cookies
  if(!authCookie) return res.status(401).json({message: "No token, authorization denied."})
  jwt.verify(authCookie, envObject.jwt.key, (err, decodedData)=>{
    if(err) return res.status(401).json({message: "Invalid token."})
    req.user = decodedData; //i create user on the req object, so it can go to the next in the route.
    next();
  })
}