import { Link, Head, createInertiaApp } from "@inertiajs/vue3";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, computed, onMounted, openBlock, createBlock, Fragment, renderList, resolveDirective, toRefs, ref, onUnmounted, watch, createCommentVNode, createSSRApp, h as h$1 } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot, ssrGetDirectiveProps } from "vue/server-renderer";
import { mapMutations, mapActions, mapState, useStore, mapGetters, createStore } from "vuex";
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import { Pagination, Navigation, EffectFade } from "swiper";
import axios from "axios";
import { vMaska } from "maska";
import wnumb from "wnumb";
import nouislider from "nouislider";
import { gsap } from "gsap";
import anime from "animejs";
import VanillaTilt from "vanilla-tilt";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import "vuex-persistedstate";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$F = {
  components: {
    Link
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    classes: {
      type: String,
      required: false
    }
  },
  methods: {
    handleClick() {
      this.$emit("burger");
    }
  }
};
function _sfc_ssrRender$F(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<ul${ssrRenderAttrs(mergeProps({
    class: ["list-reset", $props.classes]
  }, _attrs))}><!--[-->`);
  ssrRenderList($props.items, (item) => {
    _push(`<li class="nav__item">`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route(item.link),
      "data-text": item.text,
      onClick: $options.handleClick
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/TheLinkList.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const TheLinkList$1 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$F]]);
const _sfc_main$E = {
  components: {
    TheLinkList: TheLinkList$1
  },
  data() {
    return {
      classes: "bur__menu",
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
        }
      ]
    };
  },
  methods: {
    toggleBurger() {
      const burger = document.querySelector("the-burger");
      burger.classList.toggle("show");
      setTimeout(() => burger.classList.toggle("visible"), 300);
    },
    removeOverflowBody() {
      document.body.classList.remove("no-scroll");
    }
  }
};
function _sfc_ssrRender$E(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_link_list = resolveComponent("the-link-list");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "bur",
    id: "buger"
  }, _attrs))}><div class="container"><div class="bur__wrapper">`);
  _push(ssrRenderComponent(_component_the_link_list, {
    items: $data.items,
    classes: $data.classes,
    onBurger: $options.removeOverflowBody
  }, null, _parent));
  _push(`<div class="bur__footer"><div class="address"><h4 class="title">г. Санкт-Петербург</h4><p> г. Петергоф, Санкт-Петербургский пр., <br> д. 60, лит. Ф, БЦ «Ракета», офис 210 </p></div><div class="contacts"><a href="tel:+7 905 262 49 68">+7 905 262 49 68</a><b></b><a href="mailto:info@ji-touch.ru">info@ji-touch.ru</a></div><div class="social"><a href="https://vk.com/jitouch" target="_blank" class="item vk"></a></div></div></div></div></section>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TheBurger.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const TheBurger = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$E]]);
const _sfc_main$D = {
  components: {
    Link
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    classes: {
      type: String,
      required: false
    }
  },
  methods: {
    handleClick() {
      this.$emit("burger");
    }
  }
};
function _sfc_ssrRender$D(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<ul${ssrRenderAttrs(mergeProps({
    class: ["list-reset", $props.classes]
  }, _attrs))}><!--[-->`);
  ssrRenderList($props.items, (item) => {
    _push(`<li class="nav__item">`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route(item.link),
      "data-text": item.text,
      onClick: $options.handleClick
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TheLinkList.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const TheLinkList = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$D]]);
const _imports_0$1 = "/build/assets/logotype-6830d1b9.svg";
const _sfc_main$C = {
  name: "TheHeader",
  components: {
    Link,
    TheBurger,
    TheLinkList
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Проекты",
          link: "project"
        },
        {
          id: 2,
          title: "О компании",
          link: "about"
        },
        {
          id: 3,
          title: "Агенство",
          link: "agency"
        },
        {
          id: 4,
          title: "Контакты",
          link: "contact"
        }
      ],
      classes: "nav__list",
      isBurgerVisible: false,
      isHeaderFixed: false
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
    }
  }
};
function _sfc_ssrRender$C(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_TheLinkList = resolveComponent("TheLinkList");
  const _component_the_burger = resolveComponent("the-burger");
  _push(`<!--[--><header id="header" class="${ssrRenderClass([{ burger__open: $data.isBurgerVisible, header_fix: $data.isHeaderFixed }, "header"])}"><div class="container header-container"><div class="${ssrRenderClass([{ hidden: $data.isBurgerVisible }, "header__wrapper"])}"><div class="header__logo">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$1,
            alt: "Logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><nav class="nav">`);
  _push(ssrRenderComponent(_component_TheLinkList, {
    items: $data.items,
    classes: $data.classes
  }, null, _parent));
  _push(`</nav><div class="header__right"><a class="header__num" href="tel:+7 905 262 49 68">+7 905 262 49 68</a></div></div><button id="burger-btn" class="${ssrRenderClass([{ active: $data.isBurgerVisible }, "burger btn-reset"])}"><span class="line"></span><span class="line"></span></button></div></header>`);
  _push(ssrRenderComponent(_component_the_burger, {
    class: { show: $data.isBurgerVisible, visibility: $data.isBurgerVisible }
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TheHeader.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const TheHeader = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$C]]);
const _sfc_main$B = {};
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="container footer-container"><div class="footer__wrapper"><p>2009-2023 © Digital-агентство «Ji-Touch»</p><p>Надёжный партнёр Вашего бизнеса!</p><a href="">Политика конфиденциальности</a></div></div></footer>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TheFooter.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const TheFooterVue$1 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$B]]);
const ReviewItem_vue_vue_type_style_index_0_lang = "";
const _sfc_main$A = {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    // Fancybox,
  },
  setup(props) {
  }
};
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  ssrRenderList($props.items, (item) => {
    _push(`<div class="review__item"><div class="row"><div class="col-5" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}"><h2>${ssrInterpolate(item.title)}</h2><div class="review__item-logo"><img${ssrRenderAttr("src", item.logo)} alt=""></div></div><div class="col-7" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}"><div class="desc">${item.desc}</div></div></div></div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Reviews/ReviewItem.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const ReviewItem = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$A]]);
const reviewsComponent_vue_vue_type_style_index_0_lang = "";
const _sfc_main$z = {
  components: {
    ReviewItem
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      // reviews: 'название модуля + / + reviews'
      reviews: "reviews/fetchInfo"
    })
  },
  mounted() {
    this.reviews();
  },
  computed: {
    // название aliasa: (state) => state.order.название aliasa,
    ...mapState({
      items: (state) => state.reviews.items
    })
  },
  watch: {}
};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_review_item = resolveComponent("review-item");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "reviews" }, _attrs))}><div class="container"><div class="rewievs__wrapper wow fadeIn" data-wow-delay="0.2s">`);
  _push(ssrRenderComponent(_component_review_item, { items: _ctx.items }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/infusions/reviewsComponent.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const reviewsComponent = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$z]]);
const JobsItem_vue_vue_type_style_index_0_lang = "";
const _sfc_main$y = {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "job" }, _attrs))}><div class="row"><div class="col-5" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}"><h2>${ssrInterpolate($props.item.title)}</h2><div class="job-logo"><img${ssrRenderAttr("src", $props.item.img)} alt=""></div></div><div class="col-7" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}"><div class="desc">${$props.item.desc}</div><div class="price"><span>${ssrInterpolate($props.item.price)}</span></div></div></div><div class="hover"><svg width="385" height="324" viewBox="0 0 385 324" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M385 135L0.245727 0.89759L72.9843 157.228L10.6498 323.087L385 135Z" fill="#EF7F1A"></path></svg></div></div>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Jobs/JobsItem.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const JobsItemVue = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$y]]);
const TheLoader_vue_vue_type_style_index_0_scoped_dc245199_lang = "";
const _sfc_main$x = {};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "loader" }, _attrs))} data-v-dc245199><div class="orbe" style="${ssrRenderStyle({ "--index": "0" })}" data-v-dc245199></div><div class="orbe" style="${ssrRenderStyle({ "--index": "1" })}" data-v-dc245199></div><div class="orbe" style="${ssrRenderStyle({ "--index": "2" })}" data-v-dc245199></div><div class="orbe" style="${ssrRenderStyle({ "--index": "3" })}" data-v-dc245199></div><div class="orbe" style="${ssrRenderStyle({ "--index": "4" })}" data-v-dc245199></div></div>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/TheLoader.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const TheLoaderVue = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$x], ["__scopeId", "data-v-dc245199"]]);
const JobsList_vue_vue_type_style_index_0_scoped_d13e6747_lang = "";
const _sfc_main$w = {
  components: { JobsItemVue, TheLoaderVue },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jobs_item_vue = resolveComponent("jobs-item-vue");
  const _component_the_loader_vue = resolveComponent("the-loader-vue");
  if ($props.items.length > 0) {
    _push(`<div${ssrRenderAttrs(_attrs)} data-v-d13e6747><h3 style="${ssrRenderStyle({ "margin-bottom": "2rem" })}" data-v-d13e6747>Список вакансий</h3><div class="wrapper" data-v-d13e6747><!--[-->`);
    ssrRenderList($props.items, (item, index) => {
      _push(ssrRenderComponent(_component_jobs_item_vue, {
        item,
        key: index
      }, null, _parent));
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "loader-container" }, _attrs))} data-v-d13e6747>`);
    _push(ssrRenderComponent(_component_the_loader_vue, null, null, _parent));
    _push(`</div>`);
  }
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Jobs/JobsList.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const JobsListVue = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$w], ["__scopeId", "data-v-d13e6747"]]);
const _sfc_main$v = {
  components: {
    JobsItemVue,
    JobsListVue
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      // jobs: 'название модуля + / + jobs'
      jobs: "jobs/fetchInfo"
    })
  },
  mounted() {
    this.jobs();
  },
  computed: {
    // название aliasa: (state) => state.order.название aliasa,
    ...mapState({
      items: (state) => state.jobs.items
    })
  },
  watch: {}
};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jobs_list_vue = resolveComponent("jobs-list-vue");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "jobs" }, _attrs))}><div class="container">`);
  _push(ssrRenderComponent(_component_jobs_list_vue, { items: _ctx.items }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/infusions/jobsComponent.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const jobsComponentVue = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$v]]);
const swiper_min = "";
const pagination_min = "";
const TheAboutList_vue_vue_type_style_index_0_scoped_e57388c2_lang = "";
const _sfc_main$u = {
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit("burger");
    }
  }
};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(mergeProps({
    class: ["list-reset", _ctx.classes]
  }, _attrs))} data-v-e57388c2><!--[-->`);
  ssrRenderList($props.tabs, (tab, index) => {
    _push(`<li class="nav__item" data-v-e57388c2></li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/About/TheAboutList.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const TheAboutListVue = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$u], ["__scopeId", "data-v-e57388c2"]]);
const aboutComponent_vue_vue_type_style_index_0_lang = "";
const _sfc_main$t = {
  components: {
    TheAboutListVue,
    Swiper,
    SwiperSlide
  },
  setup() {
    const store2 = useStore();
    const tabs = computed(() => store2.state.about.tabs);
    const slider = computed(() => store2.state.about.slider);
    onMounted(() => {
      store2.dispatch("about/fetchInfo");
    });
    return {
      tabs,
      slider,
      modules: [Pagination, Navigation]
    };
  }
};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = resolveComponent("Swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  const _component_TheAboutListVue = resolveComponent("TheAboutListVue");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-component" }, _attrs))}><div class="container">`);
  _push(ssrRenderComponent(_component_Swiper, {
    ref: "swiperRef",
    modules: $setup.modules,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev"
    },
    pagination: {
      type: "fraction",
      el: ".pagination",
      currentClass: "current",
      totalClass: "total"
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($setup.slider, (slide, index) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="img-container"${_scopeId2}><img${ssrRenderAttr("src", slide.img)} alt="{{slide.alt}}"${_scopeId2}></div>`);
              } else {
                return [
                  createVNode("div", { class: "img-container" }, [
                    createVNode("img", {
                      src: slide.img,
                      alt: "{{slide.alt}}"
                    }, null, 8, ["src"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($setup.slider, (slide, index) => {
            return openBlock(), createBlock(_component_SwiperSlide, { key: index }, {
              default: withCtx(() => [
                createVNode("div", { class: "img-container" }, [
                  createVNode("img", {
                    src: slide.img,
                    alt: "{{slide.alt}}"
                  }, null, 8, ["src"])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="slider__btns-container"><div class="prev"><svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_11_36)"><path d="M0.21968 5.46967C-0.0732197 5.76256 -0.0732197 6.23744 0.21968 6.53033L4.99268 11.3033C5.28558 11.5962 5.76048 11.5962 6.05338 11.3033C6.34618 11.0104 6.34618 10.5355 6.05338 10.2426L1.81068 6L6.05338 1.7574C6.34618 1.4645 6.34618 0.989604 6.05338 0.696704C5.76048 0.403804 5.28558 0.403804 4.99268 0.696704L0.21968 5.46967ZM37.329 5.25L0.75008 5.25L0.75008 6.75L37.329 6.75L37.329 5.25Z" fill="black"></path><rect x="29" y="5" width="2" height="2" fill="white"></rect><rect x="34" y="5" width="1" height="2" fill="white"></rect></g><defs><clipPath id="clip0_11_36"><rect width="38" height="12" fill="white"></rect></clipPath></defs></svg></div><div class="pagination"></div><div class="next"><svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6_2)"><path d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z" fill="black"></path><rect x="7" y="5" width="2" height="2" fill="white"></rect><rect x="3" y="5" width="2" height="2" fill="white"></rect></g><defs><clipPath id="clip0_6_2"><rect width="38" height="12" fill="white"></rect></clipPath></defs></svg></div></div>`);
  _push(ssrRenderComponent(_component_TheAboutListVue, { tabs: $setup.tabs }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/infusions/aboutComponent.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const aboutComponentVue = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$t]]);
const _sfc_main$s = {
  name: "the-button"
};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    href: "",
    class: "button button-click button--orange first__btn wow fadeIn",
    "data-wow-delay": "0.5s"
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<b></b><s></s></a>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/TheButton.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const TheButton = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$s]]);
const _sfc_main$r = {
  name: "section-caption",
  props: {
    sectionCaption: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  }
};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-caption" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(`${ssrInterpolate($props.sectionCaption)}`);
  }, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TheSectionCaption.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const TheSectionCaption = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$r]]);
const _sfc_main$q = {
  props: {
    first: Array
  },
  components: {
    TheButton,
    TheSectionCaption
  },
  data() {
    console.log(this.first);
    return {
      sectionCaption: "DIgital-Агентство"
    };
  },
  methods: {
    ...mapMutations({}),
    showModal() {
      this.$emit("modal");
    }
  }
};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_button = resolveComponent("the-button");
  const _component_the_section_caption = resolveComponent("the-section-caption");
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "first",
    class: "first"
  }, _attrs))}><div class="container first-container"><div class="first__wrapper"><div class="caption"><h1 class="wow zoomInUp" data-wow-delay="0.3s">${_ctx.$replaceNewLines($props.first[0].title)}</h1><p class="wow zoomInUp" data-wow-delay="0.3s">${ssrInterpolate($props.first[0].desc)}</p></div>`);
  _push(ssrRenderComponent(_component_the_button, {
    class: "button button-click button--orange first__btn",
    onClick: [() => {
    }, $options.showModal]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate($props.first[0].btn)}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString($props.first[0].btn), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="bg__img"><svg version="1.1" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="490px" height="488px" viewBox="0 0 490 488" enable-background="new 0 0 1200 581" xml:space="preserve"><polygon fill="#EBF7F9" points="0,0 197.969,487.953 282.661,281.865 489.63,197.88 "></polygon></svg></div></div>`);
  _push(ssrRenderComponent(_component_the_section_caption, { sectionCaption: $data.sectionCaption }, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/infusions/firstComponent.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const firstComponent = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$q]]);
const _sfc_main$p = {
  props: {
    title: String
  },
  components: {
    Head,
    TheHeader,
    TheFooterVue: TheFooterVue$1,
    reviewsComponentVue: reviewsComponent,
    jobsComponentVue,
    aboutComponentVue,
    firstComponentVue: firstComponent
  },
  data() {
    return {};
  }
};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_the_header = resolveComponent("the-header");
  const _component_about_component_vue = resolveComponent("about-component-vue");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
  _push(ssrRenderComponent(_component_the_header, null, null, _parent));
  _push(`<div class="content"><div class="container" style="${ssrRenderStyle({ "z-index": "4", "position": "relative" })}"><h1>${ssrInterpolate($props.title)}</h1></div>`);
  _push(ssrRenderComponent(_component_about_component_vue, null, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$p]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {
  props: {
    row: {
      type: Object,
      required: true
    },
    contact: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "order-left" }, _attrs))}><h2>${$props.row.title}</h2><p>${ssrInterpolate($props.row.desc)}</p><div class="order-contacts"><a class="order-contacts-tel" href="{{contact.phone}}">${ssrInterpolate($props.contact.phone)}</a><a class="order-contacts-mail" href="mailto:{{contact.email}}">${ssrInterpolate($props.contact.email)}</a></div></div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Order/TheOrderContent.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const TheOrderContent = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$o]]);
const BudgetDropdown_vue_vue_type_style_index_0_lang = "";
const _sfc_main$n = {
  name: "BudgetDropdown",
  props: {
    placeholder: {
      type: String,
      default: "Бюджет проекта"
    },
    options: {
      type: Array,
      default: () => [1, 2, 3, 4]
    }
  },
  methods: {
    toggleDropdown(e2) {
      e2.target.closest(".dropdown").classList.toggle("active");
    },
    selectOption(e2) {
      const selectedOption = e2.target.closest("div").textContent.trim();
      const textBox = e2.target.closest(".dropdown").querySelector(".textBox");
      textBox.value = selectedOption;
      this.$emit("update:modelValue", selectedOption);
    }
  }
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dropdown" }, _attrs))}><input type="text" class="textBox def"${ssrRenderAttr("placeholder", $props.placeholder)} readonly><div class="option"><!--[-->`);
  ssrRenderList($props.options, (option) => {
    _push(`<div>${ssrInterpolate(option)}</div>`);
  });
  _push(`<!--]--></div><i></i></div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/BudgetDropdown.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const BudgetDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n]]);
const _sfc_main$m = {
  directives: { maska: vMaska },
  props: {
    value: {
      type: String,
      default: ""
    },
    mask: {
      type: String,
      default: null
    },
    label: {
      type: String
    }
  },
  methods: {
    onInput(event) {
      this.$emit("dich", event.target.value);
    }
  }
};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _directive_maska = resolveDirective("maska");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "inputbox" }, _attrs))}><input${ssrRenderAttrs(mergeProps({
    value: $props.value,
    type: "text",
    "data-maska": $props.mask
  }, ssrGetDirectiveProps(_ctx, _directive_maska)))}><span>${ssrInterpolate($props.label)}</span><i></i></div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/InputBox.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const InputBox = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m]]);
const _sfc_main$l = {
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput(event) {
      this.$emit("textarea", event.target.value);
    }
  }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "inputbox in2" }, _attrs))}><textarea${ssrRenderAttr("placeholder", $props.placeholder)}>${ssrInterpolate($props.value)}</textarea><i></i></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/InputTextarea.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const InputTextareaVue = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l]]);
function isNullish(val) {
  return [null, void 0, false].indexOf(val) !== -1;
}
function useValue(props, context, dependencies) {
  const { value: baseValue, modelValue, min } = toRefs(props);
  let value = modelValue && modelValue.value !== void 0 ? modelValue : baseValue;
  const initialValue = ref(value.value);
  if (isNullish(value.value)) {
    value = ref(min.value);
  }
  if (Array.isArray(value.value) && value.value.length == 0) {
    throw new Error("Slider v-model must not be an empty array");
  }
  return {
    value,
    initialValue
  };
}
function useClasses(props, context, dependencies) {
  const {
    classes: classes_,
    showTooltip,
    tooltipPosition,
    orientation
  } = toRefs(props);
  const classes = computed(() => ({
    target: "slider-target",
    focused: "slider-focused",
    tooltipFocus: "slider-tooltip-focus",
    tooltipDrag: "slider-tooltip-drag",
    ltr: "slider-ltr",
    rtl: "slider-rtl",
    horizontal: "slider-horizontal",
    vertical: "slider-vertical",
    textDirectionRtl: "slider-txt-dir-rtl",
    textDirectionLtr: "slider-txt-dir-ltr",
    base: "slider-base",
    connects: "slider-connects",
    connect: "slider-connect",
    origin: "slider-origin",
    handle: "slider-handle",
    handleLower: "slider-handle-lower",
    handleUpper: "slider-handle-upper",
    touchArea: "slider-touch-area",
    tooltip: "slider-tooltip",
    tooltipTop: "slider-tooltip-top",
    tooltipBottom: "slider-tooltip-bottom",
    tooltipLeft: "slider-tooltip-left",
    tooltipRight: "slider-tooltip-right",
    tooltipHidden: "slider-tooltip-hidden",
    active: "slider-active",
    draggable: "slider-draggable",
    tap: "slider-state-tap",
    drag: "slider-state-drag",
    // Unimplemented
    pips: "slider-pips",
    pipsHorizontal: "slider-pips-horizontal",
    pipsVertical: "slider-pips-vertical",
    marker: "slider-marker",
    markerHorizontal: "slider-marker-horizontal",
    markerVertical: "slider-marker-vertical",
    markerNormal: "slider-marker-normal",
    markerLarge: "slider-marker-large",
    markerSub: "slider-marker-sub",
    value: "slider-value",
    valueHorizontal: "slider-value-horizontal",
    valueVertical: "slider-value-vertical",
    valueNormal: "slider-value-normal",
    valueLarge: "slider-value-large",
    valueSub: "slider-value-sub",
    ...classes_.value
  }));
  const classList = computed(() => {
    const classList2 = { ...classes.value };
    Object.keys(classList2).forEach((className) => {
      classList2[className] = Array.isArray(classList2[className]) ? classList2[className].filter((c2) => c2 !== null).join(" ") : classList2[className];
    });
    if (showTooltip.value !== "always") {
      classList2.target += ` ${showTooltip.value === "drag" ? classList2.tooltipDrag : classList2.tooltipFocus}`;
    }
    if (orientation.value === "horizontal") {
      classList2.tooltip += tooltipPosition.value === "bottom" ? ` ${classList2.tooltipBottom}` : ` ${classList2.tooltipTop}`;
    }
    if (orientation.value === "vertical") {
      classList2.tooltip += tooltipPosition.value === "right" ? ` ${classList2.tooltipRight}` : ` ${classList2.tooltipLeft}`;
    }
    return classList2;
  });
  return {
    classList
  };
}
function useTooltip(props, context, dependencies) {
  const { format, step } = toRefs(props);
  const value = dependencies.value;
  const classList = dependencies.classList;
  const tooltipFormat = computed(() => {
    if (!format || !format.value) {
      return wnumb({ decimals: step.value >= 0 ? 0 : 2 });
    }
    if (typeof format.value == "function") {
      return { to: format.value };
    }
    return wnumb({ ...format.value });
  });
  const tooltipsFormat = computed(() => {
    return Array.isArray(value.value) ? value.value.map((v2) => tooltipFormat.value) : tooltipFormat.value;
  });
  const tooltipsMerge = (slider, threshold, separator) => {
    var textIsRtl = getComputedStyle(slider).direction === "rtl";
    var isRtl = slider.noUiSlider.options.direction === "rtl";
    var isVertical = slider.noUiSlider.options.orientation === "vertical";
    var tooltips = slider.noUiSlider.getTooltips();
    var origins = slider.noUiSlider.getOrigins();
    tooltips.forEach(function(tooltip, index) {
      if (tooltip) {
        origins[index].appendChild(tooltip);
      }
    });
    slider.noUiSlider.on("update", function(values, handle, unencoded, tap, positions) {
      var pools = [[]];
      var poolPositions = [[]];
      var poolValues = [[]];
      var atPool = 0;
      if (tooltips[0]) {
        pools[0][0] = 0;
        poolPositions[0][0] = positions[0];
        poolValues[0][0] = tooltipFormat.value.to(parseFloat(values[0]));
      }
      for (var i2 = 1; i2 < values.length; i2++) {
        if (!tooltips[i2] || values[i2] - values[i2 - 1] > threshold) {
          atPool++;
          pools[atPool] = [];
          poolValues[atPool] = [];
          poolPositions[atPool] = [];
        }
        if (tooltips[i2]) {
          pools[atPool].push(i2);
          poolValues[atPool].push(tooltipFormat.value.to(parseFloat(values[i2])));
          poolPositions[atPool].push(positions[i2]);
        }
      }
      pools.forEach(function(pool, poolIndex) {
        var handlesInPool = pool.length;
        for (var j2 = 0; j2 < handlesInPool; j2++) {
          var handleNumber = pool[j2];
          if (j2 === handlesInPool - 1) {
            var offset = 0;
            poolPositions[poolIndex].forEach(function(value2) {
              offset += 1e3 - value2;
            });
            var direction = isVertical ? "bottom" : "right";
            var last = isRtl ? 0 : handlesInPool - 1;
            var lastOffset = 1e3 - poolPositions[poolIndex][last];
            offset = (textIsRtl && !isVertical ? 100 : 0) + offset / handlesInPool - lastOffset;
            tooltips[handleNumber].innerHTML = poolValues[poolIndex].join(separator);
            tooltips[handleNumber].style.display = "block";
            tooltips[handleNumber].style[direction] = offset + "%";
            classList.value.tooltipHidden.split(" ").forEach((c2) => {
              if (tooltips[handleNumber].classList.contains(c2)) {
                tooltips[handleNumber].classList.remove(c2);
              }
            });
          } else {
            tooltips[handleNumber].style.display = "none";
            classList.value.tooltipHidden.split(" ").forEach((c2) => {
              tooltips[handleNumber].classList.add(c2);
            });
          }
        }
      });
    });
  };
  return {
    tooltipFormat,
    tooltipsFormat,
    tooltipsMerge
  };
}
function arraysEqual(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }
  const array2Sorted = array2.slice().sort();
  return array1.length === array2.length && array1.slice().sort().every(function(value, index) {
    return value === array2Sorted[index];
  });
}
function useSlider(props, context, dependencies) {
  const {
    orientation,
    direction,
    tooltips,
    step,
    min,
    max,
    merge,
    id,
    disabled,
    options,
    classes,
    format,
    lazy,
    ariaLabelledby,
    aria
  } = toRefs(props);
  const value = dependencies.value;
  const initialValue = dependencies.initialValue;
  const tooltipsFormat = dependencies.tooltipsFormat;
  const tooltipsMerge = dependencies.tooltipsMerge;
  const tooltipFormat = dependencies.tooltipFormat;
  const classList = dependencies.classList;
  const slider = ref(null);
  const slider$ = ref(null);
  const inited = ref(false);
  const defaultOptions = computed(() => {
    let defaultOptions2 = {
      cssPrefix: "",
      cssClasses: classList.value,
      orientation: orientation.value,
      direction: direction.value,
      tooltips: tooltips.value ? tooltipsFormat.value : false,
      connect: "lower",
      start: isNullish(value.value) ? min.value : value.value,
      range: {
        "min": min.value,
        "max": max.value
      }
    };
    if (step.value > 0) {
      defaultOptions2.step = step.value;
    }
    if (Array.isArray(value.value)) {
      defaultOptions2.connect = true;
    }
    if (ariaLabelledby && ariaLabelledby.value || aria && Object.keys(aria.value).length) {
      let handles = Array.isArray(value.value) ? value.value : [value.value];
      defaultOptions2.handleAttributes = handles.map((h2) => Object.assign({}, aria.value, ariaLabelledby && ariaLabelledby.value ? {
        "aria-labelledby": ariaLabelledby.value
      } : {}));
    }
    if (format.value) {
      defaultOptions2.ariaFormat = tooltipFormat.value;
    }
    return defaultOptions2;
  });
  const sliderProps = computed(() => {
    let sliderProps2 = {
      id: id && id.value ? id.value : void 0
    };
    if (disabled.value) {
      sliderProps2.disabled = true;
    }
    return sliderProps2;
  });
  const isRange = computed(() => {
    return Array.isArray(value.value);
  });
  const reset = () => {
    updateValue(initialValue.value);
  };
  const getSliderValue = () => {
    let sliderValue = slider$.value.get();
    return Array.isArray(sliderValue) ? sliderValue.map((v2) => parseFloat(v2)) : parseFloat(sliderValue);
  };
  const update = (val, triggerChange = true) => {
    slider$.value.set(val, triggerChange);
  };
  const updateValue = (val) => {
    context.emit("input", val);
    context.emit("update:modelValue", val);
    context.emit("update", val);
  };
  const init = () => {
    slider$.value = nouislider.create(slider.value, Object.assign({}, defaultOptions.value, options.value));
    if (tooltips.value && isRange.value && merge.value >= 0) {
      tooltipsMerge(slider.value, merge.value, " - ");
    }
    slider$.value.on("set", () => {
      const sliderValue = getSliderValue();
      context.emit("change", sliderValue);
      context.emit("set", sliderValue);
      if (lazy.value) {
        updateValue(sliderValue);
      }
    });
    slider$.value.on("update", () => {
      if (!inited.value) {
        return;
      }
      const sliderValue = getSliderValue();
      if (isRange.value && arraysEqual(value.value, sliderValue) || !isRange.value && value.value == sliderValue) {
        context.emit("update", sliderValue);
        return;
      }
      if (!lazy.value) {
        updateValue(sliderValue);
      }
    });
    slider$.value.on("start", () => {
      context.emit("start", getSliderValue());
    });
    slider$.value.on("end", () => {
      context.emit("end", getSliderValue());
    });
    slider$.value.on("slide", () => {
      context.emit("slide", getSliderValue());
    });
    slider$.value.on("drag", () => {
      context.emit("drag", getSliderValue());
    });
    slider.value.querySelectorAll("[data-handle]").forEach((handle) => {
      handle.onblur = () => {
        if (!slider.value) {
          return;
        }
        classList.value.focused.split(" ").forEach((c2) => {
          slider.value.classList.remove(c2);
        });
      };
      handle.onfocus = () => {
        classList.value.focused.split(" ").forEach((c2) => {
          slider.value.classList.add(c2);
        });
      };
    });
    inited.value = true;
  };
  const destroy = () => {
    slider$.value.off();
    slider$.value.destroy();
    slider$.value = null;
  };
  const refresh = (n2, o2) => {
    inited.value = false;
    destroy();
    init();
  };
  onMounted(init);
  onUnmounted(destroy);
  watch(isRange, refresh, { immediate: false });
  watch(min, refresh, { immediate: false });
  watch(max, refresh, { immediate: false });
  watch(step, refresh, { immediate: false });
  watch(orientation, refresh, { immediate: false });
  watch(direction, refresh, { immediate: false });
  watch(tooltips, refresh, { immediate: false });
  watch(merge, refresh, { immediate: false });
  watch(format, refresh, { immediate: false, deep: true });
  watch(options, refresh, { immediate: false, deep: true });
  watch(classes, refresh, { immediate: false, deep: true });
  watch(value, (value2, old) => {
    if (!old) {
      return;
    }
    if (
      // If both old and new has multiple handles
      // and the number of handles decreased
      typeof old === "object" && typeof value2 === "object" && value2 && Object.keys(old) > Object.keys(value2) || // If the old had multiple handles but
      // if it decreased to single
      typeof old === "object" && typeof value2 !== "object" || // Or has no value at all
      isNullish(value2)
    ) {
      refresh();
    }
  }, { immediate: false });
  watch(value, (newValue) => {
    if (isNullish(newValue)) {
      update(min.value, false);
      return;
    }
    let sliderValue = getSliderValue();
    if (isRange.value && !Array.isArray(sliderValue)) {
      sliderValue = [sliderValue];
    }
    if (isRange.value && !arraysEqual(newValue, sliderValue) || !isRange.value && newValue != sliderValue) {
      update(newValue, false);
    }
  }, { deep: true });
  return {
    slider,
    slider$,
    isRange,
    sliderProps,
    init,
    destroy,
    refresh,
    update,
    reset
  };
}
const valueProps = {
  value: {
    validator: function(p2) {
      return (p3) => typeof p3 === "number" || p3 instanceof Array || p3 === null || p3 === void 0 || p3 === false;
    },
    required: false
  },
  modelValue: {
    validator: function(p2) {
      return (p3) => typeof p3 === "number" || p3 instanceof Array || p3 === null || p3 === void 0 || p3 === false;
    },
    required: false
  }
};
const _sfc_main$k = {
  name: "Slider",
  emits: [
    "input",
    "update:modelValue",
    "start",
    "slide",
    "drag",
    "update",
    "change",
    "set",
    "end"
  ],
  props: {
    ...valueProps,
    id: {
      type: [String, Number],
      required: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    min: {
      type: Number,
      required: false,
      default: 0
    },
    max: {
      type: Number,
      required: false,
      default: 100
    },
    step: {
      type: Number,
      required: false,
      default: 1
    },
    orientation: {
      type: String,
      required: false,
      default: "horizontal"
    },
    direction: {
      type: String,
      required: false,
      default: "ltr"
    },
    tooltips: {
      type: Boolean,
      required: false,
      default: true
    },
    options: {
      type: Object,
      required: false,
      default: () => ({})
    },
    merge: {
      type: Number,
      required: false,
      default: -1
    },
    format: {
      type: [Object, Function, Boolean],
      required: false,
      default: null
    },
    classes: {
      type: Object,
      required: false,
      default: () => ({})
    },
    showTooltip: {
      type: String,
      required: false,
      default: "always"
    },
    tooltipPosition: {
      type: String,
      required: false,
      default: null
    },
    lazy: {
      type: Boolean,
      required: false,
      default: true
    },
    ariaLabelledby: {
      type: String,
      required: false,
      default: void 0
    },
    aria: {
      required: false,
      type: Object,
      default: () => ({})
    }
  },
  setup(props, context) {
    const value = useValue(props);
    const classes = useClasses(props);
    const tooltip = useTooltip(props, context, {
      value: value.value,
      classList: classes.classList
    });
    const slider = useSlider(props, context, {
      value: value.value,
      initialValue: value.initialValue,
      tooltipFormat: tooltip.tooltipFormat,
      tooltipsFormat: tooltip.tooltipsFormat,
      tooltipsMerge: tooltip.tooltipsMerge,
      classList: classes.classList
    });
    return {
      ...classes,
      ...tooltip,
      ...slider
    };
  }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps(_ctx.sliderProps, { ref: "slider" }, _attrs))}></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/slider/src/Slider.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Slider = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k]]);
const SliderForm_vue_vue_type_style_index_0_lang = "";
const default_css_vue_type_style_index_1_src_true_lang = "";
const SliderForm_vue_vue_type_style_index_2_lang = "";
const _sfc_main$j = {
  components: { Slider },
  props: {
    value: {
      type: Array,
      default: [5e4, 2e5]
    }
  },
  data: () => ({
    value: [5e3, 1e5],
    min: 5e3,
    max: 1e6,
    format: function(value) {
      return `${Math.floor(value / 1e3)} 000 ₽`;
    }
  }),
  methods: {
    updateBudget(value) {
      this.$emit("update:budget", value);
    }
  }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Slider = resolveComponent("Slider");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-price" }, _attrs))}><div class="inputbox"><span>Бюджет проекта</span>`);
  _push(ssrRenderComponent(_component_Slider, {
    value: $props.value,
    min: _ctx.min,
    max: _ctx.max,
    onInput: $options.updateBudget,
    format: _ctx.format
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/SliderForm.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const SliderForm = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$i = {
  props: ["modelValue"],
  methods: {
    onChange(event) {
      this.$emit("uploadFile", event.target.files);
    }
  }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "order__upload" }, _attrs))}><label class="file-input__label" for="myfile"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8545 9.96878L10.6797 11.1438L7.38924 14.4342C6.10061 15.7225 4.00324 15.7225 2.71384 14.4337C1.42467 13.1449 1.42503 11.0477 2.71384 9.75877L4.5944 7.87803L10.198 2.27443C11.0792 1.39327 12.5139 1.39327 13.3953 2.27443C14.2765 3.15595 14.2765 4.59019 13.3953 5.47175L9.78949 9.07723L8.36797 10.4986L6.51495 12.3518C6.05288 12.8138 5.30105 12.8133 4.83935 12.3518C4.37728 11.8897 4.37728 11.1377 4.83935 10.6756L7.52566 7.98948L8.11352 7.40126L10.6249 4.89022L9.84196 4.10745L6.74307 7.20635L4.05639 9.8937C3.16319 10.7865 3.16301 12.2409 4.05639 13.1348C4.95012 14.0282 6.40431 14.0282 7.2975 13.1348L8.9874 11.4447L10.5722 9.85996L14.1775 6.2543C15.4907 4.94148 15.4907 2.80502 14.1775 1.49161C12.8646 0.178416 10.7278 0.178416 9.41477 1.49161L6.65956 4.24718L3.91141 6.99533L1.93138 8.97572C0.210902 10.696 0.210902 13.4958 1.93138 15.2162C3.65186 16.9369 6.45126 16.9369 8.17188 15.2162L12.637 10.7511L14.8207 8.56753L14.0383 7.78457L11.8545 9.96878Z" fill="#00779F"></path></svg> Прикрепить файл </label><input class="input file-input" id="myfile" multiple type="file"></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/FileUploader.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const FileUploader = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i]]);
const messageMixin = {
  methods: {
    message(mes, status = null, dismissible = false, duration = 3e3) {
      typeof mes === "string" && (mes = {
        title: mes
      });
      const messages = document.getElementById("messages");
      messages.style.display = "block";
      const childCount = messages.childElementCount;
      const interval = setInterval(() => {
        if (messages.childElementCount <= childCount) {
          messages.style.display = "none";
          clearInterval(interval);
        }
      }, 500);
      const messageText = document.createElement("div");
      const messageTitle = document.createElement("div");
      const messageClose = document.createElement("span");
      const messageContent = document.createElement("div");
      const message = document.createElement("div");
      const messageTextInner = document.createElement("div");
      message.classList.add("message");
      status && message.classList.add(status);
      messageTitle.classList.add("message__title");
      messageTitle.textContent = mes.title;
      messageClose.classList.add("message__close");
      messageTitle.appendChild(messageClose);
      if (typeof mes.content !== "undefined") {
        messageContent.classList.add("message__content");
        messageContent.textContent = mes.content;
        messageTextInner.appendChild(messageContent);
      }
      messageTextInner.classList.add("message__text-inner");
      messageTextInner.appendChild(messageTitle);
      messageText.classList.add("message__text");
      messageText.appendChild(messageTextInner);
      message.appendChild(messageText);
      messages.insertBefore(message, messages.childNodes[0]);
      const currentMessage = messages.children[0];
      const mesWidth = currentMessage.querySelector(".message__text").offsetWidth;
      const mesHeight = currentMessage.querySelector(".message__text").offsetHeight;
      gsap.to(currentMessage, {
        height: mesHeight,
        duration: 0.1,
        onComplete: () => {
          gsap.to(currentMessage, {
            marginRight: 0,
            duration: 0.2,
            onComplete: () => {
              gsap.to(currentMessage, {
                width: mesWidth,
                opacity: 1,
                duration: 0.5,
                onComplete: () => {
                  if (!dismissible) {
                    setTimeout(() => {
                      gsap.to(currentMessage, {
                        width: 0,
                        opacity: 0,
                        duration: 0.5,
                        onComplete: () => {
                          gsap.to(currentMessage, {
                            height: 0,
                            duration: 0.1,
                            onComplete: () => {
                              currentMessage.remove();
                            }
                          });
                        }
                      });
                    }, duration);
                  }
                  messageClose.addEventListener("click", () => {
                    clearTimeout(handler);
                    gsap.to(currentMessage, {
                      width: 0,
                      opacity: 0,
                      duration: 0.5,
                      onComplete: () => {
                        gsap.to(currentMessage, {
                          height: 0,
                          duration: 0.1,
                          onComplete: () => {
                            currentMessage.remove();
                          }
                        });
                      }
                    });
                  });
                }
              });
            }
          });
        }
      });
      let handler = null;
    }
  }
};
const _sfc_main$h = {
  directives: { maska: vMaska },
  components: {
    TheButton,
    BudgetDropdown,
    InputBox,
    InputTextareaVue,
    FileUploader,
    SliderForm
  },
  mixins: [messageMixin],
  data() {
    return {
      form: {
        name: "",
        tel: "",
        company: "",
        email: "",
        price: [5e4, 2e5],
        budget: "",
        desc: "",
        file: null
      },
      formName: "orderForm",
      filesToUploadShow: false
    };
  },
  methods: {
    updateBudget(value) {
      console.log(value);
      this.form.price = value;
    },
    async fetchForm(data) {
      var _a;
      let pages = window.location.href;
      let formName = data.form;
      const formData = new FormData();
      formData.append("name", data.data.name);
      formData.append("tel", data.data.tel);
      formData.append("company", data.data.company);
      formData.append("email", data.data.email);
      formData.append("price", data.data.price);
      formData.append("desc", data.data.desc);
      if ((_a = data.data.file) == null ? void 0 : _a.length) {
        for (let i2 = 0; i2 < data.data.file.length; i2++) {
          formData.append("file[]", data.data.file[i2]);
        }
      }
      formData.append("pages", pages);
      try {
        const response = await axios.post("/api/form/" + formName, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then((res) => {
          console.log(res);
          if (res.data.status) {
            this.showMessage(
              {
                title: "Отправлено",
                content: "Ваша форма успешно отправлена"
              },
              "success",
              false,
              3e3
            );
          }
        });
      } catch (error) {
        console.error(error);
        this.showMessage(
          { title: "Ошибка", content: "Ваша форма не отправлена" },
          "error",
          true,
          3e3
        );
      }
    },
    onSubmit(e2) {
      if (!this.form.name || !this.form.email || !this.form.tel) {
        console.log(this.name);
        this.showMessage(
          { title: "Не отправлено", content: "Заполните обязательные поля" },
          "error",
          false,
          3e3
        );
        const requiredInputs = document.querySelectorAll("[data-input]");
        console.log(requiredInputs);
        requiredInputs.forEach((el) => {
          if (!el.querySelector("input").value) {
            el.classList.add("input--error");
          }
        });
      } else {
        this.fetchForm({ data: this.form, form: this.formName });
      }
    },
    showMessage(mess, status, flag, duration) {
      this.message(mess, status, flag, duration);
    },
    clearError(event, id) {
      console.log(123);
      document.getElementById(id).classList.remove("input--error");
    },
    uploadFile(event) {
      this.form.file = event;
      let ds = this.$refs.fileDisplay;
      ds.innerText = "";
      for (let i2 = 0; i2 < event.length; i2++) {
        let file_name = document.createElement("div");
        file_name.innerText = event[i2].name + " : " + event[i2].size + " kB";
        ds.append(file_name);
      }
      this.filesToUploadShow = true;
    },
    delFiles() {
      console.log(this.form.file);
      this.form.file = null;
      this.filesToUploadShow = false;
    }
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InputBox = resolveComponent("InputBox");
  const _component_slider_form = resolveComponent("slider-form");
  const _component_BudgetDropdown = resolveComponent("BudgetDropdown");
  const _component_InputTextareaVue = resolveComponent("InputTextareaVue");
  const _component_file_uploader = resolveComponent("file-uploader");
  const _component_the_button = resolveComponent("the-button");
  const _directive_maska = resolveDirective("maska");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "form" }, _attrs))}><form id="myForm"><div class="form__wrapper">`);
  _push(ssrRenderComponent(_component_InputBox, {
    value: $data.form.name,
    onDich: ($event) => $data.form.name = $event,
    class: { "has-value": $data.form.name !== "" },
    label: "Ваше имя",
    id: "name",
    onClick: ($event) => $options.clearError($event, "name"),
    "data-input": "name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_InputBox, {
    value: $data.form.company,
    onDich: ($event) => $data.form.company = $event,
    class: { "has-value": $data.form.company !== "" },
    label: "Компания"
  }, null, _parent));
  _push(ssrRenderComponent(_component_InputBox, mergeProps({
    value: $data.form.tel,
    onDich: ($event) => $data.form.tel = $event,
    class: { "has-value": $data.form.tel !== "" },
    label: "Телефон",
    mask: "+1 ### ###-##-##",
    id: "tel",
    onClick: ($event) => $options.clearError($event, "tel"),
    "data-input": "tel"
  }, ssrGetDirectiveProps(_ctx, _directive_maska)), null, _parent));
  _push(ssrRenderComponent(_component_InputBox, {
    value: $data.form.email,
    onDich: ($event) => $data.form.email = $event,
    class: { "has-value": $data.form.email !== "" },
    label: "Email",
    id: "email",
    onClick: ($event) => $options.clearError($event, "email"),
    "data-input": "email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_slider_form, {
    value: $data.form.price,
    "onUpdate:budget": $options.updateBudget
  }, null, _parent));
  _push(ssrRenderComponent(_component_BudgetDropdown, {
    options: [1e3, 5e3, 1e4],
    modelValue: $data.form.price,
    "onUpdate:modelValue": ($event) => $data.form.price = $event,
    placeholder: "Бюджет проекта"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BudgetDropdown, {
    options: [1e3, 5e3, 1e4],
    modelValue: $data.form.where,
    "onUpdate:modelValue": ($event) => $data.form.where = $event,
    placeholder: "Откуда узнали о нас"
  }, null, _parent));
  _push(ssrRenderComponent(_component_InputTextareaVue, {
    value: $data.form.desc,
    onTextarea: ($event) => $data.form.desc = $event,
    placeholder: "Откуда узнали о нас"
  }, null, _parent));
  _push(`<div class="file"><span>В чём заключается задача? Какие сроки реализации?<br> Несколько слов о компании. </span>`);
  _push(ssrRenderComponent(_component_file_uploader, { onUploadFile: $options.uploadFile }, null, _parent));
  _push(`</div><div class="file-display--container" style="${ssrRenderStyle($data.filesToUploadShow == true ? null : { display: "none" })}"><div class="mb-2 small">Список файлов:</div><div class="file-display small" id="file_display"></div><div class="btn-del"><div class="line-1"></div><div class="line-2"></div></div></div><div class="subm">`);
  _push(ssrRenderComponent(_component_the_button, {
    onClick: $options.onSubmit,
    class: "button button--orange first__btn order__btn",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Отправить</span>`);
      } else {
        return [
          createVNode("span", null, "Отправить")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="sogl"> Нажимая на кнопку «Отправить», вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности. </p></div></div></form></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Order/TheOrderForm.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const TheOrderForm = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$g = {
  props: {
    order: Array,
    contact: Array
  },
  components: {
    TheOrderContent,
    TheOrderForm,
    TheSectionCaption
  },
  data() {
    console.log(this.contact[0]);
    return {
      title: this.order[0].title,
      desc: this.order[0].desc,
      phone: this.contact.phone.value,
      email: this.contact.email.value,
      telegram: this.contact.telegram.value,
      whatsapp: this.contact.whatsapp.value,
      address: this.contact.address.value,
      worktime: this.contact.worktime.value,
      sectionCaption: "contacts"
    };
  },
  methods: {
    rowOrder() {
      const state = {
        title: this.title,
        desc: this.desc
      };
      return Object.keys(state).reduce((obj, key) => {
        obj[key] = state[key];
        return obj;
      }, {});
    },
    rowContact() {
      const state = {
        phone: this.phone,
        email: this.email,
        telegram: this.telegram,
        whatsapp: this.whatsapp,
        address: this.address,
        worktime: this.worktime
      };
      return Object.keys(state).reduce((obj, key) => {
        obj[key] = state[key];
        return obj;
      }, {});
    }
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_order_content = resolveComponent("the-order-content");
  const _component_the_order_form = resolveComponent("the-order-form");
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "order",
    class: "order"
  }, _attrs))}><div class="container order-container"><div class="order-container__wrapper"><div class="row"><div class="col-6">`);
  _push(ssrRenderComponent(_component_the_order_content, {
    row: $options.rowOrder(),
    contact: $options.rowContact()
  }, null, _parent));
  _push(`</div><div class="col-6">`);
  _push(ssrRenderComponent(_component_the_order_form, null, null, _parent));
  _push(`</div></div></div></div></section>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/infusions/orderComponent.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const orderComponent = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const contactComponent_vue_vue_type_style_index_0_scoped_0c184c24_lang = "";
const _sfc_main$f = {
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      contact: "contact/fetchInfo"
    })
  },
  mounted() {
    this.contact();
  },
  computed: {
    ...mapState({
      telegram: (state) => state.contact.telegram,
      whatsapp: (state) => state.contact.whatsapp,
      phone: (state) => state.contact.phone,
      email: (state) => state.contact.email,
      address: (state) => state.contact.address,
      worktime: (state) => state.contact.worktime,
      map: (state) => state.contact.map
    })
  },
  watch: {}
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "contact",
    id: "contact"
  }, _attrs))} data-v-0c184c24><div class="container" data-v-0c184c24><div class="wrapper" data-v-0c184c24><ul class="contact-info__list list-reset" data-v-0c184c24><li class="contact-info__item-tel contact-info__item" data-v-0c184c24><div class="contact-info__item-wrap" data-v-0c184c24><div class="img-container" data-v-0c184c24><svg width="26" height="40" viewBox="0 0 26 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0c184c24><path d="M1.91323 33.3778H23.6684V37.0167C23.6684 37.6989 23.2437 38.098 22.8516 38.098L2.73015 38.0976C2.33776 38.0976 1.91307 37.6986 1.91307 37.0164L1.91323 33.3778ZM2.73064 1.90083H22.8521C23.2442 1.90083 23.6689 2.30304 23.6689 2.98335L23.6685 31.4775H1.9134V2.98335C1.9134 2.30245 2.3381 1.90083 2.73081 1.90083H2.73064ZM2.73064 0C1.15728 0 0 1.41405 0 2.98335V37.0166C0 38.5872 1.1572 40 2.73064 40H22.8521C24.4255 40 25.5824 38.5868 25.5824 37.0166L25.5821 2.98335C25.5821 1.41413 24.4255 0 22.8518 0H2.73064Z" fill="black" data-v-0c184c24></path><path d="M10.4375 34.7882C9.90483 34.7803 9.4668 35.2078 9.4668 35.737C9.4668 36.2691 9.9048 36.6976 10.4375 36.689H13.6923C14.2244 36.6982 14.6621 36.2694 14.6621 35.737C14.6621 35.2078 14.2247 34.7806 13.6923 34.7882H10.4375Z" fill="black" data-v-0c184c24></path></svg></div><div class="title" data-v-0c184c24>Телефон</div><div class="phone" data-v-0c184c24><a href="tel:{{phone}}" data-v-0c184c24>${ssrInterpolate(_ctx.phone)}</a></div><div class="btn-container" data-v-0c184c24><a target="_blank" href="{{whatsapp}}" class="btn__web" data-v-0c184c24><div class="svg-wrapper-1" data-v-0c184c24><div class="svg-wrapper" data-v-0c184c24><svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0c184c24><path fill-rule="evenodd" clip-rule="evenodd" d="M10.1449 14.7766C10.112 13.7045 10.425 12.6499 11.0378 11.7694C11.6122 13.3869 12.3245 14.9522 13.1663 16.4483C12.9473 16.7296 12.8092 17.0656 12.7674 17.4199C12.7254 17.7741 12.7813 18.1329 12.9288 18.4577C14.8262 22.8936 18.3603 26.4278 22.7959 28.3255C23.121 28.4731 23.4801 28.529 23.8346 28.4872C24.1891 28.4454 24.5255 28.3071 24.8068 28.0877C26.3107 28.9221 27.8812 29.63 29.5022 30.2044C28.6179 30.8253 27.5564 31.1429 26.4764 31.1098C17.6859 29.9661 11.2881 23.5683 10.1445 14.777L10.1449 14.7766ZM20.7454 0.979866H19.826C15.2402 1.08622 10.8303 2.76565 7.33588 5.73691C3.84127 8.70839 1.47415 12.7908 0.63198 17.2995C-0.21048 21.8084 0.523032 26.4701 2.70913 30.5023L0.325852 39.397C0.225263 39.7725 0.304812 40.1732 0.541153 40.4815C0.777489 40.7899 1.14353 40.9712 1.53207 40.9717C1.64159 40.9712 1.75024 40.9562 1.85573 40.9271L10.7518 38.5438L10.7515 38.5441C14.309 40.4743 18.3682 41.2795 22.3931 40.8536C26.418 40.4273 30.2186 38.7896 33.2931 36.1574C36.3675 33.5248 38.5703 30.0216 39.6111 26.1103C40.6516 22.1992 40.4807 18.0642 39.1212 14.2518C37.7613 10.4399 35.2767 7.13023 31.9959 4.76031C28.7148 2.3906 24.7919 1.07231 20.7454 0.979492L20.7454 0.979866ZM15.226 14.0831L13.6673 10.8842L13.3719 10.8753C13.8495 12.2299 14.4328 13.545 15.1167 14.808C15.3067 14.6152 15.3508 14.3218 15.226 14.0817L15.226 14.0831ZM27.1708 26.0279C26.9313 25.9034 26.6388 25.9469 26.4457 26.1357C27.7112 26.8081 29.0255 27.3854 30.3772 27.8624L30.368 27.5851L27.1691 26.0264L27.1708 26.0279ZM31.7549 25.4823L28.2655 23.7824V23.7827C27.623 23.4654 26.8912 23.378 26.1923 23.5357C25.4934 23.6933 24.8699 24.0862 24.4258 24.6485L23.4485 25.8743C19.8611 24.2646 16.9896 21.3936 15.3795 17.8068L16.6053 16.8294C17.1676 16.3853 17.5604 15.7616 17.7181 15.0627C17.8755 14.3638 17.7884 13.6317 17.4714 12.9892L15.7732 9.50036C15.6167 9.17929 15.3754 8.90721 15.0757 8.71324C14.7757 8.51927 14.4284 8.4109 14.0716 8.39995L12.2394 8.33943C11.5926 8.31349 10.9565 8.50861 10.4355 8.89251C8.60902 10.2166 7.64349 12.2779 7.64349 14.8543V14.8546C7.64349 14.9065 7.64695 14.9583 7.65329 15.0099C8.19686 19.7557 10.3175 24.1812 13.6762 27.5782C17.0731 30.9363 21.4987 33.0569 26.2444 33.6005C26.296 33.6066 26.3479 33.6094 26.4001 33.6094C28.977 33.6094 31.0375 32.6454 32.3639 30.8184H32.3636C32.7466 30.2964 32.9414 29.6603 32.9164 29.0132L32.8573 27.1827C32.8458 26.8259 32.7371 26.4789 32.5431 26.1794C32.3489 25.88 32.0765 25.639 31.7554 25.4828L31.7549 25.4823ZM32.6565 33.3366V33.3368C35.7496 30.2425 37.5711 26.1015 37.7619 21.7307C37.9524 17.3593 36.4981 13.0759 33.6857 9.72391C30.8733 6.37222 26.9071 4.1959 22.5694 3.62437C18.2315 3.05284 13.8372 4.1276 10.2528 6.63621C6.66821 9.14515 4.15411 12.9063 3.20584 17.1777C2.25758 21.4491 2.94443 25.921 5.13086 29.7105C5.29687 29.9976 5.34154 30.3391 5.25565 30.6593L3.30069 37.9558L10.5963 36.0009C10.7021 35.9721 10.8111 35.9571 10.9209 35.9565C11.1402 35.9568 11.3558 36.0147 11.5457 36.1248C14.8821 38.0452 18.7581 38.8127 22.5741 38.3089C26.3904 37.8049 29.9343 36.0574 32.6574 33.3369L32.6565 33.3366Z" fill="black" data-v-0c184c24></path></svg></div></div><span data-v-0c184c24>WhatsApp</span></a><a target="_blank" href="{{telegram}}" class="btn__web" data-v-0c184c24><div class="svg-wrapper-1" data-v-0c184c24><div class="svg-wrapper" data-v-0c184c24><svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0c184c24><path d="M38.6042 1.31828C37.3445 0.0874662 35.5282 -0.319385 33.863 0.258677L3.11071 10.9146C1.5859 11.4433 0.465397 12.6988 0.11329 14.274C-0.238742 15.8485 0.240894 17.4608 1.3954 18.5878L22.2206 38.9271C23.0987 39.7847 24.2474 40.2448 25.437 40.2448C25.8114 40.2448 26.1901 40.1987 26.5662 40.1054C28.1317 39.7161 29.359 38.5658 29.8499 37.0301L39.777 6.03567C40.314 4.35729 39.8651 2.54998 38.6042 1.31818V1.31828ZM37.0415 5.15886L27.1144 36.1541C26.925 36.744 26.4719 37.1681 25.8717 37.3182C25.267 37.4676 24.671 37.3048 24.2263 36.8723L14.5094 27.3826L28.1504 13.7416C28.7115 13.1805 28.7115 12.2716 28.1504 11.7105C27.5893 11.1495 26.6804 11.1495 26.1193 11.7105L12.4537 25.3762L3.39986 16.5341C2.95646 16.1007 2.7798 15.506 2.91607 14.9012C3.05072 14.2959 3.46463 13.8329 4.04945 13.6297L34.8017 2.97379C35.4442 2.75161 36.1117 2.90293 36.5971 3.37487C37.0809 3.84776 37.2464 4.51556 37.0402 5.16002L37.0415 5.15886Z" fill="black" data-v-0c184c24></path></svg></div></div><span data-v-0c184c24>Telegram</span></a></div><div class="mail" data-v-0c184c24><a href="mailto:123@mail.com" data-v-0c184c24>${ssrInterpolate(_ctx.email)}</a></div></div></li><li class="contact-info__item-address contact-info__item" data-v-0c184c24><div class="contact-info__item-wrap" data-v-0c184c24><div class="img-container" data-v-0c184c24><svg width="34" height="41" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0c184c24><path d="M16.7153 2.62773C22.3875 2.62773 26.9908 7.20071 26.9908 12.8433C26.9908 15.0364 26.0482 18.3649 24.0547 20.6783L16.7153 29.1749L9.37864 20.6807C7.3826 18.3673 6.44002 15.0386 6.44002 12.8432C6.44034 7.20038 11.043 2.62765 16.7155 2.62765L16.7153 2.62773ZM16.7153 0.670979C9.97645 0.670979 4.47792 6.14011 4.47792 12.8428C4.47792 15.5564 5.50223 19.1871 7.88515 21.9502V21.9533L11.3066 25.9134H5.42876C5.00443 25.9153 4.62725 26.1881 4.49623 26.5887L0.335569 39.3964C0.12989 40.0264 0.604846 40.6709 1.27061 40.6709H32.161C32.83 40.6709 33.3017 40.0263 33.0989 39.3964L28.9351 26.5887C28.8041 26.1859 28.4269 25.9134 28.0007 25.9134H24.2662C22.8888 25.8454 22.8888 27.9385 24.2662 27.8677H27.2868L30.8099 38.7142H2.6242L6.14443 27.8677H12.9938L15.6278 30.9164H13.9001C13.3685 30.9063 12.929 31.3329 12.929 31.8645C12.929 32.396 13.3685 32.8261 13.9001 32.8156H19.5252C20.0599 32.8261 20.4994 32.3963 20.4994 31.8645C20.4994 31.3329 20.0593 30.907 19.5252 30.9164H17.8054L25.5452 21.9533V21.9501C27.9314 19.1871 28.9553 15.5564 28.9553 12.8427C28.956 6.14019 23.4543 0.670898 16.7155 0.670898L16.7153 0.670979Z" fill="black" data-v-0c184c24></path><path d="M18.8293 14.9443C17.6551 16.1126 15.779 16.1151 14.6051 14.9475C13.4309 13.7793 13.4309 11.9092 14.6051 10.74C15.7793 9.5721 17.6551 9.57461 18.8293 10.7432C20.0061 11.9111 20.0061 13.7746 18.8293 14.9422V14.9443ZM20.2219 16.3268C22.1474 14.4124 22.1474 11.2769 20.2219 9.35937C18.2939 7.44401 15.1417 7.44401 13.2175 9.35937C11.2895 11.2766 11.2895 14.4117 13.2175 16.3268C15.142 18.2421 18.2942 18.2421 20.2219 16.3268Z" fill="black" data-v-0c184c24></path></svg></div><div class="title" data-v-0c184c24>Адрес</div><div class="address" data-v-0c184c24><p data-v-0c184c24>${_ctx.$replaceNewLines(_ctx.address)}</p></div><div class="worktime" data-v-0c184c24><p data-v-0c184c24>${ssrInterpolate(_ctx.worktime)}</p></div></div></li></ul></div></div><div class="iframe" data-v-0c184c24>${_ctx.map}</div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/infusions/contactComponent.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const contactComponent = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f], ["__scopeId", "data-v-0c184c24"]]);
const _sfc_main$e = {
  props: {
    title: String
  },
  components: {
    Head,
    TheHeader,
    orderComponent,
    contactComponent,
    TheFooterVue: TheFooterVue$1
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_the_header = resolveComponent("the-header");
  const _component_contact_component = resolveComponent("contact-component");
  const _component_order_component = resolveComponent("order-component");
  const _component_the_footer_vue = resolveComponent("the-footer-vue");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
  _push(ssrRenderComponent(_component_the_header, null, null, _parent));
  _push(`<div class="content"><div class="container"><h1>${ssrInterpolate($props.title)}</h1></div>`);
  _push(ssrRenderComponent(_component_contact_component, null, null, _parent));
  _push(ssrRenderComponent(_component_order_component, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_the_footer_vue, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contact.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  data() {
    return {};
  },
  mounted() {
    let cont = document.querySelector(".animate-container");
    for (let i2 = 1; i2 <= 100; i2++) {
      let dot = document.createElement("div");
      dot.classList.add("element");
      cont.appendChild(dot);
    }
    let dotAll = document.querySelectorAll(".element");
    let animation = anime.timeline({
      targets: dotAll,
      easing: "easeInOutExpo",
      loop: true,
      delay: anime.stagger(40, { grid: [10, 10], from: "center" })
    });
    animation.add({
      rotateZ: 180,
      translateY: anime.stagger(-60, { grid: [10, 10], from: "center", axis: "y" }),
      translateX: anime.stagger(-60, { grid: [10, 10], from: "center", axis: "x" })
    }).add({
      rotateZ: 180,
      translateY: anime.stagger(0, { grid: [10, 10], from: "center", axis: "y" }),
      translateX: anime.stagger(0, { grid: [10, 10], from: "center", axis: "x" }),
      opacite: 1
    });
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "animate" }, _attrs))}><div class="animate-container"></div></section>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TheAnimateBg.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const TheAnimateBg = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const swiperBundle = "";
const effectFade_min = "";
const _sfc_main$c = {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    dataSlider: {
      type: Array,
      required: true
    }
  },
  setup(props, ctx) {
    const store2 = useStore();
    const slider = store2.state.services.slider;
    const swiper = ref();
    const countSwiper = ref(1);
    const isMoving = ref(false);
    const onSlideChange = () => {
      const realIndex = swiper.value.realIndex;
      isMoving.value = true;
      setTimeout(() => {
        isMoving.value = false;
      }, 400);
      countSwiper.value = realIndex + 1;
      ctx.emit("activeIndexChanged", countSwiper.value);
      ctx.emit("slideChanged", realIndex);
    };
    const onSwiper = (instance) => {
      swiper.value = instance;
    };
    onMounted(() => {
      countSwiper.value = 1;
    });
    const goToSlide = (slideNumber) => {
      swiper.value.slideTo(slideNumber);
    };
    return {
      swiper,
      onSwiper,
      onSlideChange,
      countSwiper,
      goToSlide,
      isMoving,
      EffectFade,
      slider
    };
  },
  mounted() {
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Swiper = resolveComponent("Swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Swiper, {
    modules: [$setup.EffectFade],
    effect: "fade",
    onSlideChange: $setup.onSlideChange,
    ref: "swiperRef",
    onSwiper: $setup.onSwiper
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($props.dataSlider, (item, index) => {
          _push2(ssrRenderComponent(_component_SwiperSlide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="services__item"${_scopeId2}><div class="row"${_scopeId2}><div class="col-5"${_scopeId2}><div class="services__left"${_scopeId2}><h2 class="services__item-title"${_scopeId2}>${_ctx.$replaceNewLines(item.title)}</h2></div><div class="slider__btns-container"${_scopeId2}><div class="swiper-button-prev"${_scopeId2}><svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><g clip-path="url(#clip0_11_36)"${_scopeId2}><path d="M0.21968 5.46967C-0.0732197 5.76256 -0.0732197 6.23744 0.21968 6.53033L4.99268 11.3033C5.28558 11.5962 5.76048 11.5962 6.05338 11.3033C6.34618 11.0104 6.34618 10.5355 6.05338 10.2426L1.81068 6L6.05338 1.7574C6.34618 1.4645 6.34618 0.989604 6.05338 0.696704C5.76048 0.403804 5.28558 0.403804 4.99268 0.696704L0.21968 5.46967ZM37.329 5.25L0.75008 5.25L0.75008 6.75L37.329 6.75L37.329 5.25Z" fill="black"${_scopeId2}></path><rect x="29" y="5" width="2" height="2" fill="white"${_scopeId2}></rect><rect x="34" y="5" width="1" height="2" fill="white"${_scopeId2}></rect></g><defs${_scopeId2}><clipPath id="clip0_11_36"${_scopeId2}><rect width="38" height="12" fill="white"${_scopeId2}></rect></clipPath></defs></svg></div><div class="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal"${_scopeId2}><span class="swiper-pagination-current"${_scopeId2}>${ssrInterpolate(index + 1)}</span> / <span class="swiper-pagination-total"${_scopeId2}>${ssrInterpolate($props.dataSlider.length)}</span></div><div class="swiper-button-next"${_scopeId2}><svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><g clip-path="url(#clip0_6_2)"${_scopeId2}><path d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z" fill="black"${_scopeId2}></path><rect x="7" y="5" width="2" height="2" fill="white"${_scopeId2}></rect><rect x="3" y="5" width="2" height="2" fill="white"${_scopeId2}></rect></g><defs${_scopeId2}><clipPath id="clip0_6_2"${_scopeId2}><rect width="38" height="12" fill="white"${_scopeId2}></rect></clipPath></defs></svg></div></div></div><div class="col-7"${_scopeId2}><div class="services__item-content"${_scopeId2}><h4 class="services__item-subtitle"${_scopeId2}>${_ctx.$replaceNewLines(item.subtitle)}</h4><p${_scopeId2}>${_ctx.$replaceNewLines(item.desc)}</p><a class="more" href=""${_scopeId2}><span${_scopeId2}>Узнать больше</span><svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId2}><g clip-path="url(#clip0_6_2)"${_scopeId2}><path d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z" fill="black"${_scopeId2}></path><rect x="7" y="5" width="2" height="2" fill="white"${_scopeId2}></rect><rect x="3" y="5" width="2" height="2" fill="white"${_scopeId2}></rect></g><defs${_scopeId2}><clipPath id="clip0_6_2"${_scopeId2}><rect width="38" height="12" fill="white"${_scopeId2}></rect></clipPath></defs></svg></a></div></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "services__item" }, [
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col-5" }, [
                        createVNode("div", { class: "services__left" }, [
                          createVNode("h2", {
                            class: "services__item-title",
                            innerHTML: _ctx.$replaceNewLines(item.title)
                          }, null, 8, ["innerHTML"])
                        ]),
                        createVNode("div", { class: "slider__btns-container" }, [
                          createVNode("div", {
                            class: "swiper-button-prev",
                            onClick: ($event) => $setup.goToSlide(index - 1)
                          }, [
                            (openBlock(), createBlock("svg", {
                              width: "38",
                              height: "12",
                              viewBox: "0 0 38 12",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("g", { "clip-path": "url(#clip0_11_36)" }, [
                                createVNode("path", {
                                  d: "M0.21968 5.46967C-0.0732197 5.76256 -0.0732197 6.23744 0.21968 6.53033L4.99268 11.3033C5.28558 11.5962 5.76048 11.5962 6.05338 11.3033C6.34618 11.0104 6.34618 10.5355 6.05338 10.2426L1.81068 6L6.05338 1.7574C6.34618 1.4645 6.34618 0.989604 6.05338 0.696704C5.76048 0.403804 5.28558 0.403804 4.99268 0.696704L0.21968 5.46967ZM37.329 5.25L0.75008 5.25L0.75008 6.75L37.329 6.75L37.329 5.25Z",
                                  fill: "black"
                                }),
                                createVNode("rect", {
                                  x: "29",
                                  y: "5",
                                  width: "2",
                                  height: "2",
                                  fill: "white"
                                }),
                                createVNode("rect", {
                                  x: "34",
                                  y: "5",
                                  width: "1",
                                  height: "2",
                                  fill: "white"
                                })
                              ]),
                              createVNode("defs", null, [
                                createVNode("clipPath", { id: "clip0_11_36" }, [
                                  createVNode("rect", {
                                    width: "38",
                                    height: "12",
                                    fill: "white"
                                  })
                                ])
                              ])
                            ]))
                          ], 8, ["onClick"]),
                          createVNode("div", { class: "swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal" }, [
                            createVNode("span", { class: "swiper-pagination-current" }, toDisplayString(index + 1), 1),
                            createTextVNode(" / "),
                            createVNode("span", { class: "swiper-pagination-total" }, toDisplayString($props.dataSlider.length), 1)
                          ]),
                          createVNode("div", {
                            class: "swiper-button-next",
                            onClick: ($event) => $setup.goToSlide(index + 1)
                          }, [
                            (openBlock(), createBlock("svg", {
                              width: "38",
                              height: "12",
                              viewBox: "0 0 38 12",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("g", { "clip-path": "url(#clip0_6_2)" }, [
                                createVNode("path", {
                                  d: "M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z",
                                  fill: "black"
                                }),
                                createVNode("rect", {
                                  x: "7",
                                  y: "5",
                                  width: "2",
                                  height: "2",
                                  fill: "white"
                                }),
                                createVNode("rect", {
                                  x: "3",
                                  y: "5",
                                  width: "2",
                                  height: "2",
                                  fill: "white"
                                })
                              ]),
                              createVNode("defs", null, [
                                createVNode("clipPath", { id: "clip0_6_2" }, [
                                  createVNode("rect", {
                                    width: "38",
                                    height: "12",
                                    fill: "white"
                                  })
                                ])
                              ])
                            ]))
                          ], 8, ["onClick"])
                        ])
                      ]),
                      createVNode("div", { class: "col-7" }, [
                        createVNode("div", { class: "services__item-content" }, [
                          createVNode("h4", {
                            class: "services__item-subtitle",
                            innerHTML: _ctx.$replaceNewLines(item.subtitle)
                          }, null, 8, ["innerHTML"]),
                          createVNode("p", {
                            innerHTML: _ctx.$replaceNewLines(item.desc)
                          }, null, 8, ["innerHTML"]),
                          createVNode("a", {
                            class: "more",
                            href: ""
                          }, [
                            createVNode("span", null, "Узнать больше"),
                            (openBlock(), createBlock("svg", {
                              width: "38",
                              height: "12",
                              viewBox: "0 0 38 12",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg"
                            }, [
                              createVNode("g", { "clip-path": "url(#clip0_6_2)" }, [
                                createVNode("path", {
                                  d: "M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z",
                                  fill: "black"
                                }),
                                createVNode("rect", {
                                  x: "7",
                                  y: "5",
                                  width: "2",
                                  height: "2",
                                  fill: "white"
                                }),
                                createVNode("rect", {
                                  x: "3",
                                  y: "5",
                                  width: "2",
                                  height: "2",
                                  fill: "white"
                                })
                              ]),
                              createVNode("defs", null, [
                                createVNode("clipPath", { id: "clip0_6_2" }, [
                                  createVNode("rect", {
                                    width: "38",
                                    height: "12",
                                    fill: "white"
                                  })
                                ])
                              ])
                            ]))
                          ])
                        ])
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($props.dataSlider, (item, index) => {
            return openBlock(), createBlock(_component_SwiperSlide, { key: index }, {
              default: withCtx(() => [
                createVNode("div", { class: "services__item" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "col-5" }, [
                      createVNode("div", { class: "services__left" }, [
                        createVNode("h2", {
                          class: "services__item-title",
                          innerHTML: _ctx.$replaceNewLines(item.title)
                        }, null, 8, ["innerHTML"])
                      ]),
                      createVNode("div", { class: "slider__btns-container" }, [
                        createVNode("div", {
                          class: "swiper-button-prev",
                          onClick: ($event) => $setup.goToSlide(index - 1)
                        }, [
                          (openBlock(), createBlock("svg", {
                            width: "38",
                            height: "12",
                            viewBox: "0 0 38 12",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("g", { "clip-path": "url(#clip0_11_36)" }, [
                              createVNode("path", {
                                d: "M0.21968 5.46967C-0.0732197 5.76256 -0.0732197 6.23744 0.21968 6.53033L4.99268 11.3033C5.28558 11.5962 5.76048 11.5962 6.05338 11.3033C6.34618 11.0104 6.34618 10.5355 6.05338 10.2426L1.81068 6L6.05338 1.7574C6.34618 1.4645 6.34618 0.989604 6.05338 0.696704C5.76048 0.403804 5.28558 0.403804 4.99268 0.696704L0.21968 5.46967ZM37.329 5.25L0.75008 5.25L0.75008 6.75L37.329 6.75L37.329 5.25Z",
                                fill: "black"
                              }),
                              createVNode("rect", {
                                x: "29",
                                y: "5",
                                width: "2",
                                height: "2",
                                fill: "white"
                              }),
                              createVNode("rect", {
                                x: "34",
                                y: "5",
                                width: "1",
                                height: "2",
                                fill: "white"
                              })
                            ]),
                            createVNode("defs", null, [
                              createVNode("clipPath", { id: "clip0_11_36" }, [
                                createVNode("rect", {
                                  width: "38",
                                  height: "12",
                                  fill: "white"
                                })
                              ])
                            ])
                          ]))
                        ], 8, ["onClick"]),
                        createVNode("div", { class: "swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal" }, [
                          createVNode("span", { class: "swiper-pagination-current" }, toDisplayString(index + 1), 1),
                          createTextVNode(" / "),
                          createVNode("span", { class: "swiper-pagination-total" }, toDisplayString($props.dataSlider.length), 1)
                        ]),
                        createVNode("div", {
                          class: "swiper-button-next",
                          onClick: ($event) => $setup.goToSlide(index + 1)
                        }, [
                          (openBlock(), createBlock("svg", {
                            width: "38",
                            height: "12",
                            viewBox: "0 0 38 12",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("g", { "clip-path": "url(#clip0_6_2)" }, [
                              createVNode("path", {
                                d: "M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z",
                                fill: "black"
                              }),
                              createVNode("rect", {
                                x: "7",
                                y: "5",
                                width: "2",
                                height: "2",
                                fill: "white"
                              }),
                              createVNode("rect", {
                                x: "3",
                                y: "5",
                                width: "2",
                                height: "2",
                                fill: "white"
                              })
                            ]),
                            createVNode("defs", null, [
                              createVNode("clipPath", { id: "clip0_6_2" }, [
                                createVNode("rect", {
                                  width: "38",
                                  height: "12",
                                  fill: "white"
                                })
                              ])
                            ])
                          ]))
                        ], 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "col-7" }, [
                      createVNode("div", { class: "services__item-content" }, [
                        createVNode("h4", {
                          class: "services__item-subtitle",
                          innerHTML: _ctx.$replaceNewLines(item.subtitle)
                        }, null, 8, ["innerHTML"]),
                        createVNode("p", {
                          innerHTML: _ctx.$replaceNewLines(item.desc)
                        }, null, 8, ["innerHTML"]),
                        createVNode("a", {
                          class: "more",
                          href: ""
                        }, [
                          createVNode("span", null, "Узнать больше"),
                          (openBlock(), createBlock("svg", {
                            width: "38",
                            height: "12",
                            viewBox: "0 0 38 12",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createVNode("g", { "clip-path": "url(#clip0_6_2)" }, [
                              createVNode("path", {
                                d: "M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z",
                                fill: "black"
                              }),
                              createVNode("rect", {
                                x: "7",
                                y: "5",
                                width: "2",
                                height: "2",
                                fill: "white"
                              }),
                              createVNode("rect", {
                                x: "3",
                                y: "5",
                                width: "2",
                                height: "2",
                                fill: "white"
                              })
                            ]),
                            createVNode("defs", null, [
                              createVNode("clipPath", { id: "clip0_6_2" }, [
                                createVNode("rect", {
                                  width: "38",
                                  height: "12",
                                  fill: "white"
                                })
                              ])
                            ])
                          ]))
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="${ssrRenderClass([{ move: $setup.isMoving }, "count"])}">${ssrInterpolate($setup.countSwiper)}</div><!--]-->`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Services/TheSwiper.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const TheSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const toggleMixin = {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
      document.body.classList.remove("overflow");
    }
  },
  mounted() {
    console.log("mixin mounted");
  }
  // ...
};
const _sfc_main$b = {
  name: "my-dialog",
  mixins: [toggleMixin],
  mounted() {
    console.log("dialog mounted");
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.show) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "dialog" }, _attrs))}><div class="${ssrRenderClass([{ show: _ctx.show, hide: !_ctx.show }, "dialog__content"])}"><span class="dialog__close"></span>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/MyDialog.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const MyDialog = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$a = {
  directives: { maska: vMaska },
  components: {
    InputBox,
    TheButton
  },
  data() {
    return {
      form: {
        name: "",
        tel: "",
        email: "",
        pages: ""
      },
      formName: "feedback"
    };
  },
  methods: {
    fetchForm() {
      this.form.pages = window.location.href;
      this.$emit("create", { data: this.form, form: this.formName });
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_InputBox = resolveComponent("InputBox");
  const _component_the_button = resolveComponent("the-button");
  const _directive_maska = resolveDirective("maska");
  _push(`<form${ssrRenderAttrs(_attrs)}><h2>Создание поста</h2><div class="wrapper">`);
  _push(ssrRenderComponent(_component_InputBox, {
    value: $data.form.name,
    class: { "has-value": $data.form.name !== "" },
    onDich: ($event) => $data.form.name = $event,
    label: "Ваше имя"
  }, null, _parent));
  _push(ssrRenderComponent(_component_InputBox, mergeProps({
    value: $data.form.tel,
    class: { "has-value": $data.form.tel !== "" },
    onDich: ($event) => $data.form.tel = $event,
    label: "Телефон",
    mask: "+1 ### ###-##-##"
  }, ssrGetDirectiveProps(_ctx, _directive_maska)), null, _parent));
  _push(ssrRenderComponent(_component_InputBox, {
    value: $data.form.email,
    onDich: ($event) => $data.form.email = $event,
    class: { "has-value": $data.form.email !== "" },
    label: "Email"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_the_button, {
    style: { "align-self": "flex-end", "margin-top": "15px" },
    onClick: $options.fetchForm,
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Создать</span>`);
      } else {
        return [
          createVNode("span", null, "Создать")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</form>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal/PostForm.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const PostForm = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const navigation_min = "";
const _sfc_main$9 = {
  props: {
    services: Array
  },
  components: {
    Swiper,
    SwiperSlide,
    TheSectionCaption,
    useSwiper,
    TheSwiper
  },
  data() {
    const activeIndex = ref(0);
    console.log(this.services[0]);
    return {
      sectionCaption: "Services",
      desc: this.services[0].desc,
      slider: this.services[0].slider[0].slider_item,
      slider_thumb: this.services[0].slider[0].slider_thumb,
      slideIndex: 1,
      activeIndex
    };
  },
  methods: {
    ...mapMutations({}),
    // ...mapActions({
    //   services: "services/fetchInfo",
    // }),
    goToSlide(slideNumber) {
      this.$refs.mySwiper.goToSlide(slideNumber);
    },
    activeIndexChanged(slideNumber) {
      this.activeIndex = slideNumber - 1;
    }
  },
  computed: {
    ...mapGetters({
      SliderThumbWithId: "services/SliderThumbWithId"
    })
  },
  watch: {}
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_swiper = resolveComponent("the-swiper");
  const _component_the_section_caption = resolveComponent("the-section-caption");
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "services",
    class: "services"
  }, _attrs))}><div class="container services-container"><div class="services__header wow fadeIn" data-wow-delay="0.2s"><p></p></div><div class="services__wrapper wow fadeIn" data-wow-delay="0.4s">`);
  _push(ssrRenderComponent(_component_the_swiper, {
    ref: "mySwiper",
    activeIndex: $data.activeIndex,
    onGoToSlide: $options.goToSlide,
    onActiveIndexChanged: $options.activeIndexChanged,
    dataSlider: $data.slider ? $data.slider : []
  }, null, _parent));
  _push(`</div><div class="services__wrapper__text"><!--[-->`);
  ssrRenderList(_ctx.SliderThumbWithId, (item, index) => {
    _push(`<div class="${ssrRenderClass([{ active: $data.activeIndex === item.id }, "thumb__item"])}"><span>${ssrInterpolate(item.title)}</span></div>`);
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_the_section_caption, {
    sectionCaption: $data.sectionCaption,
    class: "color"
  }, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/infusions/servicesComponent.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const servicesComponent = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _imports_0 = "/build/assets/logo-001-b56b70d8.png";
const _sfc_main$8 = {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    Link
  },
  setup(props) {
    const tiltableItem = ref(null);
    const mobile = ref(null);
    onMounted(async () => {
      await new Promise((resolve) => {
        const interval = setInterval(() => {
          if (tiltableItem.value && mobile.value) {
            clearInterval(interval);
            resolve();
          }
        }, 100);
      });
      const elements = tiltableItem.value;
      Array.prototype.forEach.call(elements, function(el) {
        VanillaTilt.init(el, {
          max: 10,
          speed: 400
          // Добавьте другие параметры настройки здесь, если нужно
        });
      });
    });
    return { tiltableItem, mobile };
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  ssrRenderList($props.items, (item) => {
    _push(`<div class="porfolio__item">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "main-container shadow-bottom",
      stas: "Poollavka",
      href: "http://" + item.subtitle,
      target: "_blank",
      rel: "noopener"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", item.img)} alt=""${_scopeId}><div class="contentBx"${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", item.bg_img)} alt=""${_scopeId}></div></div>`);
        } else {
          return [
            createVNode("img", {
              src: item.img,
              alt: ""
            }, null, 8, ["src"]),
            createVNode("div", { class: "contentBx" }, [
              createVNode("div", null, [
                createVNode("img", {
                  src: item.bg_img,
                  alt: ""
                }, null, 8, ["src"])
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<a class="porfolio__item-mobile"><img${ssrRenderAttr("src", item.img_mobile)} alt=""></a><div class="porfolio__item__logo"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="porfolio__item__text"><span>${ssrInterpolate(item.title)}</span><a>${ssrInterpolate(item.subtitle)}</a></div></div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Portfolio/TheItemList.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const TheItemList = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {
  props: {
    portfolio: Array,
    page: {
      type: String,
      default: "home"
    }
  },
  components: {
    Link,
    TheItemList,
    TheButton,
    TheSectionCaption
  },
  data() {
    return {
      title: this.portfolio[0].title,
      more: this.portfolio[0].more,
      items: this.portfolio[0].items,
      setBtn: this.portfolio[0].setBtn,
      sectionCaption: "Portfolio"
    };
  },
  methods: {
    lastItems() {
      return this.items.slice(-4);
    }
  },
  watch: {}
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_the_item_list = resolveComponent("the-item-list");
  const _component_the_button = resolveComponent("the-button");
  const _component_the_section_caption = resolveComponent("the-section-caption");
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "porfolio",
    class: "porfolio"
  }, _attrs))}><div class="container porfolio-container"><div class="porfolio__header wow fadeIn" data-wow-delay="0.2s">`);
  if ($props.page === "home") {
    _push(`<h2>${_ctx.$replaceNewLines($data.title)}</h2>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("project")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($props.page === "home") {
          _push2(`<div class="more"${_scopeId}><span${_scopeId}>${ssrInterpolate($data.more)}</span><svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><g clip-path="url(#clip0_6_2)"${_scopeId}><path d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z" fill="black"${_scopeId}></path><rect x="7" y="5" width="2" height="2" fill="white"${_scopeId}></rect><rect x="3" y="5" width="2" height="2" fill="white"${_scopeId}></rect></g><defs${_scopeId}><clipPath id="clip0_6_2"${_scopeId}><rect width="38" height="12" fill="white"${_scopeId}></rect></clipPath></defs></svg></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          $props.page === "home" ? (openBlock(), createBlock("div", {
            key: 0,
            class: "more"
          }, [
            createVNode("span", null, toDisplayString($data.more), 1),
            (openBlock(), createBlock("svg", {
              width: "38",
              height: "12",
              viewBox: "0 0 38 12",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createVNode("g", { "clip-path": "url(#clip0_6_2)" }, [
                createVNode("path", {
                  d: "M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z",
                  fill: "black"
                }),
                createVNode("rect", {
                  x: "7",
                  y: "5",
                  width: "2",
                  height: "2",
                  fill: "white"
                }),
                createVNode("rect", {
                  x: "3",
                  y: "5",
                  width: "2",
                  height: "2",
                  fill: "white"
                })
              ]),
              createVNode("defs", null, [
                createVNode("clipPath", { id: "clip0_6_2" }, [
                  createVNode("rect", {
                    width: "38",
                    height: "12",
                    fill: "white"
                  })
                ])
              ])
            ]))
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="porfolio__wrapper wow fadeIn" data-wow-delay="0.2s">`);
  if ($props.page === "home") {
    _push(ssrRenderComponent(_component_the_item_list, {
      items: $options.lastItems()
    }, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_the_item_list, { items: $data.items }, null, _parent));
  }
  _push(`</div><div class="porfolio__footer">`);
  if ($props.page === "home") {
    _push(ssrRenderComponent(_component_the_button, { class: "button button--orange first__btn" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span${_scopeId}>Показать ещё</span>`);
        } else {
          return [
            createVNode("span", null, "Показать ещё")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  _push(ssrRenderComponent(_component_the_section_caption, { sectionCaption: $data.sectionCaption }, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/infusions/portfolioComponent.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const portfolioComponent = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  name: "the-more-button"
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({
    class: "more",
    href: ""
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6_2)"><path d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z" fill="black"></path><rect x="7" y="5" width="2" height="2" fill="white"></rect><rect x="3" y="5" width="2" height="2" fill="white"></rect></g><defs><clipPath id="clip0_6_2"><rect width="38" height="12" fill="white"></rect></clipPath></defs></svg></a>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/TheMoreButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const TheMoreButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  props: {
    company: Array
  },
  components: {
    TheMoreButton,
    TheButton,
    TheSectionCaption
  },
  data() {
    return {
      subtitle: this.company[0].subtitle,
      title: this.company[0].title,
      text: this.company[0].text,
      desc: this.company[0].desc,
      more: this.company[0].more
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_more_button = resolveComponent("the-more-button");
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "about",
    class: "about"
  }, _attrs))}><div class="container about-container"><div class="about__header wow fadeIn" data-wow-delay="0.4s"><h2>${$data.subtitle}</h2></div><div class="about__wrapper"><div class="row about__wrapper-content"><div class="col-6 wow fadeIn" data-wow-delay="0.4s"><div class="about__item-title-container"><h3 class="about__item-title">${_ctx.$replaceNewLines($data.title)}</h3></div></div><div class="col-6 wow fadeIn" data-wow-delay="0.4s"><div class="about__item-right"><h3 class="about__item-subtitle">${ssrInterpolate($data.text)}</h3><p>${ssrInterpolate($data.desc)}</p>`);
  _push(ssrRenderComponent(_component_the_more_button, { class: "more" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate($data.more)}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString($data.more), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/infusions/companyComponent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const companyComponent = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="container footer-container"><div class="footer__wrapper"><p>2009-2023 © Digital-агентство «Ji-Touch»</p><p>Надёжный партнёр Вашего бизнеса!</p><a href="">Политика конфиденциальности</a></div></div></footer>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/TheFooter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TheFooterVue = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  props: {
    title: String,
    first: Array,
    services: Array,
    portfolio: Array,
    company: Array,
    order: Array,
    contact: Array
  },
  components: {
    Head,
    TheHeader,
    TheAnimateBg,
    TheSwiper,
    MyDialog,
    PostForm,
    firstComponent,
    servicesComponent,
    portfolioComponent,
    companyComponent,
    orderComponent,
    TheFooterVue
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  mixins: [messageMixin],
  methods: {
    showModal() {
      this.dialogVisible = true;
      document.body.classList.add("overflow");
    },
    showMessage(mess, status, flag, duration) {
      this.message(mess, status, flag, duration);
    },
    async fetchForm(data) {
      console.log(data);
      let form = data.data;
      let formName = data.form;
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("tel", form.tel);
      formData.append("email", form.email);
      formData.append("pages", form.pages);
      try {
        const response = await fetch("/api/form/" + formName, {
          method: "POST",
          body: formData
        });
        const responseData = await response.json();
        console.log(responseData);
        this.showMessage({ title: "Отправлено", content: "Ваша форма успешно отправлена" }, "success", false, 3e3);
        this.dialogVisible = false;
      } catch (error) {
        console.error(error);
        this.showMessage({ title: "Ошибка", content: "Ваша форма не отправлена" }, "error", true, 3e3);
      }
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_the_header = resolveComponent("the-header");
  const _component_TheAnimateBg = resolveComponent("TheAnimateBg");
  const _component_first_component = resolveComponent("first-component");
  const _component_services_component = resolveComponent("services-component");
  const _component_portfolio_component = resolveComponent("portfolio-component");
  const _component_company_component = resolveComponent("company-component");
  const _component_order_component = resolveComponent("order-component");
  const _component_my_dialog = resolveComponent("my-dialog");
  const _component_post_form = resolveComponent("post-form");
  const _component_the_swiper = resolveComponent("the-swiper");
  const _component_the_footer_vue = resolveComponent("the-footer-vue");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>${ssrInterpolate($props.title)}</title>`);
      } else {
        return [
          createVNode("title", null, toDisplayString($props.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_the_header, null, null, _parent));
  _push(ssrRenderComponent(_component_TheAnimateBg, null, null, _parent));
  _push(ssrRenderComponent(_component_first_component, {
    first: $props.first,
    onModal: $options.showModal
  }, null, _parent));
  _push(ssrRenderComponent(_component_services_component, { services: $props.services }, null, _parent));
  _push(ssrRenderComponent(_component_portfolio_component, {
    portfolio: $props.portfolio,
    page: "home"
  }, null, _parent));
  _push(ssrRenderComponent(_component_company_component, { company: $props.company }, null, _parent));
  _push(ssrRenderComponent(_component_order_component, {
    order: $props.order,
    contact: $props.contact
  }, null, _parent));
  _push(ssrRenderComponent(_component_my_dialog, {
    show: $data.dialogVisible,
    "onUpdate:show": ($event) => $data.dialogVisible = $event,
    onAccepted: $options.showModal
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_post_form, { onCreate: $options.fetchForm }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_post_form, { onCreate: $options.fetchForm }, null, 8, ["onCreate"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_the_swiper, null, null, _parent));
  _push(`<div id="messages"></div>`);
  _push(ssrRenderComponent(_component_the_footer_vue, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  props: {
    title: String
  },
  components: {
    Head,
    TheHeader,
    TheFooterVue: TheFooterVue$1,
    jobsComponentVue
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_the_header = resolveComponent("the-header");
  const _component_jobs_component_vue = resolveComponent("jobs-component-vue");
  const _component_the_footer_vue = resolveComponent("the-footer-vue");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
  _push(ssrRenderComponent(_component_the_header, null, null, _parent));
  _push(`<div class="content"><div class="container"><h1>${ssrInterpolate($props.title)}</h1>`);
  _push(ssrRenderComponent(_component_jobs_component_vue, null, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_the_footer_vue, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Jobs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Jobs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jobs
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  props: {
    title: String
  },
  components: {
    Head,
    TheHeader,
    portfolioComponent
  },
  created() {
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_the_header = resolveComponent("the-header");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>${ssrInterpolate($props.title)}</title>`);
      } else {
        return [
          createVNode("title", null, toDisplayString($props.title), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_the_header, null, null, _parent));
  _push(`<div class="content"><div class="container"><h1>${ssrInterpolate($props.title)}</h1></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Project.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Project = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Project
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  props: {
    title: String
  },
  components: {
    Head,
    TheHeader,
    reviewsComponent,
    TheFooterVue: TheFooterVue$1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_the_header = resolveComponent("the-header");
  const _component_reviews_component = resolveComponent("reviews-component");
  const _component_the_footer_vue = resolveComponent("the-footer-vue");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: $props.title }, null, _parent));
  _push(ssrRenderComponent(_component_the_header, null, null, _parent));
  _push(`<div class="content"><div class="container"><h1>${ssrInterpolate($props.title)}</h1></div>`);
  _push(ssrRenderComponent(_component_reviews_component, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_the_footer_vue, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reviews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Reviews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Reviews
}, Symbol.toStringTag, { value: "Module" }));
const firstModule = {
  state: () => ({
    title: "",
    desc: "",
    btn: ""
  }),
  getters: {},
  mutations: {
    setTitle(state, title) {
      state.title = title;
    },
    setDesc(state, desc) {
      state.desc = desc;
    },
    setBtn(state, btn) {
      state.btn = btn;
    }
  },
  actions: {
    async setFirst({ state, commit }, response) {
      try {
        commit("setTitle", response[0].title);
        commit("setDesc", response[0].desc);
        commit("setBtn", response[0].btn);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const servicesModule = {
  state: () => ({
    desc: "",
    slider: [],
    slider_thumb: []
  }),
  getters: {
    SliderThumbWithId(state) {
      return state.slider_thumb.map((item, index) => {
        return { ...item, id: index };
      });
    }
  },
  mutations: {
    setDesc(state, desc) {
      state.desc = desc;
    },
    setSlider(state, slider) {
      state.slider = slider;
    },
    setSliderThumb(state, slider_thumb) {
      state.slider_thumb = slider_thumb;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/services", {
          data: argument,
          params: {}
        });
        commit("setDesc", response.data[0].desc);
        commit("setSlider", response.data[0].slider[0].slider_item);
        commit("setSliderThumb", response.data[0].slider[0].slider_thumb);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const portfolioModule = {
  state: () => ({
    title: "",
    more: "",
    items: [],
    btn: ""
  }),
  getters: {
    lastItems(state) {
      return state.items.slice(-4);
    }
  },
  mutations: {
    setTitle(state, title) {
      state.title = title;
    },
    setMore(state, more) {
      state.more = more;
    },
    setItems(state, items) {
      state.items = items;
    },
    setBtn(state, btn) {
      state.btn = btn;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/portfolio", {
          data: argument,
          params: {}
        });
        console.log(response.data);
        commit("setTitle", response.data[0].title);
        commit("setMore", response.data[0].more);
        commit("setItems", response.data[0].items);
        commit("setBtn", response.data[0].btn);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const companyModule = {
  state: () => ({
    subtitle: "",
    title: "",
    text: "",
    desc: "",
    more: ""
  }),
  getters: {},
  mutations: {
    setSubtitle(state, subtitle) {
      state.subtitle = subtitle;
    },
    setTitle(state, title) {
      state.title = title;
    },
    setText(state, text) {
      state.text = text;
    },
    setDesc(state, desc) {
      state.desc = desc;
    },
    setMore(state, more) {
      state.more = more;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/company", {
          data: argument,
          params: {}
        });
        commit("setSubtitle", response.data[0].subtitle);
        commit("setTitle", response.data[0].title);
        commit("setText", response.data[0].text);
        commit("setDesc", response.data[0].desc);
        commit("setMore", response.data[0].more);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const contactModule = {
  state: () => ({
    phone: "",
    email: "",
    telegram: "",
    whatsapp: "",
    address: "",
    worktime: ""
  }),
  getters: {
    row: (state) => {
      return Object.keys(state).reduce((obj, key) => {
        obj[key] = state[key];
        return obj;
      }, {});
    }
  },
  mutations: {
    setPhone(state, phone) {
      state.phone = phone;
    },
    setEmail(state, email) {
      state.email = email;
    },
    setTelegram(state, telegram) {
      state.telegram = telegram;
    },
    setWhatsapp(state, whatsapp) {
      state.whatsapp = whatsapp;
    },
    setAddress(state, address) {
      state.address = address;
    },
    setWorktime(state, worktime) {
      state.worktime = worktime;
    },
    setMap(state, map) {
      state.map = map;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/contact", {
          data: argument,
          params: {}
        });
        commit("setPhone", response.data.phone.value);
        commit("setEmail", response.data.email.value);
        commit("setTelegram", response.data.telegram.value);
        commit("setWhatsapp", response.data.whatsapp.value);
        commit("setAddress", response.data.address.value);
        commit("setWorktime", response.data.worktime.value);
        commit("setMap", response.data.map.value);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const orderModule = {
  state: () => ({
    title: "",
    desc: ""
  }),
  getters: {
    row: (state) => {
      return Object.keys(state).reduce((obj, key) => {
        obj[key] = state[key];
        return obj;
      }, {});
    }
  },
  mutations: {
    setTitle(state, title) {
      state.title = title;
    },
    setDesc(state, desc) {
      state.desc = desc;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/order", {
          data: argument,
          params: {}
        });
        commit("setTitle", response.data[0].title);
        commit("setDesc", response.data[0].desc);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const reviewsModule = {
  state: () => ({
    // тут алиас столбцов : тип данных
    items: []
  }),
  getters: {},
  mutations: {
    // для каждого алиаса свой set
    setItems(state, items) {
      state.items = items;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/reviews", {
          data: argument,
          params: {}
        });
        console.log(response.data);
        commit("setItems", response.data[0].items);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const jobsModule = {
  state: () => ({
    // тут алиас столбцов : тип данных
    items: []
  }),
  getters: {},
  mutations: {
    // для каждого алиаса свой set
    setItems(state, items) {
      state.items = items;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/jobs", {
          data: argument,
          params: {}
        });
        console.log(response.data);
        commit("setItems", response.data[0].items);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const aboutModule = {
  state: () => ({
    // тут алиас столбцов : тип данных
    tabs: [],
    slider: []
  }),
  getters: {},
  mutations: {
    // для каждого алиаса свой set
    setTabs(state, tabs) {
      state.tabs = tabs;
    },
    setSlider(state, slider) {
      state.slider = slider;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/about", {
          data: argument,
          params: {}
        });
        commit("setTabs", response.data[0].tabs);
        commit("setSlider", response.data[0].slider);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const test2Module = {
  state: () => ({
    // тут алиас столбцов : тип данных
    test2: ""
  }),
  getters: {},
  mutations: {
    // для каждого алиаса свой set
    setTest2(state, test2) {
      state.test2 = test2;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/test2", {
          data: argument,
          params: {}
        });
        commit("setTest2", response.data[0].test2);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const testModule = {
  state: () => ({
    row: []
  }),
  getters: {},
  mutations: {},
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/test", {
          data: argument,
          params: {}
        });
        console.group("запрос");
        console.log(response);
        console.groupEnd();
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const articleModule = {
  state: () => ({
    // тут алиас столбцов : тип данных
    article: ""
  }),
  getters: {},
  mutations: {
    // для каждого алиаса свой set
    setArticle(state, article) {
      state.article = article;
    }
  },
  actions: {
    async fetchInfo({ state, commit }, argument) {
      try {
        const response = await axios.get("/api/panel_data/article", {
          data: argument,
          params: {}
        });
        commit("setArticle", response.data[0].article);
      } catch (e2) {
        console.log(e2);
      } finally {
      }
    }
  },
  namespaced: true
};
const store = createStore({
  // plugins: [createPersistedState({
  //     paths: ['cartModule']
  // })],
  state: {
    isAuth: false
  },
  modules: {
    test: testModule,
    article: articleModule,
    test2: test2Module,
    first: firstModule,
    services: servicesModule,
    portfolio: portfolioModule,
    company: companyModule,
    contact: contactModule,
    order: orderModule,
    reviews: reviewsModule,
    jobs: jobsModule,
    about: aboutModule
  }
});
function t(t4, r2) {
  for (var n2 = 0; n2 < r2.length; n2++) {
    var e2 = r2[n2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t4, "symbol" == typeof (o2 = function(t5, r3) {
      if ("object" != typeof t5 || null === t5)
        return t5;
      var n3 = t5[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var e3 = n3.call(t5, "string");
        if ("object" != typeof e3)
          return e3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t5);
    }(e2.key)) ? o2 : String(o2), e2);
  }
  var o2;
}
function r(r2, n2, e2) {
  return n2 && t(r2.prototype, n2), e2 && t(r2, e2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
}
function n() {
  return n = Object.assign ? Object.assign.bind() : function(t4) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var n2 = arguments[r2];
      for (var e2 in n2)
        Object.prototype.hasOwnProperty.call(n2, e2) && (t4[e2] = n2[e2]);
    }
    return t4;
  }, n.apply(this, arguments);
}
function e(t4) {
  return e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t5) {
    return t5.__proto__ || Object.getPrototypeOf(t5);
  }, e(t4);
}
function o(t4, r2) {
  return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t5, r3) {
    return t5.__proto__ = r3, t5;
  }, o(t4, r2);
}
function i() {
  if ("undefined" == typeof Reflect || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if ("function" == typeof Proxy)
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch (t4) {
    return false;
  }
}
function u(t4, r2, n2) {
  return u = i() ? Reflect.construct.bind() : function(t5, r3, n3) {
    var e2 = [null];
    e2.push.apply(e2, r3);
    var i2 = new (Function.bind.apply(t5, e2))();
    return n3 && o(i2, n3.prototype), i2;
  }, u.apply(null, arguments);
}
function f(t4) {
  var r2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return f = function(t5) {
    if (null === t5 || -1 === Function.toString.call(t5).indexOf("[native code]"))
      return t5;
    if ("function" != typeof t5)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r2) {
      if (r2.has(t5))
        return r2.get(t5);
      r2.set(t5, n2);
    }
    function n2() {
      return u(t5, arguments, e(this).constructor);
    }
    return n2.prototype = Object.create(t5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), o(n2, t5);
  }, f(t4);
}
var a = String.prototype.replace, c = /%20/g, l = { default: "RFC3986", formatters: { RFC1738: function(t4) {
  return a.call(t4, c, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: "RFC3986" }, s = Object.prototype.hasOwnProperty, v = Array.isArray, p = function() {
  for (var t4 = [], r2 = 0; r2 < 256; ++r2)
    t4.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t4;
}(), y = function(t4, r2) {
  for (var n2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, e2 = 0; e2 < t4.length; ++e2)
    void 0 !== t4[e2] && (n2[e2] = t4[e2]);
  return n2;
}, d = { arrayToObject: y, assign: function(t4, r2) {
  return Object.keys(r2).reduce(function(t5, n2) {
    return t5[n2] = r2[n2], t5;
  }, t4);
}, combine: function(t4, r2) {
  return [].concat(t4, r2);
}, compact: function(t4) {
  for (var r2 = [{ obj: { o: t4 }, prop: "o" }], n2 = [], e2 = 0; e2 < r2.length; ++e2)
    for (var o2 = r2[e2], i2 = o2.obj[o2.prop], u2 = Object.keys(i2), f2 = 0; f2 < u2.length; ++f2) {
      var a2 = u2[f2], c2 = i2[a2];
      "object" == typeof c2 && null !== c2 && -1 === n2.indexOf(c2) && (r2.push({ obj: i2, prop: a2 }), n2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var r3 = t5.pop(), n3 = r3.obj[r3.prop];
      if (v(n3)) {
        for (var e3 = [], o3 = 0; o3 < n3.length; ++o3)
          void 0 !== n3[o3] && e3.push(n3[o3]);
        r3.obj[r3.prop] = e3;
      }
    }
  }(r2), t4;
}, decode: function(t4, r2, n2) {
  var e2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === n2)
    return e2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(e2);
  } catch (t5) {
    return e2;
  }
}, encode: function(t4, r2, n2, e2, o2) {
  if (0 === t4.length)
    return t4;
  var i2 = t4;
  if ("symbol" == typeof t4 ? i2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (i2 = String(t4)), "iso-8859-1" === n2)
    return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var u2 = "", f2 = 0; f2 < i2.length; ++f2) {
    var a2 = i2.charCodeAt(f2);
    45 === a2 || 46 === a2 || 95 === a2 || 126 === a2 || a2 >= 48 && a2 <= 57 || a2 >= 65 && a2 <= 90 || a2 >= 97 && a2 <= 122 || o2 === l.RFC1738 && (40 === a2 || 41 === a2) ? u2 += i2.charAt(f2) : a2 < 128 ? u2 += p[a2] : a2 < 2048 ? u2 += p[192 | a2 >> 6] + p[128 | 63 & a2] : a2 < 55296 || a2 >= 57344 ? u2 += p[224 | a2 >> 12] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2] : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & i2.charCodeAt(f2 += 1)), u2 += p[240 | a2 >> 18] + p[128 | a2 >> 12 & 63] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2]);
  }
  return u2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, r2) {
  if (v(t4)) {
    for (var n2 = [], e2 = 0; e2 < t4.length; e2 += 1)
      n2.push(r2(t4[e2]));
    return n2;
  }
  return r2(t4);
}, merge: function t2(r2, n2, e2) {
  if (!n2)
    return r2;
  if ("object" != typeof n2) {
    if (v(r2))
      r2.push(n2);
    else {
      if (!r2 || "object" != typeof r2)
        return [r2, n2];
      (e2 && (e2.plainObjects || e2.allowPrototypes) || !s.call(Object.prototype, n2)) && (r2[n2] = true);
    }
    return r2;
  }
  if (!r2 || "object" != typeof r2)
    return [r2].concat(n2);
  var o2 = r2;
  return v(r2) && !v(n2) && (o2 = y(r2, e2)), v(r2) && v(n2) ? (n2.forEach(function(n3, o3) {
    if (s.call(r2, o3)) {
      var i2 = r2[o3];
      i2 && "object" == typeof i2 && n3 && "object" == typeof n3 ? r2[o3] = t2(i2, n3, e2) : r2.push(n3);
    } else
      r2[o3] = n3;
  }), r2) : Object.keys(n2).reduce(function(r3, o3) {
    var i2 = n2[o3];
    return r3[o3] = s.call(r3, o3) ? t2(r3[o3], i2, e2) : i2, r3;
  }, o2);
} }, b = Object.prototype.hasOwnProperty, h = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, r2) {
  return t4 + "[" + r2 + "]";
}, repeat: function(t4) {
  return t4;
} }, m = Array.isArray, g = String.prototype.split, j = Array.prototype.push, w = function(t4, r2) {
  j.apply(t4, m(r2) ? r2 : [r2]);
}, O = Date.prototype.toISOString, E = l.default, R = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: d.encode, encodeValuesOnly: false, format: E, formatter: l.formatters[E], indices: false, serializeDate: function(t4) {
  return O.call(t4);
}, skipNulls: false, strictNullHandling: false }, S = function t3(r2, n2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2) {
  var b2, h2 = r2;
  if ("function" == typeof f2 ? h2 = f2(n2, h2) : h2 instanceof Date ? h2 = l2(h2) : "comma" === e2 && m(h2) && (h2 = d.maybeMap(h2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === h2) {
    if (o2)
      return u2 && !p2 ? u2(n2, R.encoder, y2, "key", s2) : n2;
    h2 = "";
  }
  if ("string" == typeof (b2 = h2) || "number" == typeof b2 || "boolean" == typeof b2 || "symbol" == typeof b2 || "bigint" == typeof b2 || d.isBuffer(h2)) {
    if (u2) {
      var j2 = p2 ? n2 : u2(n2, R.encoder, y2, "key", s2);
      if ("comma" === e2 && p2) {
        for (var O2 = g.call(String(h2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2)
          E2 += (0 === S2 ? "" : ",") + v2(u2(O2[S2], R.encoder, y2, "value", s2));
        return [v2(j2) + "=" + E2];
      }
      return [v2(j2) + "=" + v2(u2(h2, R.encoder, y2, "value", s2))];
    }
    return [v2(n2) + "=" + v2(String(h2))];
  }
  var k2, x2 = [];
  if (void 0 === h2)
    return x2;
  if ("comma" === e2 && m(h2))
    k2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (m(f2))
    k2 = f2;
  else {
    var C2 = Object.keys(h2);
    k2 = a2 ? C2.sort(a2) : C2;
  }
  for (var T2 = 0; T2 < k2.length; ++T2) {
    var N2 = k2[T2], F2 = "object" == typeof N2 && void 0 !== N2.value ? N2.value : h2[N2];
    if (!i2 || null !== F2) {
      var D2 = m(h2) ? "function" == typeof e2 ? e2(n2, N2) : n2 : n2 + (c2 ? "." + N2 : "[" + N2 + "]");
      w(x2, t3(F2, D2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2));
    }
  }
  return x2;
}, k = Object.prototype.hasOwnProperty, x = Array.isArray, C = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: d.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, T = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, N = function(t4, r2) {
  return t4 && "string" == typeof t4 && r2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, F = function(t4, r2, n2, e2) {
  if (t4) {
    var o2 = n2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(o2), f2 = u2 ? o2.slice(0, u2.index) : o2, a2 = [];
    if (f2) {
      if (!n2.plainObjects && k.call(Object.prototype, f2) && !n2.allowPrototypes)
        return;
      a2.push(f2);
    }
    for (var c2 = 0; n2.depth > 0 && null !== (u2 = i2.exec(o2)) && c2 < n2.depth; ) {
      if (c2 += 1, !n2.plainObjects && k.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes)
        return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + o2.slice(u2.index) + "]"), function(t5, r3, n3, e3) {
      for (var o3 = e3 ? r3 : N(r3, n3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, f3 = t5[i3];
        if ("[]" === f3 && n3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = "[" === f3.charAt(0) && "]" === f3.charAt(f3.length - 1) ? f3.slice(1, -1) : f3, c3 = parseInt(a3, 10);
          n3.parseArrays || "" !== a3 ? !isNaN(c3) && f3 !== a3 && String(c3) === a3 && c3 >= 0 && n3.parseArrays && c3 <= n3.arrayLimit ? (u3 = [])[c3] = o3 : "__proto__" !== a3 && (u3[a3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(a2, r2, n2, e2);
  }
}, D = function(t4, r2) {
  var n2 = function(t5) {
    if (!t5)
      return C;
    if (null != t5.decoder && "function" != typeof t5.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: void 0 === t5.allowDots ? C.allowDots : !!t5.allowDots, allowPrototypes: "boolean" == typeof t5.allowPrototypes ? t5.allowPrototypes : C.allowPrototypes, arrayLimit: "number" == typeof t5.arrayLimit ? t5.arrayLimit : C.arrayLimit, charset: void 0 === t5.charset ? C.charset : t5.charset, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : C.charsetSentinel, comma: "boolean" == typeof t5.comma ? t5.comma : C.comma, decoder: "function" == typeof t5.decoder ? t5.decoder : C.decoder, delimiter: "string" == typeof t5.delimiter || d.isRegExp(t5.delimiter) ? t5.delimiter : C.delimiter, depth: "number" == typeof t5.depth || false === t5.depth ? +t5.depth : C.depth, ignoreQueryPrefix: true === t5.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof t5.interpretNumericEntities ? t5.interpretNumericEntities : C.interpretNumericEntities, parameterLimit: "number" == typeof t5.parameterLimit ? t5.parameterLimit : C.parameterLimit, parseArrays: false !== t5.parseArrays, plainObjects: "boolean" == typeof t5.plainObjects ? t5.plainObjects : C.plainObjects, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : C.strictNullHandling };
  }(r2);
  if ("" === t4 || null == t4)
    return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var e2 = "string" == typeof t4 ? function(t5, r3) {
    var n3, e3 = {}, o3 = (r3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(r3.delimiter, Infinity === r3.parameterLimit ? void 0 : r3.parameterLimit), i3 = -1, u3 = r3.charset;
    if (r3.charsetSentinel)
      for (n3 = 0; n3 < o3.length; ++n3)
        0 === o3[n3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[n3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[n3] && (u3 = "iso-8859-1"), i3 = n3, n3 = o3.length);
    for (n3 = 0; n3 < o3.length; ++n3)
      if (n3 !== i3) {
        var f3, a3, c2 = o3[n3], l2 = c2.indexOf("]="), s2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
        -1 === s2 ? (f3 = r3.decoder(c2, C.decoder, u3, "key"), a3 = r3.strictNullHandling ? null : "") : (f3 = r3.decoder(c2.slice(0, s2), C.decoder, u3, "key"), a3 = d.maybeMap(N(c2.slice(s2 + 1), r3), function(t6) {
          return r3.decoder(t6, C.decoder, u3, "value");
        })), a3 && r3.interpretNumericEntities && "iso-8859-1" === u3 && (a3 = T(a3)), c2.indexOf("[]=") > -1 && (a3 = x(a3) ? [a3] : a3), e3[f3] = k.call(e3, f3) ? d.combine(e3[f3], a3) : a3;
      }
    return e3;
  }(t4, n2) : t4, o2 = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(e2), u2 = 0; u2 < i2.length; ++u2) {
    var f2 = i2[u2], a2 = F(f2, e2[f2], n2, "string" == typeof t4);
    o2 = d.merge(o2, a2, n2);
  }
  return d.compact(o2);
}, I = /* @__PURE__ */ function() {
  function t4(t5, r2, n3) {
    var e2, o2;
    this.name = t5, this.definition = r2, this.bindings = null != (e2 = r2.bindings) ? e2 : {}, this.wheres = null != (o2 = r2.wheres) ? o2 : {}, this.config = n3;
  }
  var n2 = t4.prototype;
  return n2.matchesUrl = function(t5) {
    var r2 = this;
    if (!this.definition.methods.includes("GET"))
      return false;
    var n3 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function(t6, n4, e3, o3) {
      var i3, u3 = "(?<" + e3 + ">" + ((null == (i3 = r2.wheres[e3]) ? void 0 : i3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
      return o3 ? "(" + n4 + u3 + ")?" : "" + n4 + u3;
    }).replace(/^\w+:\/\//, ""), e2 = t5.replace(/^\w+:\/\//, "").split("?"), o2 = e2[0], i2 = e2[1], u2 = new RegExp("^" + n3 + "/?$").exec(o2);
    if (u2) {
      for (var f2 in u2.groups)
        u2.groups[f2] = "string" == typeof u2.groups[f2] ? decodeURIComponent(u2.groups[f2]) : u2.groups[f2];
      return { params: u2.groups, query: D(i2) };
    }
    return false;
  }, n2.compile = function(t5) {
    var r2 = this, n3 = this.parameterSegments;
    return n3.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(e2, o2, i2) {
      var u2, f2, a2;
      if (!i2 && [null, void 0].includes(t5[o2]))
        throw new Error("Ziggy error: '" + o2 + "' parameter is required for route '" + r2.name + "'.");
      if (n3[n3.length - 1].name === o2 && ".*" === r2.wheres[o2])
        return encodeURIComponent(null != (a2 = t5[o2]) ? a2 : "").replace(/%2F/g, "/");
      if (r2.wheres[o2] && !new RegExp("^" + (i2 ? "(" + r2.wheres[o2] + ")?" : r2.wheres[o2]) + "$").test(null != (u2 = t5[o2]) ? u2 : ""))
        throw new Error("Ziggy error: '" + o2 + "' parameter does not match required format '" + r2.wheres[o2] + "' for route '" + r2.name + "'.");
      return encodeURIComponent(null != (f2 = t5[o2]) ? f2 : "");
    }).replace(this.origin + "//", this.origin + "/").replace(/\/+$/, "") : this.template;
  }, r(t4, [{ key: "template", get: function() {
    return (this.origin + "/" + this.definition.uri).replace(/\/+$/, "");
  } }, { key: "origin", get: function() {
    return this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "";
  } }, { key: "parameterSegments", get: function() {
    var t5, r2;
    return null != (t5 = null == (r2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : r2.map(function(t6) {
      return { name: t6.replace(/{|\??}/g, ""), required: !/\?}$/.test(t6) };
    })) ? t5 : [];
  } }]), t4;
}(), P = /* @__PURE__ */ function(t4) {
  var e2, i2;
  function u2(r2, e3, o2, i3) {
    var u3;
    if (void 0 === o2 && (o2 = true), (u3 = t4.call(this) || this).t = null != i3 ? i3 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u3.t = n({}, u3.t, { absolute: o2 }), r2) {
      if (!u3.t.routes[r2])
        throw new Error("Ziggy error: route '" + r2 + "' is not in the route list.");
      u3.i = new I(r2, u3.t.routes[r2], u3.t), u3.u = u3.l(e3);
    }
    return u3;
  }
  i2 = t4, (e2 = u2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, o(e2, i2);
  var f2 = u2.prototype;
  return f2.toString = function() {
    var t5 = this, r2 = Object.keys(this.u).filter(function(r3) {
      return !t5.i.parameterSegments.some(function(t6) {
        return t6.name === r3;
      });
    }).filter(function(t6) {
      return "_query" !== t6;
    }).reduce(function(r3, e3) {
      var o2;
      return n({}, r3, ((o2 = {})[e3] = t5.u[e3], o2));
    }, {});
    return this.i.compile(this.u) + function(t6, r3) {
      var n2, e3 = t6, o2 = function(t7) {
        if (!t7)
          return R;
        if (null != t7.encoder && "function" != typeof t7.encoder)
          throw new TypeError("Encoder has to be a function.");
        var r4 = t7.charset || R.charset;
        if (void 0 !== t7.charset && "utf-8" !== t7.charset && "iso-8859-1" !== t7.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n3 = l.default;
        if (void 0 !== t7.format) {
          if (!b.call(l.formatters, t7.format))
            throw new TypeError("Unknown format option provided.");
          n3 = t7.format;
        }
        var e4 = l.formatters[n3], o3 = R.filter;
        return ("function" == typeof t7.filter || m(t7.filter)) && (o3 = t7.filter), { addQueryPrefix: "boolean" == typeof t7.addQueryPrefix ? t7.addQueryPrefix : R.addQueryPrefix, allowDots: void 0 === t7.allowDots ? R.allowDots : !!t7.allowDots, charset: r4, charsetSentinel: "boolean" == typeof t7.charsetSentinel ? t7.charsetSentinel : R.charsetSentinel, delimiter: void 0 === t7.delimiter ? R.delimiter : t7.delimiter, encode: "boolean" == typeof t7.encode ? t7.encode : R.encode, encoder: "function" == typeof t7.encoder ? t7.encoder : R.encoder, encodeValuesOnly: "boolean" == typeof t7.encodeValuesOnly ? t7.encodeValuesOnly : R.encodeValuesOnly, filter: o3, format: n3, formatter: e4, serializeDate: "function" == typeof t7.serializeDate ? t7.serializeDate : R.serializeDate, skipNulls: "boolean" == typeof t7.skipNulls ? t7.skipNulls : R.skipNulls, sort: "function" == typeof t7.sort ? t7.sort : null, strictNullHandling: "boolean" == typeof t7.strictNullHandling ? t7.strictNullHandling : R.strictNullHandling };
      }(r3);
      "function" == typeof o2.filter ? e3 = (0, o2.filter)("", e3) : m(o2.filter) && (n2 = o2.filter);
      var i3 = [];
      if ("object" != typeof e3 || null === e3)
        return "";
      var u3 = h[r3 && r3.arrayFormat in h ? r3.arrayFormat : r3 && "indices" in r3 ? r3.indices ? "indices" : "repeat" : "indices"];
      n2 || (n2 = Object.keys(e3)), o2.sort && n2.sort(o2.sort);
      for (var f3 = 0; f3 < n2.length; ++f3) {
        var a2 = n2[f3];
        o2.skipNulls && null === e3[a2] || w(i3, S(e3[a2], a2, u3, o2.strictNullHandling, o2.skipNulls, o2.encode ? o2.encoder : null, o2.filter, o2.sort, o2.allowDots, o2.serializeDate, o2.format, o2.formatter, o2.encodeValuesOnly, o2.charset));
      }
      var c2 = i3.join(o2.delimiter), s2 = true === o2.addQueryPrefix ? "?" : "";
      return o2.charsetSentinel && (s2 += "iso-8859-1" === o2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? s2 + c2 : "";
    }(n({}, r2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(t6, r3) {
      return "boolean" == typeof t6 ? Number(t6) : r3(t6);
    } });
  }, f2.v = function(t5) {
    var r2 = this;
    t5 ? this.t.absolute && t5.startsWith("/") && (t5 = this.p().host + t5) : t5 = this.h();
    var e3 = {}, o2 = Object.entries(this.t.routes).find(function(n2) {
      return e3 = new I(n2[0], n2[1], r2.t).matchesUrl(t5);
    }) || [void 0, void 0];
    return n({ name: o2[0] }, e3, { route: o2[1] });
  }, f2.h = function() {
    var t5 = this.p(), r2 = t5.pathname, n2 = t5.search;
    return (this.t.absolute ? t5.host + r2 : r2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n2;
  }, f2.current = function(t5, r2) {
    var e3 = this.v(), o2 = e3.name, i3 = e3.params, u3 = e3.query, f3 = e3.route;
    if (!t5)
      return o2;
    var a2 = new RegExp("^" + t5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    var c2 = new I(o2, f3, this.t);
    r2 = this.l(r2, c2);
    var l2 = n({}, i3, u3);
    return !(!Object.values(r2).every(function(t6) {
      return !t6;
    }) || Object.values(l2).some(function(t6) {
      return void 0 !== t6;
    })) || Object.entries(r2).every(function(t6) {
      return l2[t6[0]] == t6[1];
    });
  }, f2.p = function() {
    var t5, r2, n2, e3, o2, i3, u3 = "undefined" != typeof window ? window.location : {}, f3 = u3.host, a2 = u3.pathname, c2 = u3.search;
    return { host: null != (t5 = null == (r2 = this.t.location) ? void 0 : r2.host) ? t5 : void 0 === f3 ? "" : f3, pathname: null != (n2 = null == (e3 = this.t.location) ? void 0 : e3.pathname) ? n2 : void 0 === a2 ? "" : a2, search: null != (o2 = null == (i3 = this.t.location) ? void 0 : i3.search) ? o2 : void 0 === c2 ? "" : c2 };
  }, f2.has = function(t5) {
    return Object.keys(this.t.routes).includes(t5);
  }, f2.l = function(t5, r2) {
    var e3 = this;
    void 0 === t5 && (t5 = {}), void 0 === r2 && (r2 = this.i), null != t5 || (t5 = {}), t5 = ["string", "number"].includes(typeof t5) ? [t5] : t5;
    var o2 = r2.parameterSegments.filter(function(t6) {
      return !e3.t.defaults[t6.name];
    });
    if (Array.isArray(t5))
      t5 = t5.reduce(function(t6, r3, e4) {
        var i4, u3;
        return n({}, t6, o2[e4] ? ((i4 = {})[o2[e4].name] = r3, i4) : "object" == typeof r3 ? r3 : ((u3 = {})[r3] = "", u3));
      }, {});
    else if (1 === o2.length && !t5[o2[0].name] && (t5.hasOwnProperty(Object.values(r2.bindings)[0]) || t5.hasOwnProperty("id"))) {
      var i3;
      (i3 = {})[o2[0].name] = t5, t5 = i3;
    }
    return n({}, this.m(r2), this.g(t5, r2));
  }, f2.m = function(t5) {
    var r2 = this;
    return t5.parameterSegments.filter(function(t6) {
      return r2.t.defaults[t6.name];
    }).reduce(function(t6, e3, o2) {
      var i3, u3 = e3.name;
      return n({}, t6, ((i3 = {})[u3] = r2.t.defaults[u3], i3));
    }, {});
  }, f2.g = function(t5, r2) {
    var e3 = r2.bindings, o2 = r2.parameterSegments;
    return Object.entries(t5).reduce(function(t6, r3) {
      var i3, u3, f3 = r3[0], a2 = r3[1];
      if (!a2 || "object" != typeof a2 || Array.isArray(a2) || !o2.some(function(t7) {
        return t7.name === f3;
      }))
        return n({}, t6, ((u3 = {})[f3] = a2, u3));
      if (!a2.hasOwnProperty(e3[f3])) {
        if (!a2.hasOwnProperty("id"))
          throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + e3[f3] + "'.");
        e3[f3] = "id";
      }
      return n({}, t6, ((i3 = {})[f3] = a2[e3[f3]], i3));
    }, {});
  }, f2.valueOf = function() {
    return this.toString();
  }, f2.check = function(t5) {
    return this.has(t5);
  }, r(u2, [{ key: "params", get: function() {
    var t5 = this.v();
    return n({}, t5.params, t5.query);
  } }]), u2;
}(/* @__PURE__ */ f(String)), $ = { install: function(t4, r2) {
  var n2 = function(t5, n3, e2, o2) {
    return void 0 === o2 && (o2 = r2), function(t6, r3, n4, e3) {
      var o3 = new P(t6, r3, n4, e3);
      return t6 ? o3.toString() : o3;
    }(t5, n3, e2, o2);
  };
  t4.mixin({ methods: { route: n2 } }), parseInt(t4.version) > 2 && t4.provide("route", n2);
} };
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/About.vue": __vite_glob_0_0, "./Pages/Contact.vue": __vite_glob_0_1, "./Pages/Home.vue": __vite_glob_0_2, "./Pages/Jobs.vue": __vite_glob_0_3, "./Pages/Project.vue": __vite_glob_0_4, "./Pages/Reviews.vue": __vite_glob_0_5 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      const app = createSSRApp({ render: () => h$1(App, props) });
      app.config.globalProperties.$replaceNewLines = function(string) {
        return string.replace(/\/\/n/g, "<br>");
      };
      return app.use(plugin).use(store).use($, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      });
    }
  })
);
