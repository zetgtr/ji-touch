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
      fetchInfo: 'fetchInfo'
    }),
  },
  mounted() {
    this.fetchInfo();
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
