<template>
  <div>
    <nav>
      <router-link to="/">{{ translations.home }}</router-link>
      <router-link to="/auth">{{ translations.account }}</router-link>
    </nav>
  </div>
</template>
<script>
import translationsService from '../services/translationsService';

export default {
  name: 'MenuComponent',
  data() {
    return {
      translations: {},
    };
  },
  mounted() {
    translationsService
      .getTranslations({ fileName: 'menu', locale: 'en' })
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
