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
      :href="item.subtitle"
      target="_blank"
    >
      <img :src="item.img" alt="" />
      <div class="contentBx">
        <div>
          <img src="../../assets/img/tesat.png" alt="" />
        </div>
      </div>
    </a>
    <a class="porfolio__item-mobile" ref="mobile">
      <img :src="item.img_mobile" alt="" />
    </a>
    <div class="porfolio__item__logo">
      <img src="../../assets/img/logo-001.png" alt="" />
    </div>
    <div class="porfolio__item__text">
      <span>{{ item.title }}</span>
      <a>{{ item.subtitle }}</a>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import { watch } from "vue";
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isMounted: false,
    };
  },
  mounted() {
    this.isMounted = true;
  },

  watch: {
    isMounted(val) {
      if (val) {
        console.log(123);
        // Ваш код, который должен быть выполнен после монтирования компонента
        gsap.registerPlugin(ScrollTrigger);
        const array = this.$refs.mobile;
        gsap.utils.toArray(array).forEach((el) => {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top 60%",
              end: "top 20%",
              scrub: 1,
            },
          });
          tl.to(el, { y: 40, duration: 2 });
        });

        const elements = this.$refs.tiltableItem;
        console.log(elements);
        Array.prototype.forEach.call(elements, function (el) {
          VanillaTilt.init(el, {
            max: 10,
            speed: 400,
            // Добавьте другие параметры настройки здесь, если нужно
          });
        });
      }
    },
  },
};
</script>

<style>
</style>