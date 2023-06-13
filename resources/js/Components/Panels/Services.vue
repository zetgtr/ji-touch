<template>
  <section id="services" class="services">
    <div class="container services-container">
      <AosWrapper>
        <div data-aos="fade-up">
          <div class="services__header">
            <p>
              {{ desc }}
            </p>
          </div>
        </div>
      </AosWrapper>
      <AosWrapper>
        <div
          data-aos="fade-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-delay="50"
        >
          <div class="services__wrapper wow fadeIn" data-wow-delay="0.4s">
            <the-swiper
              ref="mySwiper"
              :activeIndex="activeIndex"
              v-on:goToSlide="goToSlide"
              v-on:activeIndexChanged="activeIndexChanged"
              :dataSlider="slider ? slider : []"
            ></the-swiper>
          </div>
        </div>
      </AosWrapper>
      <AosWrapper>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="50"
        >
          <div class="services__wrapper__text">
            <div
              class="thumb__item"
              v-for="(item, index) in slider_thumb"
              :key="index"
              :class="{ active: activeIndex === index }"
            >
              <span @click="goToSlide(index)">{{ item.title }}</span>
            </div>
          </div>
        </div>
      </AosWrapper>
      <the-section-caption
        :sectionCaption="sectionCaption"
        class="color"
      ></the-section-caption>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import TheSectionCaption from "../TheSectionCaption.vue";
import TheSwiper from "../Services/TheSwiper.vue";

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
    services: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
    TheSectionCaption,
    useSwiper,
    TheSwiper,
  },
  data() {
    console.log(this.$page.props.services[0]?.slider[0]?.slider_thumb);
    const activeIndex = ref(0);
    return {
      sectionCaption: "Services",
      desc: this.$page.props.services[0]?.desc,
      slider: this.$page.props.services[0]?.slider[0]?.slider_item,
      slider_thumb: this.$page.props.services[0]?.slider[0]?.slider_thumb,
      slideIndex: 1,
      activeIndex,
    };
  },
  methods: {
    goToSlide(slideNumber) {
      console.log(slideNumber);
      this.$refs.mySwiper.goToSlide(slideNumber);
    },
    activeIndexChanged(slideNumber) {
      this.activeIndex = slideNumber - 1;
    },
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss'>
</style>
