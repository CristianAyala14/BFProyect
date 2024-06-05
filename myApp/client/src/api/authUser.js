import { axiosInstance } from "./axiosConfig";

export async function registerRequest(user) {
    try {
      const response = await axiosInstance.post(`/authuser/register`, user);
      return response.data; 
    } catch (error) {
      throw error;  
    }
}

export async function loginRequest(user) {
  try {
    const response = await axiosInstance.post(`/authuser/login`, user);
    return response.data;  
  } catch (error) {
    throw error;  
  }
}

export async function veryfyTokenRequest(token){
  try {
    const serverResponse = await axiosInstance.get(`/authuser/veryfytoken`);
    const response = serverResponse.data;
    return response; //this response is directly from the server within it's success or not.
  } catch (error) {
    throw error;  //this error ill alert when connection with server fail.
  }
}