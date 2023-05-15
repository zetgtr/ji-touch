<template>
  <nav class="breadcrumbs">
    <ul>
      <li v-for="(item, index) in breadcrumbs" :key="index" class="breadcrumb">
<!--        <router-link :to="item.path">{{ item.name }}</router-link>-->
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "BreadCrumbs",
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
    },
  },
  methods:{

  }
};
</script>
image.png
<style lang='scss'>
.breadcrumbs {
  margin-bottom: 20px;
}

.breadcrumbs ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.breadcrumbs li:not(:last-child) {
  margin-right: 10px;
}
.breadcrumb{
    position: relative;
}
.breadcrumbs a {
  color: #000;
  text-decoration: none;
}

.breadcrumbs a:hover {
  text-decoration: underline;
}
</style>
