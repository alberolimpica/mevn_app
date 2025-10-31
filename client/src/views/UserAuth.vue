<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4">
    <div v-if="isLogIn" class="flex max-w-4xl w-full min-h-[500px] shadow-lg rounded-lg overflow-hidden">
      <div class="flex-1 bg-white p-8 flex flex-col justify-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">{{ translations.login }}</h2>
        <form @submit.prevent="login" class="space-y-4">
          <div class="form-group">
            <label for="username" class="block text-sm font-medium text-gray-700 mb-1">{{ translations.username }}</label>
            <input
              type="text"
              id="username"
              v-model="username"
              required
              autocomplete="current-username"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
          </div>
          <div class="form-group">
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">{{ translations.password }}</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              autocomplete="current-password"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
          </div>
          <div class="form-group">
            <button type="submit" class="w-full bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-semibold py-2 px-4 rounded-lg hover:from-teal-600 hover:to-cyan-500 transition-all">{{ translations.submit }}</button>
          </div>
        </form>
        <div class="mt-4 text-center text-sm text-gray-600"> {{ translations.noAccount }} <a @click="isLogIn=false" class="text-teal-600 hover:text-teal-700 cursor-pointer font-medium">{{ translations.signUp }}</a></div>
        <p v-if="response">{{ response }}</p>
      </div>
      <div class="flex-1 bg-gradient-to-br from-teal-500 to-cyan-400  items-center justify-center flex flex-col">
        <img
        :src="logIn"
        alt="{{ translations.login }} image"
        class="w-auto h-auto max-w-full max-h-[30vh] block"
      />
      </div>
    </div>
    
    <div v-else class="flex max-w-4xl w-full min-h-[500px] shadow-lg rounded-lg overflow-hidden">
      <div class="flex-1 bg-gradient-to-br from-teal-500 to-cyan-400 p-8 items-center justify-center flex flex-col">
        <img
        :src="signIn"
        alt="{{ translations.signUp }} image"
        class="w-auto h-auto max-w-full max-h-[30vh] block"
      />
      </div>
      <div class="flex-1 bg-white p-8 flex flex-col justify-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">{{ translations.signUp }}</h2>
        <form @submit.prevent="signup" class="space-y-4">
          <div class="grid grid-cols-2 gap-3">
            <div class="form-group">
              <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                v-model="firstName"
                required
                autocomplete="given-name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              />
            </div>
            <div class="form-group">
              <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                v-model="lastName"
                required
                autocomplete="family-name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              autocomplete="email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="form-group">
              <label for="signupPassword" class="block text-sm font-medium text-gray-700 mb-1">{{ translations.password || 'Password' }}</label>
              <input
                type="password"
                id="signupPassword"
                v-model="password"
                required
                autocomplete="new-password"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              />
            </div>
            <div class="form-group">
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                v-model="confirmPassword"
                required
                autocomplete="new-password"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                :class="{'border-red-500': confirmPassword && password !== confirmPassword}"
              />
              <p v-if="confirmPassword && password !== confirmPassword" class="text-red-500 text-xs mt-1">Passwords do not match</p>
            </div>
          </div>
          <div class="form-group">
            <button type="submit" :disabled="password !== confirmPassword" class="w-full bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-semibold py-2 px-4 rounded-lg hover:from-teal-600 hover:to-cyan-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed">{{ translations.submit || 'Sign Up' }}</button>
          </div>
        </form>
        <div class="mt-4 text-center text-sm text-gray-600"> {{ translations.haveAccount }} <a @click="isLogIn=true" class="text-teal-600 hover:text-teal-700 cursor-pointer font-medium">{{ translations.clickLogIn }}</a></div>
        <p v-if="response" class="mt-2 text-sm text-center" :class="response.includes('error') ? 'text-red-600' : 'text-green-600'">{{ response }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import translationsService from '../services/translationsService';
import logIn from '@/images/log_in.png'
import signIn from '@/images/sign_in.png'

export default {
  data() {
    return {
      logIn,
      signIn,
      isLogIn: true,
      translations: {},
      username: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      email: '',
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
  watch: {
    isLogIn() {
      // Clear form fields and response when switching between login/signup
      this.response = '';
      this.username = '';
      this.password = '';
      this.confirmPassword = '';
      this.firstName = '';
      this.lastName = '';
      this.email = '';
    },
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
    async signup() {
      if (this.password !== this.confirmPassword) {
        this.response = 'Passwords do not match';
        return;
      }
    },
  },
};
</script>

<style></style>
