<template>
  <div class="login-form">
    <h2>{{ translations.signUp }}</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="userNameRegistration">{{ translations.username }}: </label>
        <input
          type="text"
          id="userNameRegistration"
          v-model="registrationData.username"
          required
          autocomplete="current-username"
        />
      </div>
      <div class="form-group">
        <label for="passwordRegistration">{{ translations.password }}: </label>
        <input
          type="password"
          id="passwordRegistration"
          v-model="registrationData.password"
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
<!--TODO: username -->
<!--TODO: email -->
<!--TODO: password -->
<!--TODO: repeat password -->
<!--TODO: Full name -->
<!--TODO: country -->
<!--TODO: security question -->
<!--TODO: security question answer -->
<script>
import translationsService from '../../services/translationsService';

export default {
  name: 'UserRegister',
  data() {
    return {
      translations: {},
      registrationData: {
        username: '',
        password: '',
      },
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
    async register() {
      await this.$store
        .dispatch('register', {
          username: this.registrationData.username,
          password: this.registrationData.password,
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
