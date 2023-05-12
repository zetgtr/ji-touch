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
      fetchInfo: "test2/fetchInfo",
    }),
  },
  mounted() {
    this.fetchInfo();
  },
  computed: {
    // название aliasa: (state) => state.order.название aliasa,
    ...mapState({
        test2: (state) => state.order.test2,
      }),
  },
  watch: {},
};
</script>

<style lang='scss'>
</style>
