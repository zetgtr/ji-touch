<template>
  <div class="container">
    <div class="title-caption">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang='scss'>
.title-caption {
  padding-top: 100px;
}
</style>