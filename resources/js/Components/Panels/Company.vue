<template>
  <section id="about" class="about">
    <div class="container about-container">
      <AosWrapper>
        <div
          data-aos="fade-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          data-aos-delay="50"
        >
          <div class="about__header wow fadeIn" data-wow-delay="0.4s">
            <h2 v-html="subtitle"></h2>
          </div>
        </div>
      </AosWrapper>
      <AosWrapper>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="100"
        >
          <div class="about__wrapper">
            <div class="row about__wrapper-content">
              <div class="col-xl-6 wow fadeIn" data-wow-delay="0.4s">
                <div class="about__item-title-container">
                  <h3
                    class="about__item-title"
                    v-html="$replaceNewLines(title)"
                  ></h3>
                </div>
              </div>
              <div class="col-xl-6 wow fadeIn" data-wow-delay="0.4s">
                <div class="about__item-right">
                  <h3 class="about__item-subtitle">
                    {{ text }}
                  </h3>
                  <p>
                    {{ desc }}
                  </p>
                  <the-more-button class="more"
                    ><span>{{ more }}</span></the-more-button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </AosWrapper>
      <the-section-caption
        :sectionCaption="sectionCaption"
        class="color"
      ></the-section-caption>
    </div>
  </section>
</template>

<script>
import TheMoreButton from "../UI/TheMoreButton.vue";
import TheButton from "../UI/TheButton.vue";
import TheSectionCaption from "../TheSectionCaption.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    TheMoreButton,
    TheButton,
    TheSectionCaption,
  },
  data() {
    return {
      subtitle: this.$page.props.company[0]?.subtitle,
      title: this.$page.props.company[0]?.title,
      text: this.$page.props.company[0]?.text,
      desc: this.$page.props.company[0]?.desc,
      more: this.$page.props.company[0]?.more,
      sectionCaption: "Company",
    };
  },
};
</script>

<style lang='scss'>
</style>
