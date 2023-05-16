<template>
  <section class="bur" id="buger" >
    <div class="container">
      <div class="bur__wrapper">
        <the-link-list v-bind:items="items" v-bind:classes="classes" v-on:burger="removeOverflowBody"></the-link-list>
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
import TheLinkList from '../components/TheLinkList.vue'
export default {
  components:{
    TheLinkList
  },
  data() {
    return {
      classes: 'bur__menu',
      items: [
        {
          id: "1",
          title: "Главная",
          link: "home",
          text: "Главная"
        },
        {
          id: 2,
          title: "Портфолио",
          link: "project",
          text: "Портфолио"
        },
        {
          id: 3,
          title: "Услуги",
          link: "price",
          text: "Услуги"
        },
        {
          id: 4,
          title: "Отзывы",
          link: "reviews",
          text: "Отзывы"
        },
        {
          id: 5,
          title: "О компании",
          link: "education",
          text: "О компании"
        },
        {
          id: 6,
          title: "Вакансии",
          link: "jobs",
          text: "Вакансии"
        },
      ],
    };
  },
  methods: {
    toggleBurger() {
      const burger = document.querySelector('the-burger')
      burger.classList.toggle('show')
      setTimeout(() => burger.classList.toggle('visible'), 300)
    },
    removeOverflowBody(){
      document.body.classList.remove("no-scroll");
    }
  }
};
</script>

<style lang='scss'>

</style>
