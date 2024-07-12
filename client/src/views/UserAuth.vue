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
    async login() {
      await this.$store
        .dispatch('authenticate', {
          username: this.username,
          password: this.password,
        })
        .then((success) => {
          if (success) {
            this.response = 'Todo bien';
          } else {
            this.response = 'Hubo un error';
          }
        })
        .catch((error) => {
          this.response = `An error has occurred ${error}`;
        });
    },
  },
};
</script>

<style></style>
