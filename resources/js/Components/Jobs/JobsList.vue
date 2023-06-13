<template>
  <div>
    <div class="wrapper">
      <jobs-item-vue v-for="(item, index) in items" :item="item" :key="index" />
    </div>
  </div>
  <!-- <div v-else class="loader-container">
    <the-loader-vue></the-loader-vue>
  </div> -->
</template>

<script>
import TheLoaderVue from "../UI/TheLoader.vue";
import JobsItemVue from "./JobsItem.vue";
export default {
  components: { JobsItemVue, TheLoaderVue },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>


