<template>
  <the-header></the-header>
  <div class="content">
    <div class="container">
      <h1>{{captionTitle}}</h1>
      <BreadCrumbs :breadcrumbs="breadcrumbs"></BreadCrumbs>
    </div>
    <reviews-component></reviews-component>
  </div>
  <the-footer-vue></the-footer-vue>
</template>

<script>
import TheFooterVue from '../components/TheFooter.vue';
// import BreadCrumbs from "../components/BreadCrumbs.vue";
import { BreadCrumbs } from "../router";
import TheHeader from "./../components/TheHeader.vue";
import reviewsComponent from "./../infusions/reviewsComponent.vue";

export default {
  components: {
    TheHeader,
    BreadCrumbs,
    reviewsComponent,
    TheFooterVue
  },
  data(){
    return{
      captionTitle: 'Наши отзывы',
    }
  },
  created() {
    this.breadcrumbs = this.$route.meta.breadcrumbs;
    console.log(this.breadcrumbs);
  },
};
</script>

<style scoped lang='scss'>
  
</style>

