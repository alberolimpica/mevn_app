<template>
  <div class="flex flex-col min-h-screen items-center justify-center bg-[var(--aqua)]">
    <router-link to="/">
    <h1 class="text-4xl font-semibold text-gray-800">{{translations.notFound}}</h1>

      <img
        :src="notFound"
        alt="{{translations.notFound}}"
        class="w-auto h-auto max-w-full max-h-[90vh] block"
      />
    </router-link>
  </div>
</template>

<script>
import translationsService from '../services/translationsService';
import notFound from '@/images/not_found.png'

export default {
  data() {
    return { 
      notFound, 
      translations: {},
    };
  },
  mounted() {
    translationsService
      .getTranslations({ fileName: 'misc', locale: 'en' })
      .then((res) => {
        this.translations = res.data;
      })
      .catch((error) => {
        this.response = `An error has occurred ${error}`;
      });
  },
};
</script>

<style></style>
