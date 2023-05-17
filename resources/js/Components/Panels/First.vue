<template>
  <section id="first" class="first">
    <div class="container first-container">
      <div class="first__wrapper">
        <div class="caption">
          <h1
            class="wow zoomInUp"
            data-wow-delay="0.3s"
            v-html="$replaceNewLines(first[0].title)"
          ></h1>
          <p class="wow zoomInUp" data-wow-delay="0.3s">
            {{ first[0].desc }}
          </p>
        </div>
        <the-button
          class="button button-click button--orange first__btn"
          @click.prevent
          @click="showModal"
          ><span>{{ first[0].btn }}</span></the-button
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
import TheButton from "./../UI/TheButton.vue";
import TheSectionCaption from "./../TheSectionCaption.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    props: {
        first: Array
    },
  components: {
    TheButton,
    TheSectionCaption,
  },
  data() {
      console.log(this.first)
    return {
      sectionCaption: "DIgital-Агентство",
    };
  },
  methods: {
    ...mapMutations({}),
    showModal(){
      this.$emit("modal");
    },
  },
};
</script>

<style lang="scss" >

</style>
