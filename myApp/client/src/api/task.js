import { axiosInstance } from "./axiosConfig";

export async function getTasksRequest() {
    try {
        const response = await axiosInstance.get(`/tasks/gettasks`);
        return response.data; 
    } catch (error) {
        throw error;  
    }
}

export async function getTaskRequest(id) {
    try {
        const response = await axiosInstance.get(`/tasks/gettask/${id}`);
        return response.data; 
    } catch (error) {
        throw error;  
    }
}

export async function createTaskRequest(task) {
    try {
        const response = await axiosInstance.post(`/tasks/createtask`, task);
        return response.data; 
    } catch (error) {
        throw error;  
    }
}

export async function updateTaskRequest(id, task) {
    try {
        const response = await axiosInstance.put(`/tasks/updatetask/${id}`, task);
        return response.data; 
    } catch (error) {
        throw error;  
    }
}

export async function deleteTaskRequest(id) {
    try {
        const response = await axiosInstance.delete(`/tasks/deletetask/${id}`, id);
        return response.data; 
    } catch (error) {
        throw error;  
    }
}







