<template>
  <div
    class="porfolio__item"
    v-for="item in items"
    :key="item.id"
    ref="tiltableItem"
  >
    <a
      class="main-container shadow-bottom"
      stas="Poollavka"
      :href="'http://'+item.subtitle"
      target="_blank"
      rel="noopener"
    >
      <img :src="item.img" alt="" />
      <div class="contentBx">
        <div>
          <img :src="item.bg_img" alt="" />
        </div>
      </div>
    </a>
    <a class="porfolio__item-mobile" ref="mobile">
      <img :src="item.img_mobile" alt="" />
    </a>
    <div class="porfolio__item__logo">
      <img :src="item.img_logo" alt="" />
    </div>
    <div class="porfolio__item__text">
      <span>{{ item.title }}</span>
      <a>{{ item.subtitle }}</a>
    </div>
  </div>
</template>

<script>
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Link} from "@inertiajs/vue3";
import VanillaTilt from "vanilla-tilt";
import { onMounted, nextTick, ref } from "vue";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
    components: {
        Link,
    },
  setup(props) {
    const tiltableItem = ref(null);
    const mobile = ref(null);

    onMounted(async () => {
      await new Promise((resolve) => {
        const interval = setInterval(() => {
          if (tiltableItem.value && mobile.value) {
            clearInterval(interval);
            resolve();
          }
        }, 100);
      });

      // gsap.registerPlugin(ScrollTrigger);
      // const array = mobile.value;
      // gsap.utils.toArray(array).forEach((el) => {
      //   let tl = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: el,
      //       start: "top 60%",
      //       end: "top 20%",
      //       scrub: 1,
      //     },
      //   });
      //   tl.to(el, { y: 40, duration: 2 });
      // });

      const elements = tiltableItem.value;
      Array.prototype.forEach.call(elements, function (el) {
        VanillaTilt.init(el, {
          max: 10,
          speed: 400,
          // Добавьте другие параметры настройки здесь, если нужно
        });
      });
    });

    return { tiltableItem, mobile };
  },
};
</script>

<style>
</style>
