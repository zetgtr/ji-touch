<template>
  <the-header></the-header>
  <div class="content">
    <div class="container">
      <h1>{{captionTitle}}</h1>
      <BreadCrumbs :breadcrumbs="breadcrumbs"></BreadCrumbs>
    </div>
    <the-portfolio-item></the-portfolio-item>
  </div>
</template>

<script>
// import BreadCrumbs from "../components/BreadCrumbs.vue";
import { BreadCrumbs } from "../router";
import TheHeader from "./../components/TheHeader.vue";
import ThePortfolioItem from "../components/Portfolio/ThePortfolioItem.vue";

export default {
  components: {
    TheHeader,
    BreadCrumbs,
    ThePortfolioItem
  },
  data(){
    return{
      captionTitle: '',
    }
  },
  created() {

    this.breadcrumbs = this.$route.meta.breadcrumbs;
    console.log(this.breadcrumbs);
  },
  mounted(){
    this.captionTitle = 'Работа такая то'
  }
};
</script>

<style scoped lang='scss'>

</style>

