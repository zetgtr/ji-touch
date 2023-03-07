<template>
    <ul class="list-reset" :class='classes'>
      <li class="nav__item" v-for="item in items" :key="item.id">
        <router-link :to="item.link" :data-text="item.text">{{item.title}}</router-link>
      </li>
    </ul>
</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    classes:{
        type: String,
        required : false
    }
  },
};

</script>

<style lang='scss' scoped>

</style>