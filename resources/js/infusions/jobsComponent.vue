<template>
  <div class="jobs">
    <div class="container">
      <jobs-list-vue
    :items="items"
  />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import JobsItemVue from "../components/Jobs/JobsItem.vue";
import JobsListVue from "../components/Jobs/JobsList.vue";

export default {
  components: {
    JobsItemVue,
    JobsListVue,
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      // jobs: 'название модуля + / + jobs'
      jobs: "jobs/fetchInfo",
    }),
  },
  mounted() {
    this.jobs();
  },
  computed: {
    // название aliasa: (state) => state.order.название aliasa,
    ...mapState({
      items: (state) => state.jobs.items,
    }),
  },
  watch: {},
};
</script>

<style lang='scss'>
</style>