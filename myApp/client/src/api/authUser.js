import axios from "axios";
const API = "http://localhost:8080/api/authuser"

export async function registerRequest(user) {
    try {
      const response = await axios.post(`${API}/register`, user);
      return response.data;  // Devuelve los datos de la respuesta
    } catch (error) {
      throw error;  // Lanza el error para que pueda ser manejado donde se llama a la función
    }
}

export async function loginRequest(user) {
  try {
    const response = await axios.post(`${API}/login`, user);
    return response.data;  // Devuelve los datos de la respuesta
  } catch (error) {
    throw error;  // Lanza el error para que pueda ser manejado donde se llama a la función
  }
}