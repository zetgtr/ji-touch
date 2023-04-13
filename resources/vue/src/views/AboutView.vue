<template>
  <the-header></the-header>
  <div class="content">
    <div class="container">
      <h1>{{captionTitle}}</h1>
      <BreadCrumbs :breadcrumbs="breadcrumbs"></BreadCrumbs>
      <jobs-component-vue></jobs-component-vue>
    </div>
  </div>
  <the-footer-vue></the-footer-vue>
</template>

<script>
import TheHeader from './../components/TheHeader.vue'
import TheFooterVue from '../components/TheFooter.vue';
import jobsComponentVue from '../infusions/jobsComponent.vue';
import { BreadCrumbs } from "../router";
export default{
  components:{
    TheHeader,
    TheFooterVue,
    jobsComponentVue,
    BreadCrumbs,
  },
  data(){
    return{
      captionTitle: 'О компании',
    }
  },
  created() {
    this.breadcrumbs = this.$route.meta.breadcrumbs;
    console.log(this.breadcrumbs);
  },
}

</script>
<style scoped lang='scss'>

</style>
