<template>
  <div class="home">
    <h1>{{ this.translations.todoList }}</h1>
    <div>
      <div>
        <input />
      </div>
      <button v-on:click="createTodo()">{{ this.translations.addTodo }}</button>
    </div>
    <ul v-if="items">
      <li v-for="todo in items" :key="todo.id">{{ todo.todoText }} - {{ todo.author }}</li>
    </ul>
  </div>
</template>

<script>
import todosService from '../services/todosService';
import translationsService from '../services/translationsService';

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      title: 'Lista de TODOs',
      items: [],
      saveTodo: false,
      translations: {},
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
      
    translationsService
      .getTranslations({ fileName: 'home', locale: 'en' })
      .then((res) => {
        this.translations = res.data;
      })
      .catch((error) => {
        this.response = `An error has occurred ${error}`;
      });
  },
  methods: {
    createTodo() {
      console.log('Hey');
    },
  },
};
</script>
