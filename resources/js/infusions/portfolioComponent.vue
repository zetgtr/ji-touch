<template>
  <section id="porfolio" class="porfolio">
    <div class="container porfolio-container">
      <div class="porfolio__header wow fadeIn" data-wow-delay="0.2s">
        <h2 v-html="$replaceNewLines(title)" v-if="page === 'home'"></h2>
        <router-link to="/project/">
          <div class="more" v-if="page === 'home'">
            <span>{{ more }}</span>
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
        </router-link>
      </div>
      <div class="porfolio__wrapper wow fadeIn" data-wow-delay="0.2s" >
        <the-item-list :items="lastItems" v-if="page === 'home'">
        </the-item-list>
        <the-item-list :items="items" v-else>
        </the-item-list>
      </div>
      
      <div class="porfolio__footer">
        <the-button class="button button--orange first__btn" v-if="page === 'home'"
          ><span>Показать ещё</span></the-button
        >
      </div>
      <the-section-caption
        :sectionCaption="sectionCaption"
      ></the-section-caption>
    </div>
  </section>
</template>

<script>
import TheItemList from "./../components/Portfolio/TheItemList.vue";
import TheButton from "./../components/UI/TheButton.vue";
import TheSectionCaption from "./../components/TheSectionCaption.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  props:{
    page:{
      type: String,
      default: "home",
    }
  },
  components: {
    TheItemList,
    TheButton,
    TheSectionCaption,
  },
  data() {
    return {
      
      sectionCaption: "Portfolio",
    };
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      portfolio: "portfolio/fetchInfo",
    }),
  },
  mounted() {
    this.portfolio();
  },
  computed: {
    ...mapState({
      title: (state) => state.portfolio.title,
      more: (state) => state.portfolio.more,
      items: (state) => state.portfolio.items,
      setBtn: (state) => state.portfolio.setBtn,
    }),
    ...mapGetters({
      lastItems: 'portfolio/lastItems',
    })
  },
  watch: {
    
  },
};
</script>

<style lang='scss'>
.porfolio {
  padding: 130px 0;
  position: relative;
  &__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 80px;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 0;
    }
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    column-gap: 3.5rem;
    row-gap: 5rem;
  }
  &__item {
    // overflow: hidden;
    transform-style: preserve-3d;
    position: relative;
    &-mobile {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate3d(-20%, -50%, 50px);
      z-index: 2;
      box-shadow: rgb(0 0 0 / 25%) 0px 40px 41px -12px;
      border-radius: 28px;
      transform-style: preserve-3d;
    }

    .main-container {
      overflow: hidden;
      display: block;
      width: 85%;
      height: 0;
      position: relative;
      padding-bottom: 64%;
      transition: 1s ease-in-out;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: 1.5s ease-in-out;
        z-index: 3;
      }
      // &::after{
      //     content: attr(stas);
      //     top: 50%;
      //     left: 50%;
      //     font-size: 60px;
      //     font-weight: 700;
      //     z-index: 2;
      //     color: #fff;
      //     position: absolute;
      //     transform: translate(-50%,-50%);
      //     visibility: hidden;
      //     opacity: 0;
      //     transition: 0.3s linear;
      // }
      &::before {
        visibility: hidden;
        opacity: 0;
        transition: 0.3s linear;
      }
      .contentBx {
        transform-style: preserve-3d;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // padding: 50px;
        // background: #111;
        transition: 0.5s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
        left: -100%;
        z-index: 3;
        div {
          // transform: translateY(100%);
          transition: 1.5s ease-in-out;
          width: 85%;
          position: absolute;
          width: 100%;
          height: 100%;
          img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            // transform: translateY(0);
          }
        }
      }
    }
    &__logo {
      position: absolute;
      top: 30px;
      left: 30px;
      transform-style: preserve-3d;
      transform: translate3d(0, 0, 30px);
    }
    &__text {
      position: absolute;
      bottom: 30px;
      left: 30px;
      display: flex;
      flex-direction: column;
      align-items: baseline;
      transform-style: preserve-3d;
      transform: translate3d(0, 0, 20px);
      span {
        font-size: 24px;
        color: var(--c-white);
      }
      a {
        font-size: 14px;
        color: var(--c-white);
      }
    }
    transition: 0.3s linear;
    &:hover {
      .main-container {
        &::after {
          visibility: visible;
          opacity: 1;
        }
        &::before {
          visibility: visible;
          opacity: 1;
          z-index: 5;
        }
        // & > img{
        //     transform: translateY(-100%);
        // }
        .contentBx {
          left: 0;
          div {
            transform: translateY(0);
          }
        }
      }
      // .porfolio__item-mobile{
      //     transform: translateY(100%);
      // }
    }
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4.2rem;
    a {
      color: var(--c-white);
      font-weight: 700;
      font-size: var(--fz-xs);
      text-transform: uppercase;
    }
  }
  .parralax__img-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .more {
    font-size: 16px;
  }
}
</style>
