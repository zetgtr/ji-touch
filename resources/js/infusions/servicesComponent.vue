<template>
  <section id="services" class="services">
    <div class="container services-container">
      <div class="services__header wow fadeIn" data-wow-delay="0.2s">
        <p>
          {{ desc }}
        </p>
      </div>
      <div class="services__wrapper wow fadeIn" data-wow-delay="0.4s">
        <the-swiper
          ref="mySwiper"
          :activeIndex="activeIndex"
          v-on:goToSlide="goToSlide"
          v-on:activeIndexChanged="activeIndexChanged"
          :dataSlider="slider"
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
import TheSectionCaption from "./../components/TheSectionCaption.vue";
import TheSwiper from "./../components/Services/TheSwiper.vue";

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
  components: {
    Swiper,
    SwiperSlide,
    TheSectionCaption,
    useSwiper,
    TheSwiper,
  },
  data() {
    const activeIndex = ref(0);
    return {
      sectionCaption: "Services",
      slideIndex: 1,
      activeIndex,
    };
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      services: "services/fetchInfo",
    }),

    goToSlide(slideNumber) {
      this.$refs.mySwiper.goToSlide(slideNumber);
    },
    activeIndexChanged(slideNumber) {
      this.activeIndex = slideNumber - 1;
    },
  },
  mounted() {
    this.services();
  },
  computed: {
    ...mapState({
      desc: (state) => state.services.desc,
      slider: (state) => state.services.slider,
      slider_thumb: (state) => state.services.slider_thumb,
    }),
    ...mapGetters({
      SliderThumbWithId: "services/SliderThumbWithId"
    })
  },
  watch: {},
};
</script>

<style lang='scss'>
.services {
  background-color: #e9f5f9;
  background-color: #eaf5f9;
  padding: 95px 0;
  position: relative;
  &__wrapper {
    background: #fff;
    overflow: hidden;
    position: relative;
  }
  &__header {
    p {
      font-size: 30px;
      max-width: 60%;
      line-height: 1.5;
      margin-bottom: 4rem;
      color: var(--c-title);
    }
  }
  &__item {
    background-color: #fff;
    height: 100%;
    padding: 60px 90px;
    overflow: hidden;
    &-title {
      font-size: 34px;
      font-weight: 700;
      margin-bottom: 7rem;
    }
    &-content {
      display: flex;
      flex-direction: column;
      height: 100%;
      p {
        font-size: var(--fz-s);
        color: var(--c-def);
      }
    }
    &-subtitle {
      color: var(--c-title);
      font-size: var(--fz-l);
      text-transform: initial;
      margin-bottom: 3rem;
    }

    .row {
      height: 100%;
    }
  }

  .services__left {
    display: flex;
    flex-direction: column;
  }
  .slider__btns-container {
    margin-top: auto;
  }

  .mySwiper {
    padding-top: 40px;
    padding-left: 90px;
    padding-right: 40px;
    padding-bottom: 10px;

    .swiper-slide-thumb-active {
      .thumb__item {
        span {
          color: var(--c-primary);
          &::before {
            background: var(--c-primary);
          }
        }
      }
    }
  }
  .thumb__item {
    cursor: pointer;
    span {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      transition: 0.3s linear;
      color: var(--c-def);
      &::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--c-white);
        transition: 0.3s linear;
      }
    }

    &:hover {
      span {
        color: var(--c-secondary);
        &::before {
          background-color: var(--c-secondary);
        }
      }
    }
  }

  .slider__btns-container {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    position: absolute;
    left: 90px;
    bottom: 60px;
  }
  .swiper-pagination-current {
    color: var(--c-primary);
    font-weight: 700;
  }
  .swiper-pagination {
    color: #eaf5f9;
  }
  .swiper-pagination-total {
    color: var(--c-title);
    font-weight: 700;
  }
  .count {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(30%, -50%);
    color: var(--c-primary);
    font-size: 300px;
    font-weight: 700;
    transition: 0.3s linear;
    z-index: 2;
    &.move {
      transform: translate(100%, -50%);
    }
  }
  .swiper-slide {
    overflow: hidden;
    height: 100%;
  }
  .swiper-pagination,
  .swiper-button-next,
  .swiper-button-prev {
    position: initial;
  }
  .swiper-pagination {
    width: auto;
    span {
      font-size: 16px;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    width: 50px;
    &::after {
      content: none;
    }
    svg {
      transition: 0.3s linear;
      path {
        fill: var(--c-secondary);
        transition: 0.3s linear;
      }
    }
    &:hover {
      svg {
        path {
          fill: var(--c-primary);
        }
      }
    }
  }
}
.services__wrapper__text {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 20px 0;
  padding-top: 40px;
  padding-left: 90px;
  padding-right: 40px;
  padding-bottom: 10px;
}
.thumb__item {
  &.active {
    span {
      color: var(--c-primary);
      &::before {
        background: var(--c-primary);
      }
    }
  }
}
</style>
