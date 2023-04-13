<template>
  <div class="about__inner">
    <div class="container">
      
      <the-about-list-vue v-bind:tabs="tabs"></the-about-list-vue>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import TheAboutListVue from "../components/About/TheAboutList.vue";
export default {
  components: { TheAboutListVue },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      // about: 'название модуля + / + about'
      about: "about/fetchInfo",
    }),
  },
  mounted() {
    this.about();
  },
  computed: {
    // название aliasa: (state) => state.order.название aliasa,
    ...mapState({
      tabs: (state) => state.about.tabs,
    }),
  },
  watch: {},
};
</script>

<style lang='scss' scoped>
.about__inner {
  margin-top: 100vh;
  padding: 60px 0;
  z-index: 3;
  position: relative;
  background: var(--c-bg);
}
</style>
