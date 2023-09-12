<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="login-form">
    <h2>{{ translations.login }}</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">{{ translations.username }}: </label>
        <input
          type="text"
          id="username"
          v-model="username"
          required
          autocomplete="current-username"
        />
      </div>
      <div class="form-group">
        <label for="password">{{ translations.password }}: </label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          autocomplete="current-password"
        />
      </div>
      <div class="form-group">
        <button type="submit">{{ translations.submit }}</button>
      </div>
    </form>
    <p v-if="response">{{ response }}</p>
  </div>
</template>

<script>
import authService from '../services/authService';
import translationsService from '../services/translationsService';

export default {
  data() {
    return {
      translations: {},
      username: '',
      password: '',
      response: '',
    };
  },
  mounted() {
    translationsService
      .getTranslations({ fileName: 'auth', locale: 'en' })
      .then((res) => {
        this.translations = res.data;
      })
      .catch((error) => {
        this.response = `An error has occurred ${error}`;
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
