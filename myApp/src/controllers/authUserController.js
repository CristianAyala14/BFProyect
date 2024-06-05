import { authUserDao } from "../DAO/index.js"
import bcrypt from "bcryptjs";
import { generateToken , verifyToken} from "../libs/generateToken.js";


class authUserController{

    static register = async(req,res)=>{
      const {username, email, password} = req.body
      
      const founded = await authUserDao.getBy(email)

      if(founded){
        return res.status(400).json({message: "The email is already registered."})
      }
      try {
        const passwordHash = await bcrypt.hash(password, 10) 
        const newUser  = {
          username: username,
          email: email,
          password: passwordHash
        }
        let userCreated = await authUserDao.create(newUser)
        const response = {
          id: userCreated._id,
          username: userCreated.username,
          email: userCreated.email,
        }

        const auth_token = generateToken(newUser)
        res.cookie("authCookie", auth_token)
        res.status(200).json({
          message: "User registered successfully.",
          payload: response
        })
      
      
      } catch (error) {
        return res.status(500).json({message: error.message})
      }

    }

    static login = async(req,res)=>{
      const {email, password} = req.body
      try {
        const foundedUser = await authUserDao.getBy(email)
        if(!foundedUser){
          return res.status(400).json({message:"User not founded."})
        }
        //it compares if it's the same as saved. response boolean.
        const isMatch = await bcrypt.compare(password, foundedUser.password)
        if(!isMatch){
          return res.status(400).json({message: "Invalid credentials."})
        }
        //user for token
        const user  = {
          id: foundedUser._id,
          username: foundedUser.username,
          email: foundedUser.email,
        }
        const auth_token = generateToken(user)
        res.cookie("authCookie", auth_token)
        res.status(200).json({
          message: "User logged successfully.",
          payload: user
        })
        
      }catch (error) {
        return  res.status(500).json({message: error.message})
      }
    }

    static logout = async(req,res)=>{
      res.clearCookie("authCookie")
      return res.status(200).json({message: "out logged correctly."})
    }

    static profile = async(req,res)=>{
      try {
        const email = req.user.email
        const userFound = await authUserDao.getBy(email)
        if(!userFound) return res.status(400).json({message: "User not found."})
        res.json({
          username: userFound.username,
          email: userFound.email
        })
      } catch (error) {
        return res.status(500).json({message: error.message})
      }
      
    }

    static veryfyToken = async(req,res)=>{
      const {authCookie} = req.cookies

      try {
        if(!authCookie) return res.status(401).json({message: "Unauthorized."})
        const userVerified = verifyToken(authCookie)
        const userFounded = await authUserDao.getBy(userVerified.email)
        if(!userFounded) return res.status(401).json({message: "User could not be authorized."})
        const sendUser={
          username: userFounded.username,
          email: userFounded.email,
        }
          return res.status(200).json({message: "User authorized.", user: sendUser})
      } catch (error) {
        return res.status(500).json({message: error.message})
      }
    }
}


export {authUserController};

