<template>
  <ul class="list-reset" :class="classes">
    <li class="nav__item" v-for="item in items" :key="item.id">
      <Link :href="route(item.url)" :data-text="item.title" @click="handleClick">{{
        item.title
      }}</Link>
    </li>
  </ul>
</template>

<script>
import {Link} from "@inertiajs/vue3";

export default {
    components: {
        Link
    },
  props: {
    items: {
      type: Array,
      required: true,
    },
    classes: {
      type: String,
      required: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("burger");
    },
  },
};
</script>
