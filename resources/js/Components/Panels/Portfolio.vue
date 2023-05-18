<template>
  <section id="porfolio" class="porfolio">
    <div class="container porfolio-container">
      <div class="porfolio__header wow fadeIn" data-wow-delay="0.2s">
        <h2 v-html="$replaceNewLines(title)" v-if="page === 'home'"></h2>
        <Link :href="route('project')">
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
        </Link>
      </div>
      <div class="porfolio__wrapper wow fadeIn" data-wow-delay="0.2s" >
        <the-item-list :items="lastItems()" v-if="page === 'home'">
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
import TheItemList from "../Portfolio/TheItemList.vue";
import TheButton from "../UI/TheButton.vue";
import {Link} from "@inertiajs/vue3";
import TheSectionCaption from "../TheSectionCaption.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
      Link,
    TheItemList,
    TheButton,
    TheSectionCaption,
  },
  data() {
    return {
      title: this.$page.props.portfolio[0]?.title,
      more: this.$page.props.portfolio[0]?.more,
      items: this.$page.props.portfolio[0]?.items,
      setBtn: this.$page.props.portfolio[0]?.setBtn,
      sectionCaption: "Portfolio",
    };
  },
  methods: {
      lastItems(){
          return this.items.slice(-4);
      }
  },
  watch: {

  },
};
</script>

<style lang='scss'>

</style>
