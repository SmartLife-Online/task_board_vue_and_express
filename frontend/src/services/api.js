import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = async () => {
  try {
    const response = await apiClient.get('/tasks'); // Replace with your endpoint
    return response.data; // Return the JSON data from the response
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const completeTask = async (taskId) => {
    try {
        const response = await apiClient.get(`tasks/complete_task/${taskId}`);
        return response.data;
    } catch (error) {
        console.error('Error completing task:', error);
        throw error;
    }
};
