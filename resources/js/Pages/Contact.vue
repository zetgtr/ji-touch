<template>
    <Head :title="title" />
  <the-header></the-header>
  <div class="content">
    <div class="container">
      <h1>{{title}}</h1>
    </div>
    <contact-component></contact-component>
    <order-component></order-component>
  </div>
  <the-footer-vue></the-footer-vue>
</template>

<script>
import TheHeader from "../Components/TheHeader.vue";
import orderComponent from "../Components/Panels/Order.vue";
import contactComponent from "../Components/Panels/Contact.vue";
import TheFooterVue from '../Components/TheFooter.vue';
import {Head} from "@inertiajs/vue3";

export default {
    props: {
       title: String
    },
  components: {
      Head,
    TheHeader,
    orderComponent,
    contactComponent,
    TheFooterVue
  },
};
</script>

<style scoped lang='scss'>
</style>

