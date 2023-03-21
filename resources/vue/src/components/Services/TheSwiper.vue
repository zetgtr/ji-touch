<template>
  <Swiper @slideChange="onSlideChange" ref="swiperRef" @swiper="onSwiper">
    <SwiperSlide v-for="(item, index) in items" :key="index">
      <div class="services__item">
              <div class="row">
                <div class="col-5">
                  <div class="services__left">
                    <h2 class="services__item-title">
                      {{ item }}
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
    </SwiperSlide>
    <div class="count" ref='count'>{{ count.value }}</div>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

import { ref, onMounted, defineEmits } from "vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  emits: ["slideChanged"],
  setup(props, ctx) {
    const emit = defineEmits(["slideChanged"]);

    const swiper = ref();
    const count = ref(1);

    const onSlideChange = () => {
      const realIndex = swiper.value.realIndex;
      console.log(count);
      count.value = realIndex + 1;
      ctx.emit("slideChanged", realIndex);
    };

    const items = ["Item 1", "Item 2", "Item 3"];
    onMounted(() => {
      console.log(swiper.value);
    });
    return {
      swiper,
      onSwiper: (instance) => (swiper.value = instance),
      onSlideChange,
      items,
      count
    };
  },
};
</script>