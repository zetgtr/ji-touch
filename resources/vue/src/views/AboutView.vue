<template>
  <the-header></the-header>
  <div class="content">
    <div class="container" style="z-index:4; position:relative;" >
      <h1>{{ captionTitle }}</h1>
      <BreadCrumbs :breadcrumbs="breadcrumbs"></BreadCrumbs>
    </div>
    <about-component-vue></about-component-vue>
  </div>
</template>

<script>
import TheHeader from "./../components/TheHeader.vue";
import TheFooterVue from "../components/TheFooter.vue";
import { BreadCrumbs } from "../router";
import reviewsComponentVue from "../infusions/reviewsComponent.vue";
import jobsComponentVue from "../infusions/jobsComponent.vue";
import aboutComponentVue from "../infusions/aboutComponent.vue";
import firstComponentVue from '../infusions/firstComponent.vue';
export default {
  components: {
    TheHeader,
    TheFooterVue,
    BreadCrumbs,
    reviewsComponentVue,
    jobsComponentVue,
    aboutComponentVue,
    firstComponentVue
  },
  data() {
    return {
      captionTitle: "О компании",
    };
  },
  created() {
    this.breadcrumbs = this.$route.meta.breadcrumbs;
    console.log(this.breadcrumbs);
  },
};
</script>
<style scoped lang='scss'>
</style>
