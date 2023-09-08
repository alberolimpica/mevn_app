<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="login-form">
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          v-model="username"
          required
          autocomplete="current-username"
        />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          autocomplete="current-password"
        />
      </div>
      <div class="form-group">
        <button type="submit">Iniciar sesión</button>
      </div>
    </form>
    <p v-if="response">{{ response }}</p>
  </div>
</template>

<script>
import authService from '../services/authService';

export default {
  data() {
    return {
      username: '',
      password: '',
      response: '',
    };
  },
  mounted() {
    authService
      .getAuth()
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error getting the TODOS:', error);
      });
  },
  methods: {
    login() {
      authService
        .login({
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          this.response = res.status === 200 ? 'Todo bien' : 'Hubo un error';
        })
        .catch((error) => {
          this.response = `An error has occurred ${error}`;
        });
    },
  },
};
</script>

<style></style>
