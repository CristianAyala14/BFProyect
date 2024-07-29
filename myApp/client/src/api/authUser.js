import { axiosInstance } from "./axiosConfig";

export async function registerRequest(user) {
    try {
      const response = await axiosInstance.post(`/authuser/register`, user);
      return {status: response.status, data: response.data.message, user: response.data.payload}; //se retorna respuesta direct de servidor o de los middlewares(como schemavalidator)

    } catch (error) {
      if (error.response) {
        return {status: error.response.status, data: error.response.data.message}; //si el error proviene de  respuesta de servidor o middlewares(como schemavalidator), retorna la data
      } else {
        throw error;  //si es otro error lo lanza
      }
      
    }
}

export async function loginRequest(user) {
  try {
    const response = await axiosInstance.post(`/authuser/login`, user);
    return {status: response.status, data: response.data.message, user: response.data.payload} 
  } catch (error) {
    if (error.response){
      return {status: error.response.status, data: error.response.data.message}; 
    } else {
      throw error;  //como es axios, el error de servidor tambien lo hace saltar, entonces hay que preguntar en el catch que si es error de servidor, que siga adelante. asi si es otro error lo salte por aca
    } 
  }
}

export async function verifyTokenRequest(){
  try {
    const response = await axiosInstance.get(`/authuser/verifytoken`);
    return {status: response.status, data: response.data.message} 
  }catch (error) {
    if(error.response){
      return { status: error.response.status, data: error.response.data.message,  user: response.data.payload}; 
    }else {
      throw error;  //como es axios, el error de servidor tambien lo hace saltar, entonces hay que preguntar en el catch que si es error de servidor, que siga adelante. asi si es otro error lo salte por aca
    }   
  }
}

