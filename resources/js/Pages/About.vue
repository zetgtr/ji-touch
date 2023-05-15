<template>
    <Head :title="title" />
  <the-header></the-header>
  <div class="content">
    <div class="container" style="z-index:4; position:relative;" >
      <h1>{{ title }}</h1>
<!--      <BreadCrumbs :breadcrumbs="breadcrumbs"></BreadCrumbs>-->
    </div>
    <about-component-vue></about-component-vue>
  </div>
</template>

<script>
import TheHeader from "../Components/TheHeader.vue";
import TheFooterVue from "../Components/TheFooter.vue";
import reviewsComponentVue from "../infusions/reviewsComponent.vue";
import jobsComponentVue from "../infusions/jobsComponent.vue";
import aboutComponentVue from "../infusions/aboutComponent.vue";
import firstComponentVue from '../infusions/firstComponent.vue';

import {Head} from "@inertiajs/vue3";

export default {
    props: {
        title: String
    },
  components: {
        Head,
    TheHeader,
    TheFooterVue,
    reviewsComponentVue,
    jobsComponentVue,
    aboutComponentVue,
    firstComponentVue
  },
  data() {
    return {
    };
  },
};
</script>
<style scoped lang='scss'>
</style>
