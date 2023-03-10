<template>
  <nav class="breadcrumbs">
    <ul>
      <li v-for="(item, index) in breadcrumbs" :key="index" calss='breadcrumb'>
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "BreadCrumbs",
  computed: {
    breadcrumbs() {
        console.log(this.$route.matched);
      const routes = this.$route.matched;
      const breadcrumbs = routes.map(route => ({
        name: route.name,
        path: route.path
      }));
      return [{ name: "Home", path: "/" }, ...breadcrumbs];
    }
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