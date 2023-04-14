<template>
  <div class="swiper-pagination-container">
    <div class="swiper-pagination-current">{{ currentSlide }}</div>
    <div class="swiper-pagination-total">{{ totalSlides }}</div>
  </div>
</template>

<script>
import { computed, inject } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperRef = inject("swiperRef");
    console.log(swiperRef.value);
    const currentSlide = computed(() => {
      if (
        swiperRef.value &&
        swiperRef.value.swiper
      ) {
        return swiperRef.value.swiper.realIndex + 1;
      } else {
        return 0;
      }
    });

    const totalSlides = computed(() => {
      if (
        swiperRef.value &&
        swiperRef.value.swiper
      ) {
        return swiperRef.value.swiper.slides.length;
      } else {
        return 0;
      }
    });

    return {
      currentSlide,
      totalSlides,
    };
  },
};
</script>