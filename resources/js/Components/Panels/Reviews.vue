<template>
  <div class="reviews">
    <div class="container">
      <div class="rewievs__wrapper wow fadeIn" data-wow-delay="0.2s">
        <review-item
          v-for="item in displayedItems"
          :key="item.id"
          :item="item"
        ></review-item>
        <div ref="sentinel" style="height: 1px"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewItem from "../Reviews/ReviewItem.vue";

export default {
  components: {
    ReviewItem,
  },
  props: {
    reviews: Array,
  },
  data() {
    return {
      items: this.reviews[0]?.items,
      displayedItems: [],
      observer: null,
    };
  },
  mounted() {
    this.items = this.reviews[0]?.items || [];
    this.observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 1,
    });
    this.observer.observe(this.$refs.sentinel);
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loadMoreItems();
        }
      });
    },
    loadMoreItems() {
      const remainingItems = this.items.slice(
        this.displayedItems.length,
        this.displayedItems.length + 10
      );
      this.displayedItems.push(...remainingItems);

      // Если все элементы загружены, отключаем наблюдение Intersection Observer
      if (this.displayedItems.length >= this.items.length) {
        this.observer.disconnect();
      }

      // Вызов Inertia метода для обновления страницы с новыми данными, если требуется
      // Пример вызова Inertia метода:
      // this.$inertia.get(route('reviews.index'), { page: currentPage + 1 });
    },
  },
};
</script>

<style lang='scss'>
.rewievs__wrapper {
  display: grid;
  gap: 1.5rem;
}
</style>
