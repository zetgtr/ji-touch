<template>
  <div class="container">
    <div class="breadcrumbs">
      <template v-for="(item, index) in breadcrumbs" :key="index">
        <span v-if="index === breadcrumbs.length - 1">{{ item.title }}</span>
        <Link :href="route(item.url)" v-else
          ><span>{{ item.title }}</span>
        </Link>
        <span v-if="index !== breadcrumbs.length - 1"> > </span>
      </template>
    </div>
  </div>
</template>

<script>
import {Link} from "@inertiajs/vue3";

export default {
  props: {
    breadcrumbs: {
      type: Object,
      required: true,
    },
  },
  components:{
    Link,
  },
};
</script>