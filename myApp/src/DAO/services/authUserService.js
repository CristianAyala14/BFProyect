import userModel from "../models/userModel.js";

class authUserService{
  getAll = async() => {
    let users = await userModel.find().lean()
    return users;
  }
  getBy = async (email) => {
    let user = await userModel.findOne({email})
    return user;
  }
  create = async (user) => {
    let created = await userModel.create(user)
    return created;
  }
  
  
}

export {authUserService};
