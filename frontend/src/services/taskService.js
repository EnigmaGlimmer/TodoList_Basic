import axios from "axios";

const baseUrl = "http://localhost:5000/api/tasks";

const taskService = {
    getTasks: () => axios.get(baseUrl),
    addTask: (title) => axios.post(baseUrl, { title }),
    toggleComplete: (id) => axios.put(`${baseUrl}/${id}`),
    updateTask: (id, task) => axios.put(`${baseUrl}/${id}`, { task }),
    deleteTask: (id) => axios.delete(`${baseUrl}/${id}`)
};

export default taskService;

