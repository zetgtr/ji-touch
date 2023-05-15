<template>
  <div
    class="review__item"
    v-for="item in items"
    :key="item.id"
    ref="tiltableItem"
  >
    <div class="row">
      <div class="col-5" style="display: flex; flex-direction: column">
        <h2>{{ item.title }}</h2>
        <div class="review__item-logo">
          <img :src="item.logo" alt="" />
        </div>
      </div>
      <div class="col-7" style="display: flex; flex-direction: column">
        <div class="desc" v-html="item.desc"></div>
        <Fancybox
          style="margin-top: auto"
          :options="{
            Carousel: {
              infinite: false,
            },
          }"
        >
          <a class="more" data-fancybox="gallery" :href="item.img"
            ><span>Узнать больше</span
            ><svg
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
              </defs></svg
          ></a>
        </Fancybox>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, nextTick, ref } from "vue";
// import Fancybox from "./../UI/Fancybox.vue";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    Fancybox,
  },
  setup(props) {},
};
</script>

<style lang='scss' >
.review__item {
  background-color: #fff;
  height: 100%;
  padding: 60px 90px;
  overflow: hidden;
  &:hover {
    h2 {
      color: var(--c-primary);
    }
    .review__item-logo {
      img {
        opacity: 1;
      }
    }
  }
  &-logo {
    margin-top: auto;
    img {
      opacity: 0.5;
      transition: 0.3s linear;
      max-width: 100%;
      height: 60px;
    }
  }

  h2 {
    transition: 0.3s linear;
    font-size: 34px;
    font-weight: 700;
  }
}
.desc {
  font-size: 0.8rem !important;
  p {
    font-size: 0.8rem !important;
  }
}
</style>
