<template>
  <Swiper
    :modules="[EffectFade]"
    effect="fade"
    @slideChange="onSlideChange"
    ref="swiperRef"
    @swiper="onSwiper"
  >
    <SwiperSlide v-for="(item, index) in slider" :key="index">
      <div class="services__item">
        <div class="row">
          <div class="col-5">
            <div class="services__left">
              <h2 class="services__item-title">
                {{ item }}
              </h2>
            </div>
            <div class="slider__btns-container">
              <div class="swiper-button-prev" @click="goToSlide(index - 1)">
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
              <div
                class="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal"
              >
                <span class="swiper-pagination-current">{{ index + 1 }}</span>
                /
                <span class="swiper-pagination-total">{{ items.length }}</span>
              </div>
              <div class="swiper-button-next" @click="goToSlide(index + 1)">
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
          </div>
          <div class="col-7">
            <div class="services__item-content">
              <h4 class="services__item-subtitle">
                Делаем присутствие компаний<br />
                в интернете эффектным
              </h4>
              <p>
                Разработка проектов любой сложности<br />
                от простых сайтов-визиток и промо-страниц<br />
                до сложного портала.
              </p>
              <a class="more" href=""
                ><span>Узнать больше</span>
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
                    />
                    <rect x="7" y="5" width="2" height="2" fill="white" />
                    <rect x="3" y="5" width="2" height="2" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_2">
                      <rect width="38" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
  <!--    <div class="swiper-pagination"></div>-->
  <div class="count" ref="count" :class="{ move: isMoving }">
    {{ countSwiper }}
  </div>
</template>

<script>
import { useStore } from 'vuex'

import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/vue";
import { EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-fade";
import { ref, onMounted, defineEmits } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props, ctx) {
    const store = useStore()
    const slider = store.state.services.slider;
    const swiper = ref();
    const countSwiper = ref(1);
    const isMoving = ref(false);
    const onSlideChange = () => {
      const realIndex = swiper.value.realIndex;
      isMoving.value = true;
      setTimeout(() => {
        isMoving.value = false;
      }, 400);
      countSwiper.value = realIndex + 1;
      ctx.emit("activeIndexChanged", countSwiper.value);
      ctx.emit("slideChanged", realIndex);
    };

    const onSwiper = (instance) => {
      swiper.value = instance;
    };

    const items = ["Item 1", "Item 2"];
    onMounted(() => {
      countSwiper.value = 1;
    });

    const goToSlide = (slideNumber) => {
      swiper.value.slideTo(slideNumber);
    };

    return {
      swiper,
      onSwiper,
      onSlideChange,
      items,
      countSwiper,
      goToSlide,
      isMoving,
      EffectFade,
      slider
    };
  },
  mounted(){
    const store = useStore()
    const slider = store.state.services.slider;
    console.log(slider);
    
  }
};
</script>
