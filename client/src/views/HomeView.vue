<template>
  <div class="home">
    <h1>{{ translations.todoList }}</h1>
    <div>
      <div>
        <input v-model="newTodo" />
      </div>
      <button @click="createTodo">{{ translations.addTodo }}</button>
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.todoText }}</li>
    </ul>
  </div>
</template>

<script>
import translationsService from '../services/translationsService';

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      newTodo: '',
      translations: {},
    };
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    },
  },
  mounted() {
    this.fetchTodos();
    this.loadTranslations();
  },
  methods: {
    async fetchTodos() {
      try {
        await this.$store.dispatch('fetchTodos');
      } catch (error) {
        console.error('Error getting the TODOS:', error);
      }
    },
    async loadTranslations() {
      try {
        const res = await translationsService.getTranslations({ fileName: 'home', locale: 'en' });
        this.translations = res.data;
      } catch (error) {
        console.error('An error has occurred:', error);
      }
    },
    async createTodo() {
      try {
        await this.$store.dispatch('createTodo', { todoData: this.newTodo });
        this.newTodo = '';
      } catch (error) {
        console.error('An error has occurred:', error);
      }
    },
  },
};
</script>
