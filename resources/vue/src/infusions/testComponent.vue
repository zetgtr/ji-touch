<template></template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
      test: 'test'
    }),
  },
  mounted() {
    this.test();
  },
  computed: {
    // ...mapState({
    //     row: state => state.test.row,
    // })
  },
  watch: {

  },
};
</script>

<style lang='scss'>
</style>
