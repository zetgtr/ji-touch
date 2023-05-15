<template>
  <section id="first" class="first">
    <div class="container first-container">
      <div class="first__wrapper">
        <div class="caption">
          <h1
            class="wow zoomInUp"
            data-wow-delay="0.3s"
            v-html="$replaceNewLines(title)"
          ></h1>
          <p class="wow zoomInUp" data-wow-delay="0.3s">
            {{ desc }}
          </p>
        </div>
        <the-button
          class="button button-click button--orange first__btn"
          @click.prevent
          @click="showModal"
          ><span>{{ btn }}</span></the-button
        >
        <div class="bg__img">
          <svg
            version="1.1"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="490px"
            height="488px"
            viewBox="0 0 490 488"
            enable-background="new 0 0 1200 581"
            xml:space="preserve"
          >
            <polygon
              fill="#EBF7F9"
              points="0,0 197.969,487.953 282.661,281.865 489.63,197.88 "
            />
          </svg>
        </div>
      </div>
      <the-section-caption
        :sectionCaption="sectionCaption"
      ></the-section-caption>
    </div>
  </section>
</template>

<script>
import TheButton from "./../Components/UI/TheButton.vue";
import TheSectionCaption from "./../Components/TheSectionCaption.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    TheButton,
    TheSectionCaption,
  },
  data() {
    return {
      sectionCaption: "DIgital-Агентство",
    };
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      fetchInfo: "first/fetchInfo",
    }),
    showModal(){
      this.$emit("modal");
    },
  },
  mounted() {
    this.fetchInfo();
  },
  computed: {
    ...mapState({
      title: (state) => state.first.title,
      desc: (state) => state.first.desc,
      btn: (state) => state.first.btn,
    }),
    ...mapGetters({
      replaceTitle: "first/replaceTitle",
    }),
  },
  watch: {},
};
</script>

<style lang="scss" >
.first {
  height: 100vh;
  padding: 115px 0;
  // position: relative;
  min-height: 950px;
  max-height: 950px;
  &-container {
    height: 100%;
  }
  &__wrapper {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
    background-color: transparent;
    // background-image: url(./../../img/main-view-arrow.svg);
    // background-position: center right;
    // background-repeat: no-repeat;
    justify-content: center;
  }
  &__btn {
    width: fit-content;
    margin-top: 20px;
    color: var(--c-white);
    font-weight: 700;
  }
  .caption {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
  }
  .bg__img {
    position: absolute;
    right: 210px;
    width: 490px;
    height: 480px;
    z-index: -1;
    svg {
      position: absolute;
      max-width: 100%;
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: 0.3s linear;
      polygon {
        transition: 0.3s linear;
        animation: samolet 3s linear infinite;
      }
    }
  }
}

@keyframes samolet {
  0% {
    filter: blur(0px);
  }
  50% {
    filter: blur(10px);
  }
  100% {
    filter: blur(0px);
  }
}
.first__btn {
  span {
    transition: 0.3s linear;
  }
  &:hover {
    span {
      color: var(--c-primary) !important;
    }
  }
}
</style>
