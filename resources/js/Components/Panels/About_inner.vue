<template>
  <div class="about-component">
    <div class="container">
      <Swiper
        ref="swiperRef"
        :modules="modules"
        :navigation="{
          nextEl: '.next',
          prevEl: '.prev',
        }"
        :pagination="{
          type: 'fraction',
          el: '.pagination',
          currentClass: 'current',
          totalClass: 'total',
        }"
      >
        <SwiperSlide v-for="(slide, index) in slider" :key="index">
          <div class="img-container">
            <img :src="slide.img" alt="{{slide.alt}}" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="slider__btns-container">
        <div class="prev">
          <svg
            width="38"
            height="12"
            viewBox="0 0 38 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_11_36)">
              <path
                d="M0.21968 5.46967C-0.0732197 5.76256 -0.0732197 6.23744 0.21968 6.53033L4.99268 11.3033C5.28558 11.5962 5.76048 11.5962 6.05338 11.3033C6.34618 11.0104 6.34618 10.5355 6.05338 10.2426L1.81068 6L6.05338 1.7574C6.34618 1.4645 6.34618 0.989604 6.05338 0.696704C5.76048 0.403804 5.28558 0.403804 4.99268 0.696704L0.21968 5.46967ZM37.329 5.25L0.75008 5.25L0.75008 6.75L37.329 6.75L37.329 5.25Z"
                fill="black"
              ></path>
              <rect x="29" y="5" width="2" height="2" fill="white"></rect>
              <rect x="34" y="5" width="1" height="2" fill="white"></rect>
            </g>
            <defs>
              <clipPath id="clip0_11_36">
                <rect width="38" height="12" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="pagination"></div>
        <div class="next">
          <svg
            width="38"
            height="12"
            viewBox="0 0 38 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_6_2)">
              <path
                d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z"
                fill="black"
              ></path>
              <rect x="7" y="5" width="2" height="2" fill="white"></rect>
              <rect x="3" y="5" width="2" height="2" fill="white"></rect>
            </g>
            <defs>
              <clipPath id="clip0_6_2">
                <rect width="38" height="12" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <TheAboutListVue :tabs="tabs" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, provide, reactive, ref } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

import TheAboutListVue from "../../components/About/TheAboutList.vue";
import { Pagination, Navigation } from "swiper";

export default {
  components: {
    TheAboutListVue,
    Swiper,
    SwiperSlide,
  },
  props: {
    about_inner: Array
  },
  setup() {
    const store = useStore();

    const tabs = computed(() => store.state.about.tabs);
    const slider = computed(() => store.state.about.slider);

    onMounted(() => {
      store.dispatch("about/fetchInfo");
    });

    return {
      tabs,
      slider,
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style lang='scss'>
.about__inner {
  padding: 60px 0;
  z-index: 3;
  position: relative;
  background: var(--c-bg);
}
.img-container {
  position: relative;
  padding-bottom: 40%;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }
}
.slider__btns-container {
  display: flex;
  padding-top: 1rem;
  justify-content: center;
  align-items: baseline;
  gap: 1rem;
  left: 90px;
  bottom: 60px;
  .pagination {
    width: auto;
    gap: 5px;
    .current {
      color: var(--c-primary) !important;
      font-weight: 700 !important;
    }
    .swiper-pagination span {
      font-size: 16px !important;
    }
    .total {
      color: var(--c-title) !important;
      font-weight: 700 !important;
    }
  }
  .next,
  .prev {
    cursor: pointer;
    width: 50px;
    svg {
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
</style>







