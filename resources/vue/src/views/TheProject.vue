<template>
  <the-header></the-header>
  <div class="content">
    <div class="container">
      <h1>{{captionTitle}}</h1>
      <bread-crumbs></bread-crumbs>
    </div>
    <the-portfolio></the-portfolio>
  </div>
</template>

<script>
import BreadCrumbs from "../components/BreadCrumbs.vue";
import TheHeader from "./../components/TheHeader.vue";
import ThePortfolio from "../components/Portfolio/ThePortfolio.vue";

export default {
  components: {
    TheHeader,
    BreadCrumbs,
    ThePortfolio
  },
  data(){
    return{
      captionTitle: 'Наши работы',
    }
  }
};
</script>

<style scoped lang='scss'>
  .content{
    margin-top: 155px;
  }
</style>

