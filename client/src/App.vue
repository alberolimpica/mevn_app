<template>
  <div>
    <MenuComponent />
    <router-view />
  </div>
</template>

<script>
import MenuComponent from '@/components/MenuComponent.vue';

export default {
  name: 'App',
  components: {
    MenuComponent,
  },
};
</script>

<style lang="scss">
@import './styles/fonts.scss';

#app {
  font-family: Helvetica, Arial, 'Amatic SC', sans-serif, 'Noto Serif', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
