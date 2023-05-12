<template>
  <header
    id="header"
    class="header"
    :class="{ burger__open: isBurgerVisible, header_fix: isHeaderFixed }"
  >
    <div class="container header-container">
      <div class="header__wrapper" :class="{ hidden: isBurgerVisible }">
        <div class="header__logo">
          <Link :href="route('home')">
            <img src="../assets/img/logotype.svg" alt="Logo" />
          </Link>
        </div>
        <nav class="nav">
          <TheLinkList
            v-bind:items="items"
            v-bind:classes="classes"
          ></TheLinkList>
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
import {Link} from "@inertiajs/vue3";

export default {
  name: "TheHeader",
  components: {
      Link,
    TheBurger,
    TheLinkList,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Проекты",
          link: route('project'),
        },
        {
          id: 2,
          title: "О компании",
          link: "/about/",
        },
        {
          id: 3,
          title: "Агенство",
          link: "/agency/",
        },
        {
          id: 4,
          title: "Контакты",
          link: "/contact/",
        },
      ],
      classes: "nav__list",
      isBurgerVisible: false,
      isHeaderFixed: false,
    };
  },
  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleBurger() {
      this.isBurgerVisible = !this.isBurgerVisible;
      if (this.isBurgerVisible) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.isHeaderFixed = true;
      } else {
        this.isHeaderFixed = false;
      }
    },

  },
};
</script>

<style lang="scss" >
.innerLayout{
  .header{
    background: var(--c-bg);
    background: transparent;
    &.header_fix{
      background: var(--c-bg);
    }
  }
}
</style>
