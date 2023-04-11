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
      test2: 'test2'
    }),
  },
  mounted() {
    this.test2();
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
