<template>
  <div>
    <div v-if="isLogIn" class="flex h-screen">
      <div class="flex-1 bg-blue-300 place-content-center">
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
        <div> {{ translations.noAccount }} <a @click="isLogIn=false">{{ translations.signUp }}</a></div>
        <p v-if="response">{{ response }}</p>
      </div>
      <div class="flex-1 bg-red-300"></div>
    </div>
    
    <div v-else class="flex h-screen">
      <div class="flex-1 bg-red-300"></div>
      <div class="flex-1 bg-blue-300 place-content-center">
        <h2>{{ translations.signUp }}</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="firstName">{{ translations.username }}: </label>
            <input
              type="text"
              id="username"
              v-model="username"
              required
              autocomplete="current-username"
            />
          </div>
          <div class="form-group">
            <label for="lastName">{{ translations.username }}: </label>
            <input
              type="text"
              id="username"
              v-model="username"
              required
              autocomplete="current-username"
            />
          </div>
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
        <div> {{ translations.haveAccount }} <a @click="isLogIn=true">{{ translations.clickLogIn }}</a></div>
        <p v-if="response">{{ response }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import translationsService from '../services/translationsService';

export default {
  data() {
    return {
      isLogIn: true,
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
