<template>
  <the-header></the-header>
  <div class="content">
    <div class="container">
      <h1>{{captionTitle}}</h1>
      <BreadCrumbs :breadcrumbs="breadcrumbs"></BreadCrumbs>
    </div>
  </div>
</template>

<script>
import TheHeader from './../components/TheHeader.vue'
import { BreadCrumbs } from "../router";
export default{
  components:{
    TheHeader,
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
  .content{
    margin-top: 155px;
  }
</style>
