<template>
    <Head :title="title" />
  <the-header></the-header>
  <div class="content">
    <div class="container">
      <h1>{{title}}</h1>
      <jobs-component-vue></jobs-component-vue>
    </div>
  </div>
  <the-footer-vue></the-footer-vue>
</template>

<script>
import {Head} from "@inertiajs/vue3";
import TheHeader from './../Components/TheHeader.vue'
import TheFooterVue from './../Components/TheFooter.vue';
import jobsComponentVue from '../Components/Panels/Jobs.vue';
export default{
    props: {
        title: String
    },
  components:{
      Head,
    TheHeader,
    TheFooterVue,
    jobsComponentVue,
  },
}

</script>
<style scoped lang='scss'>

</style>
