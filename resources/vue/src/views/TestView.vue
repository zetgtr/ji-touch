<template>
  <the-header></the-header>
  <title-page :title="pageTitle"></title-page>
  <the-test></the-test>
</template>

<script>
import TitlePage from '../components/UI/TitlePage.vue'
import TheHeader from './../components/TheHeader.vue'
import TheTest from './../infusions/TheTest.vue'

export default{
  components:{
    TheHeader,
    TheTest,
    TitlePage
  },
  data(){
    return {
      pageTitle: 'Моя страница',
    }
  }
}

</script>

<style lang="scss">
</style>