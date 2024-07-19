import { axiosInstance } from "./axiosConfig";

export async function getTasksRequest() {
    try {
        const response = await axiosInstance.get(`/tasks/getTasks`);
        return response.data; 
    } catch (error) {
        throw error;  
    }
}

export async function getTaskRequest(id) {
    try {
        const response = await axiosInstance.get(`/tasks/getTask/${id}`);
        return response.data; 
    } catch (error) {
        throw error;  
    }
}

export async function createTaskRequest(task) {
    try {
        const response = await axiosInstance.post(`/tasks/createTask`, task);
        return response.data; 
    } catch (error) {
        throw error;  
    }
}

export async function updateTaskRequest(task) {
    try {
        const response = await axiosInstance.put(`/tasks/updateTask/${task.id}`, task);
        return response.data; 
    } catch (error) {
        throw error;  
    }
}

export async function deleteTasksRequest(id) {
    try {
        const response = await axiosInstance.delete(`/tasks/deleteTask/${id}`, task);
        return response.data; 
    } catch (error) {
        throw error;  
    }
}






