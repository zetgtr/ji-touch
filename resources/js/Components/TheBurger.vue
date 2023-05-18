<template>
  <section class="bur" id="buger">
    <div class="container">
      <div class="bur__wrapper">
        <TheLinkList
          v-bind:items="items"
          v-bind:classes="classes"
          v-on:burger="removeOverflowBody"
        ></TheLinkList>
        <div class="bur__footer">
          <div class="address">
            <h4 class="title">г. Санкт-Петербург</h4>
            <p>
              г. Петергоф, Санкт-Петербургский пр., <br />
              д. 60, лит. Ф, БЦ «Ракета», офис 210
            </p>
          </div>
          <div class="contacts">
            <a href="tel:+7 905 262 49 68">+7 905 262 49 68</a>
            <b></b>
            <a href="mailto:info@ji-touch.ru">info@ji-touch.ru</a>
          </div>
          <div class="social">
            <a
              href="https://vk.com/jitouch"
              target="_blank"
              class="item vk"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import TheLinkList from "../Components/TheLinkList.vue";
export default {
  components: {
    TheLinkList,
  },
  data() {
    console.log(this.$page.props.navigation_burger);
    return {
      classes: "bur__menu",
      items: this.$page.props.navigation_burger,
    };
  },
  methods: {
    toggleBurger() {
      const burger = document.querySelector("the-burger");
      burger.classList.toggle("show");
      setTimeout(() => burger.classList.toggle("visible"), 300);
    },
    removeOverflowBody() {
      document.body.classList.remove("no-scroll");
    },
  },
};
</script>