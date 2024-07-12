<template>
  <div>
    <div class="logo-container">
      <img class="logo" src="@/assets/logo.svg" alt="Logo de la App" />
      <div class="my-component">NoteIt</div>
    </div>
    <div class="slogan">
      {{ translations.slogan }}
    </div>
  </div>
</template>
<script>
import translationsService from '../services/translationsService';

export default {
  name: 'LogoComponent',
  data() {
    return {
      translations: {},
    };
  },
  mounted() {
    translationsService
      .getTranslations({ fileName: 'logo', locale: 'en' })
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

<style>
.logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.my-component {
  font-family: 'Noto Serif', serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
  color: #175873;
  font-size: 2.5rem;
}

.slogan {
  font-family: 'Amatic SC', sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
}
</style>
