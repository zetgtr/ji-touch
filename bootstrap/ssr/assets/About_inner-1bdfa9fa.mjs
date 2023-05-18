import { computed, onMounted, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { _ as _export_sfc } from "../ssr.mjs";
import { T as TheAboutListVue } from "./TheAboutList-4467da9c.mjs";
import { Pagination, Navigation } from "swiper";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import "@inertiajs/vue3";
import "animejs";
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
const About_inner_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  components: {
    TheAboutListVue,
    Swiper,
    SwiperSlide
  },
  props: {
    about_inner: Array
  },
  setup() {
    const store = useStore();
    const tabs = computed(() => store.state.about.tabs);
    const slider = computed(() => store.state.about.slider);
    onMounted(() => {
      store.dispatch("about/fetchInfo");
    });
    return {
      tabs,
      slider,
      modules: [Pagination, Navigation]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Panels/About_inner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About_inner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  About_inner as default
};
