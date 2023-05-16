<template>
  <section id="services" class="services">
    <div class="container services-container">
      <div class="services__header wow fadeIn" data-wow-delay="0.2s">
        <p>
<!--          {{ desc }}-->
        </p>
      </div>
      <div class="services__wrapper wow fadeIn" data-wow-delay="0.4s">
        <the-swiper
          ref="mySwiper"
          :activeIndex="activeIndex"
          v-on:goToSlide="goToSlide"
          v-on:activeIndexChanged="activeIndexChanged"
          :dataSlider="slider?slider:[]"
        ></the-swiper>
      </div>
      <div class="services__wrapper__text">
        <div
          class="thumb__item"
          v-for="(item, index) in SliderThumbWithId"
          :key="item.id"
          :class="{ active: activeIndex === item.id }"
        >
          <span @click="goToSlide(item.id)">{{ item.title }}</span>
        </div>
      </div>
      <the-section-caption
        :sectionCaption="sectionCaption"
        class="color"
      ></the-section-caption>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import TheSectionCaption from "./../Components/TheSectionCaption.vue";
import TheSwiper from "./../Components/Services/TheSwiper.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Navigation, Pagination } from "swiper";
import { useSwiper } from "swiper/vue";
import { ref, onMounted } from "vue";
import { reactive } from "vue";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
    props: {
        services: Array
    },
  components: {
    Swiper,
    SwiperSlide,
    TheSectionCaption,
    useSwiper,
    TheSwiper,
  },
  data() {
    const activeIndex = ref(0);
      console.log(this.services[0]);
    return {
      sectionCaption: "Services",
      desc: this.services[0].desc,
      slider: this.services[0].slider[0].slider_item,
      slider_thumb: this.services[0].slider[0].slider_thumb,
      slideIndex: 1,
      activeIndex,
    };
  },
  methods: {
    ...mapMutations({}),
    // ...mapActions({
    //   services: "services/fetchInfo",
    // }),

    goToSlide(slideNumber) {
      this.$refs.mySwiper.goToSlide(slideNumber);
    },
    activeIndexChanged(slideNumber) {
      this.activeIndex = slideNumber - 1;
    },
  },
  computed: {
    ...mapGetters({
      SliderThumbWithId: "services/SliderThumbWithId"
    })
  },
  watch: {},
};
</script>

<style lang='scss'>

</style>
