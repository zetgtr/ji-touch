<template>
  <div class="reviews" >
    <div class="container">
      <div class="rewievs__wrapper wow fadeIn" data-wow-delay="0.2s">
        <review-item :items="items" ></review-item>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import ReviewItem from '../Reviews/ReviewItem.vue';
export default {
  components: {
    ReviewItem
  },
  data() {
    return{
    }
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      // reviews: 'название модуля + / + reviews'
      reviews: "reviews/fetchInfo",
    }),
  },
  mounted() {
    this.reviews()
  },
  computed: {
    // название aliasa: (state) => state.order.название aliasa,
    ...mapState({
      items: (state) => state.reviews.items,
    }),
  },
  watch: {},
};
</script>

<style lang='scss'>
.rewievs__wrapper{
  display: grid;
  gap: 1.5rem;

}
</style>
