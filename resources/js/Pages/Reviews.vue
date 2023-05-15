<template>
    <Head :title="title" />
  <the-header></the-header>
  <div class="content">
    <div class="container">
      <h1>{{title}}</h1>
<!--      <BreadCrumbs :breadcrumbs="breadcrumbs"></BreadCrumbs>-->
    </div>
    <reviews-component></reviews-component>
  </div>
  <the-footer-vue></the-footer-vue>
</template>

<script>

import {Head} from "@inertiajs/vue3";
import TheHeader from "./../Components/TheHeader.vue";
import TheFooterVue from "./../Components/TheFooter.vue";
import reviewsComponent from "./../infusions/reviewsComponent.vue";

export default {
    props: {
      title: String
    },
  components: {
      Head,
    TheHeader,
    reviewsComponent,
    TheFooterVue
  },
};
</script>

<style scoped lang='scss'>

</style>

