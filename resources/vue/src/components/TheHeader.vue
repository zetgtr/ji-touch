<template>
  <header 
  id="header" 
  class="header"
  :class="{ burger__open: isBurgerVisible }"
  >
    <div class="container header-container">
      <div class="header__wrapper" :class="{ hidden: isBurgerVisible }">
        <div class="header__logo">
          <router-link to="/">
          <img src="../assets/img/logotype.svg" alt="Logo">
          </router-link>
        </div>
        <nav class="nav">
          <the-link-list v-bind:items="items" v-bind:classes="classes"></the-link-list>
        </nav>
        <div class="header__right">
          <a class="header__num" href="tel:+7 905 262 49 68"
            >+7 905 262 49 68</a
          >
        </div>
      </div>
      <button 
      class="burger btn-reset" 
      id="burger-btn" 
      @click="toggleBurger"
      :class="{ active: isBurgerVisible }"
      >
        <span class="line"></span>
        <span class="line"></span>
      </button>
    </div>
  </header>
  <the-burger
    :class="{ show: isBurgerVisible, visibility: isBurgerVisible }"
  ></the-burger>
</template>

<script>
import TheBurger from "../components/TheBurger.vue";
import TheLinkList from "../components/TheLinkList.vue";
export default {
  name: "TheHeader",
  components: {
    TheBurger,
    TheLinkList,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Проекты",
          link: "/project/",
        },
        {
          id: 2,
          title: "О компании",
          link: "/about/",
        },
        {
          id: 3,
          title: "Агенство",
          link: "/price/",
        },
        {
          id: 4,
          title: "Контакты",
          link: "/education/",
        },
      ],
      classes : 'nav__list',
      isBurgerVisible: false,
    };
  },
  methods: {
    toggleBurger() {
      this.isBurgerVisible = !this.isBurgerVisible;
    },
  },
  
};
</script>

<style lang="scss" >

</style>