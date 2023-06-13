<template>
  <section id="porfolio" class="porfolio">
    <div class="container porfolio-container">
      <AosWrapper>
        <div
          data-aos="fade-in"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="50"
        >
          <div
            class="porfolio__header wow fadeIn"
            data-wow-delay="0.2s"
            v-if="componentPage === 'Home'"
          >
            <h2 v-html="$replaceNewLines(title)"></h2>
            <Link :href="route('project')">
              <div class="more">
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
        </div>
      </AosWrapper>
      <AosWrapper>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="600"
          data-aos-delay="50"
        >
          <div class="porfolio__wrapper wow fadeIn" data-wow-delay="0.2s">
            <the-item-list
              v-if="itemsToDisplay.length > 0"
              :items="itemsToDisplay"
            ></the-item-list>
            <div ref="sentinel" style="height: 1px"></div>
          </div>
        </div>
      </AosWrapper>

      <div class="porfolio__footer" v-if="componentPage === 'Home'">
        <Link
          :href="route('project')"
          class="button button--orange portfolio__btn"
        >
          <span>Смотреть все</span>
        </Link>
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
import { Link } from "@inertiajs/vue3";
import TheSectionCaption from "../TheSectionCaption.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    Link,
    TheItemList,
    TheButton,
    TheSectionCaption,
  },
  props: {
    portfolio: Array,
  },
  data() {
    // if(this.$page.props.portfolio) this.portfolio = this.$page.props.portfolio
    console.log();
    return {
      title: this.portfolio[0]?.title,
      more: this.portfolio[0]?.more,
      items: this.portfolio[0]?.items,
      setBtn: this.portfolio[0]?.setBtn,
      sectionCaption: "Portfolio",
      componentPage: this.$inertia.page?.component,
      itemsToDisplay: [],
    };
  },
  methods: {
    observeSentinel() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.loadMoreItems();
            }
          });
        },
        { threshold: 1 }
      );

      observer.observe(this.$refs.sentinel);
    },
    loadMoreItems() {
      if (this.portfolio[0]?.items && this.portfolio[0]?.items.length) {
        // Here you can implement the logic to load more items
        // For example, you can fetch more items from an API or append additional items from the props

        // Assuming this.items is the complete list of items
        const totalItems = this.portfolio[0]?.items.length;
        const displayedItems = this.itemsToDisplay.length;

        // Load additional items if not all items have been displayed
        if (displayedItems < totalItems) {
          const remainingItems = this.portfolio[0]?.items.slice(
            displayedItems,
            displayedItems + 10
          );
          this.itemsToDisplay = [...this.itemsToDisplay, ...remainingItems];
        }
      }
    },
  },
  watch: {},
  mounted() {
    // Initialize the initial set of items to display
    this.itemsToDisplay = this.portfolio[0]?.items.slice(0, 10);

    // Observe the sentinel element for intersection
    this.observeSentinel();
  },
};
</script>

<style lang='scss'>
</style>
