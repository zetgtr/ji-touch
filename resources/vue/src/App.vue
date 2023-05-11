<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import InnerLayout from "./layouts/InnerLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";
import AboutLayout from "./layouts/AboutLayout.vue";
import "./assets/index.scss";

export default {
  components: {
    MainLayout,
    InnerLayout,
    AboutLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    },
  },
  watch: {
      $route: {
          immediate: true,
          handler(to, from) {
              document.title = to.meta.title || 'Загрузка';
          }
      },
  }
};
</script>

<style lang="scss">
</style>
