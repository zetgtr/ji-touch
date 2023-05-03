<template></template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      // fetchInfo: 'название модуля + / + fetchInfo'
      fetchInfo: "article/fetchInfo",
    }),
  },
  mounted() {
    this.fetchInfo();
  },
  computed: {
    // название aliasa: (state) => state.order.название aliasa,
    ...mapState({
        article: (state) => state.order.article,
      }),
  },
  watch: {},
};
</script>

<style lang='scss'>
</style>
