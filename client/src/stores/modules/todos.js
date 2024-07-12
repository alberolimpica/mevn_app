/* eslint-disable no-shadow */
import todosService from '../../services/todosService';

const state = () => ({
  todos: [],
});

const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  },
  addTodo(state, todo) {
    state.todos.push(todo);
  },
  updateTodo(state, updatedTodo) {
    const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo);
    }
  },
  deleteTodo(state, todoId) {
    state.todos = state.todos.filter((todo) => todo.id !== todoId);
  },
};

const actions = {
  async fetchTodos({ commit }) {
    const res = await todosService.getAllTodos();
    commit('setTodos', res.data);
  },
  async createTodo({ commit }, todoData) {
    const res = await todosService.createTodo(todoData);
    commit('addTodo', res.data);
  },
  async updateTodo({ commit }, { todoId, todoData }) {
    const res = await todosService.updateTodo(todoId, todoData);
    commit('updateTodo', res.data);
  },
  async deleteTodo({ commit }, todoId) {
    await todosService.deleteTodo(todoId);
    commit('deleteTodo', todoId);
  },
};

const getters = {
  getTodos: (state) => state.todos,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
