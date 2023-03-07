<template>
  <section class="bur" id="buger" >
    <div class="container">
      <div class="bur__wrapper">
        <!-- <the-link-list v-bind:items="items"></the-link-list> -->
        <ul class="bur__menu list-reset">
          
          <li style="--clr: #00ade1">
            <a data-text="&nbsp;Главная&nbsp;" href="">&nbsp;Главная&nbsp;</a>
          </li>
          <li style="--clr: #ff6493">
            <a data-text="&nbsp;Портфолио&nbsp;" href=""
              >&nbsp;Портфолио&nbsp;</a
            >
          </li>
          <li style="--clr: #ffdd1c">
            <a data-text="&nbsp;Услуги&nbsp;" href="">&nbsp;Услуги&nbsp;</a>
          </li>
          <li style="--clr: #00dc82">
            <a data-text="&nbsp;Отзывы&nbsp;" href="">&nbsp;Отзывы&nbsp;</a>
          </li>
          <li style="--clr: #dc00d4">
            <a data-text="&nbsp;О компании&nbsp;" href=""
              >&nbsp;О компании&nbsp;</a
            >
          </li>
          <li style="--clr: #ef7f1a">
            <a data-text="&nbsp;Вакансии&nbsp;" href="">&nbsp;Вакансии&nbsp;</a>
          </li>
        </ul>
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

    };
  },
  methods: {
    toggleBurger() {
      const burger = document.querySelector('the-burger')
      burger.classList.toggle('show')
      setTimeout(() => burger.classList.toggle('visible'), 300)
    }
  }
};
</script>

<style lang='scss' scoped>
.bur {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  transition: all 0.8s linear;
  // background-color: red;
  z-index: -1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    transition: transform 0.6s ease-in-out;
  }
  &.show {
    &::after {
      transform: none;
    }
    z-index: 99;
  }

  .container {
    margin: 0 auto;
    padding: 0 calc(var(--container-offset)) 0 var(--container-offset);
    max-width: var(--container-width);
    position: relative;
  }
  &__wrapper {
    padding: 16vh 2.8645833333% 8vh 11.9791666667%;
    position: relative;
    height: 100%;
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s linear;
    // transition-delay: 0.3s;
    &.visibility {
      visibility: visible;
      opacity: 1;
      transition-delay: 0.3s;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    li {
      margin: 0 0 5vh;

      a {
        position: relative;
        color: var(--c-secondary);
        text-decoration: none;
        display: inline-block;
        vertical-align: top;
        font-size: 64px;
        font-weight: 700;
        text-indent: -0.05em;
        letter-spacing: 0.01em;
        white-space: nowrap;
        transition: 0.3s linear;
        color: transparent;
        // -webkit-text-stroke: 1px rgb(102 102 102 / 50%);
        color: var(--c-title);
        &::before {
          content: attr(data-text);
          position: absolute;
          color: var(--c-lsecondary);
          width: 0%;
          overflow: hidden;
          transition: 1s;
          -webkit-text-stroke: 1px var(--c-lsecondary);
          left: 0;
        }
        &:hover {
          &::before {
            width: 100%;
            -webkit-text-stroke: 1px var(--c-lsecondary);
          }
        }
      }
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .address {
      p {
        color: var(--c-title);
        font-size: var(--fz);
      }
    }
    .contacts {
      b {
        display: inline-block;
        vertical-align: -5%;
        height: 15px;
        font-style: normal;
        border-left: 1px solid #202020;
        background: #202020;
        margin: 0 33px;
      }
    }
    .social {
      .vk {
        color: #47423a;
        font-size: 1.6em;
        line-height: 1em;
        &::before {
          font-family: "Font Awesome 5 Brands";
          content: "\f189";
        }
        &:hover {
          text-decoration: none;
          color: #f59644;
        }
      }
    }
  }
}
</style>