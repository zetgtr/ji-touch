<template>
  <div class="section-caption">
    <slot>{{sectionCaption}}</slot>
  </div>
</template>

<script>
export default {
    name: "section-caption",
    props:{
      sectionCaption: {
        type: String,
        required: true
      }
    },
    data(){
        return{

        }
    }
};
</script>

<style lang='scss'>

</style>
