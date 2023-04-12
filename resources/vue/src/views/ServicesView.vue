<template>
  <the-header></the-header>
  <div class="content">
    <div class="container">
      <h1>{{captionTitle}}</h1>
      <BreadCrumbs :breadcrumbs="breadcrumbs"></BreadCrumbs>
    </div>
    <portfolio-component></portfolio-component>
  </div>
</template>

<script>
// import BreadCrumbs from "../components/BreadCrumbs.vue";
import { BreadCrumbs } from "../router";
import TheHeader from "./../components/TheHeader.vue";
import portfolioComponent from "./../infusions/portfolioComponent.vue";

export default {
  components: {
    TheHeader,
    BreadCrumbs,
    portfolioComponent
  },
  data(){
    return{
      captionTitle: 'Наши работы',
    }
  },
  created() {
    this.breadcrumbs = this.$route.meta.breadcrumbs;
    console.log(this.breadcrumbs);
  },
};
</script>

<style scoped lang='scss'>
  .content{
    margin-top: 155px;
  }
</style>

