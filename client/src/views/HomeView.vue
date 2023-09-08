<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <div>
      <div>
        <input />
      </div>
      <button v-on:click="createTodo()">Add Todo</button>
    </div>
    <ul>
      <li v-for="todo in items" :key="todo.id">{{ todo.todoText }} - {{ todo.author }}</li>
    </ul>
  </div>
</template>

<script>
import todosService from '../services/todosService';

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      title: 'Lista de TODOs',
      items: [],
      saveTodo: false,
    };
  },
  mounted() {
    todosService
      .getAllTodos()
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => {
        console.error('Error getting the TODOS:', error);
      });
  },
  methods: {
    createTodo() {
      console.log('Hey');
    },
  },
};
</script>
