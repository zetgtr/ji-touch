<template>
  <the-header></the-header>
  <div class="content">
    <div class="container">
      <h1>{{captionTitle}}</h1>
      <BreadCrumbs :breadcrumbs="breadcrumbs"></BreadCrumbs>
    </div>
    <contact-component></contact-component>
    <order-component></order-component>
  </div>
</template>

<script>
// import BreadCrumbs from "../components/BreadCrumbs.vue";
import { BreadCrumbs } from "../router";
import TheHeader from "./../components/TheHeader.vue";
import orderComponent from "./../infusions/orderComponent.vue";
import contactComponent from "./../infusions/contactComponent.vue";

export default {
  components: {
    TheHeader,
    BreadCrumbs,
    orderComponent,
    contactComponent
  },
  data(){
    return{
      captionTitle: 'Контакты',
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

