<template>
  <ul class="list-reset" :class="classes">
    <li class="nav__item" v-for="(tab,index) in tabs" :key="index">
      <router-link :to="tab.link">{{
        tab.title
      }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("burger");
    },
  },
};
</script>

<style lang='scss' scoped>
ul{
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1.5rem;
    justify-content: center;
}
li{
    display: flex;
    align-items: center;
    justify-content: center;
    
    a{
        padding: 1rem 4rem;
    border-radius: 20px;
    // border: 1px solid var(--c-primary);
    background: var(--c-white);
    }
}
</style>