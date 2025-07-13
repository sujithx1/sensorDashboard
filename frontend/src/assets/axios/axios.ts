import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

export const getsensorData = async () => {
  try {
    const response = await api.get(`/api/sensor`);
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error("Failed to fetch sensor data:", error);
    return null;
  }
};
