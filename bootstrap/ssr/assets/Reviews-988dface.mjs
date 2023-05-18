import { mapMutations, mapActions, mapState } from "vuex";
import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, openBlock, createBlock } from "vue";
import { Fancybox as Fancybox$1 } from "@fancyapps/ui";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../ssr.mjs";
import "@inertiajs/vue3";
import "animejs";
import "swiper/vue";
import "swiper";
import "maska";
import "gsap";
import "vanilla-tilt";
import "axios";
import "wnumb";
import "nouislider";
import "@vue/runtime-core";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "vuex-persistedstate";
const fancybox = "";
const _sfc_main$2 = {
  props: {
    options: Object
  },
  mounted() {
    Fancybox$1.bind(this.$refs.container, "[data-fancybox]", {
      ...this.options || {}
    });
  },
  updated() {
    Fancybox$1.unbind(this.$refs.container);
    Fancybox$1.close();
    Fancybox$1.bind(this.$refs.container, "[data-fancybox]", {
      ...this.options || {}
    });
  },
  unmounted() {
    Fancybox$1.destroy();
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ ref: "container" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/Fancybox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Fancybox = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const ReviewItem_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    Fancybox
  },
  setup(props) {
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Fancybox = resolveComponent("Fancybox");
  _push(`<!--[-->`);
  ssrRenderList($props.items, (item) => {
    _push(`<div class="review__item"><div class="row"><div class="col-5" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}"><h2>${ssrInterpolate(item.title)}</h2><div class="review__item-logo"><img${ssrRenderAttr("src", item.logo)} alt=""></div></div><div class="col-7" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}"><div class="desc">${item.desc}</div>`);
    _push(ssrRenderComponent(_component_Fancybox, {
      style: { "margin-top": "auto" },
      options: {
        Carousel: {
          infinite: false
        }
      }
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<a class="more" data-fancybox="gallery"${ssrRenderAttr("href", item.img)}${_scopeId}><span${_scopeId}>Узнать больше</span><svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><g clip-path="url(#clip0_6_2)"${_scopeId}><path d="M37.1093 6.53033C37.4022 6.23744 37.4022 5.76256 37.1093 5.46967L32.3363 0.696698C32.0434 0.403805 31.5685 0.403805 31.2756 0.696698C30.9828 0.989592 30.9828 1.46447 31.2756 1.75736L35.5183 6L31.2756 10.2426C30.9828 10.5355 30.9828 11.0104 31.2756 11.3033C31.5685 11.5962 32.0434 11.5962 32.3363 11.3033L37.1093 6.53033ZM0 6.75H36.5789V5.25H0V6.75Z" fill="black"${_scopeId}></path><rect x="7" y="5" width="2" height="2" fill="white"${_scopeId}></rect><rect x="3" y="5" width="2" height="2" fill="white"${_scopeId}></rect></g><defs${_scopeId}><clipPath id="clip0_6_2"${_scopeId}><rect width="38" height="12" fill="white"${_scopeId}></rect></clipPath></defs></svg></a>`);
        } else {
          return [
            createVNode("a", {
              class: "more",
              "data-fancybox": "gallery",
              href: item.img
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
            ], 8, ["href"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Reviews/ReviewItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ReviewItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const Reviews_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_review_item = resolveComponent("review-item");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "reviews" }, _attrs))}><div class="container"><div class="rewievs__wrapper wow fadeIn" data-wow-delay="0.2s">`);
  _push(ssrRenderComponent(_component_review_item, { items: _ctx.items }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Panels/Reviews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Reviews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Reviews as default
};
