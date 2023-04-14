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
      fetchInfo: "{{ $alias }}/fetchInfo",
    }),
  },
  mounted() {
    this.fetchInfo();
  },
  computed: {
    // название aliasa: (state) => state.order.название aliasa,
    ...mapState({
  @foreach($data[0] as $key=>$item)
      {{ $key }}: (state) => state.order.{{$key}},
  @endforeach
    }),
  },
  watch: {},
};
</script>

<style lang='scss'>
</style>
