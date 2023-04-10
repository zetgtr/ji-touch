<template>
  <section id="services" class="services">
    <div class="container services-container">
      <div class="services__header wow fadeIn" data-wow-delay="0.2s">
        <p>
          Ji-Touch предоставляет комплекс услуг в сфере digital: аналитические,
          креативные и технические решения
        </p>
      </div>
      <div class="services__wrapper wow fadeIn" data-wow-delay="0.4s">
        <!-- <swiper
          class='swiper-container'
          :slides-per-view="1"
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :navigation="{
            prevEl: prev,
            nextEl: next,
          }"
          ref="swiperRef"
          :modules="modules"
          :effect="'fade'"
          :pagination="{
            el: '.swiper-pagination',
            type: 'fraction',
          }"
        >
          <swiper-slide>
            <div class="services__item">
              <div class="row">
                <div class="col-5">
                  <div class="services__left">
                    <h2 class="services__item-title">
                      Разработка<br />
                      web-сайтов
                    </h2>
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
          </swiper-slide>
          <swiper-slide>
            <div class="services__item">
              <div class="row">
                <div class="col-5">
                  <div class="services__left">
                    <h2 class="services__item-title">
                      Поддержка<br />
                      web-сайтов
                    </h2>
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
          </swiper-slide>
          <div class="slider__btns-container">
            <div ref="prev" @click="onPrevClick" class="swiper-button-prev">
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
                  />
                  <rect x="29" y="5" width="2" height="2" fill="white" />
                  <rect x="34" y="5" width="1" height="2" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_11_36">
                    <rect width="38" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="swiper-pagination"></div>
            <div ref="next" @click="onNextClick" class="swiper-button-next">
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
            </div>
          </div>
          <div class="count">{{ activeIndex }}</div>
        </swiper> -->
        <the-swiper
            ref="mySwiper"
            v-on:goToSlide="goToSlide"
        ></the-swiper>
      </div>
      <div class="services__wrapper__text">
        <div
          class="thumb__item"
          v-for="(item, index) in items"
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
import TheSectionCaption from "./../TheSectionCaption.vue";
import TheSwiper from "./../Services/TheSwiper.vue";

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

    return {
      items: [
        { id: 0, title: "Разработка web-сайтов" },
        { id: 1, title: "Разработка web-сайтов" },
      ],
      sectionCaption: "Services",
      slideIndex: 1,
    };
  },
  methods: {
     goToSlide(slideNumber) {
         this.$refs.mySwiper.goToSlide(slideNumber);
     }
  }
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
      font-size: 50px;
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
