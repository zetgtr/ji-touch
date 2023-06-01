import { _ as _export_sfc, T as TheMoreButton, M as MyDialog } from "../ssr.mjs";
import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { F as Fancybox } from "./Fancybox-f894d5d1.mjs";
import { ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "vuex";
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
import "@fancyapps/ui";
const _sfc_main$1 = {
  components: {
    Fancybox,
    TheMoreButton
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    showModal(item, flag) {
      this.$emit("modal", item, flag);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheMoreButton = resolveComponent("TheMoreButton");
  _push(`<!--[-->`);
  ssrRenderList($props.items, (item, index) => {
    _push(`<div class="col-lg-4 services_inner__item-container"><div class="services_inner__item"><h2>${ssrInterpolate(item.title)}</h2><div class="services_inner__item-logo-container"><div class="services_inner__item-logo">${item.img}</div><span>${ssrInterpolate(item.title)}</span></div><div class="services_inner__item-desc">${_ctx.$replaceNewLines(item.desc)}</div>`);
    _push(ssrRenderComponent(_component_TheMoreButton, {
      onClick: ($event) => $options.showModal(item, true)
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span${_scopeId}>Узнать больше</span>`);
        } else {
          return [
            createVNode("span", null, "Узнать больше")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<div class="count">${ssrInterpolate(index + 1)}</div></div></div>`);
  });
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Services/ServicesItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ServicesItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: {
    services_inner: Array
  },
  components: {
    ServicesItem,
    MyDialog
  },
  data() {
    console.log(this.$page.props);
    return {
      dialogVisible: false,
      selectedItem: null,
      fullscreen: false
    };
  },
  methods: {
    showModal(item, flag = false) {
      if (!!flag) {
        this.fullscreen = true;
      }
      this.selectedItem = item;
      this.dialogVisible = true;
      console.log(flag);
      document.body.classList.add("overflow");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ServicesItem = resolveComponent("ServicesItem");
  const _component_my_dialog = resolveComponent("my-dialog");
  _push(`<!--[--><div class="services_inner"><div class="container services_inner-container"><div class="services_inner-wrapper"><div class="row">`);
  _push(ssrRenderComponent(_component_ServicesItem, {
    onModal: $options.showModal,
    items: $props.services_inner
  }, null, _parent));
  _push(`</div></div></div></div>`);
  _push(ssrRenderComponent(_component_my_dialog, {
    item: $data.selectedItem,
    flag: $data.fullscreen,
    show: $data.dialogVisible,
    "onUpdate:show": ($event) => $data.dialogVisible = $event,
    onAccepted: $options.showModal
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Panels/Services_inner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Services_inner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Services_inner as default
};
