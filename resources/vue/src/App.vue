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
import { computed } from "vue";

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
};
</script>

<style lang="scss">
</style>
