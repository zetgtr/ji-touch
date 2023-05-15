<template>
  <ul class="list-reset" :class="classes">
    <li class="nav__item" v-for="(tab, index) in tabs" :key="index">
<!--      <router-link :to="tab.link"><span>{{ tab.title }}</span></router-link>-->
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
ul {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1.5rem;
  justify-content: center;
  padding-top: 2rem;
}
li {
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 1rem 4rem;
    border-radius: 20px;
    // border: 1px solid var(--c-primary);
    position: relative;
    background: var(--c-white);
    span{
      position: relative;
      z-index: 2;
      color: var(--c-title);
      transition: all 0.3s ease;
    }
    &::after {
      position: absolute;
      content: "";
      width: 0;
      height: 100%;
      top: 0px;
      right: 0;
      z-index: 1;
      background-color: var(--c-primary);
      border-radius: 1.53em;
      transition: all 0.3s ease;
    }
    &:hover {
      &::after {
        left: 0;
        width: 100%;
      }
      span{
        color: var(--c-white);
      }
    }
  }
}
</style>
