import axios from 'axios';

const BASE_URL = process.env.VUE_APP_BACKEND_URL;
export default {
  getAllTodos() {
    return axios.get(`${BASE_URL}/todos`);
  },

  getTodo(todoId) {
    return axios.get(`${BASE_URL}/todos/${todoId}`);
  },

  createTodo(todoData) {
    return axios.post(`${BASE_URL}/todos/create`, todoData);
  },

  updateTodo(todoId, todoData) {
    return axios.put(`${BASE_URL}/todos/${todoId}`, todoData);
  },

  deleteTodo(todoId) {
    return axios.delete(`${BASE_URL}/todos/${todoId}`);
  },
};
