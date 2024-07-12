<template>
  <div class="container">
    <UserLogin />
    <UserRegister />
  </div>
</template>

<script>
import UserLogin from './UserLogin.vue';
import UserRegister from './UserRegister.vue';
import translationsService from '../../services/translationsService';

export default {
  name: 'UserAuth',
  components: {
    UserLogin,
    UserRegister,
  },
  data() {
    return {
      translations: {},
      login: {
        email: '',
        password: '',
      },
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
  methods: {},
};
</script>

<style></style>
