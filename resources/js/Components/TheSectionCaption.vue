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
.section-caption{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  font-size: 2.4em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  text-orientation: mixed;
  -webkit-writing-mode: vertical-lr;
  -ms-writing-mode: tb-lr;
  writing-mode: vertical-lr;
  transform: translate(calc(100% - 100px));
  color: #e9f4f8;
  &.color{
    color: var(--c-white);
  }
}
</style>