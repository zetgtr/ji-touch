<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
// @ is an alias to /src
import TheHeader from './components/TheHeader.vue'
import './assets/index.scss'
export default {
  components: {
    TheHeader,
  }
}
</script>

<style lang="scss">

</style>
