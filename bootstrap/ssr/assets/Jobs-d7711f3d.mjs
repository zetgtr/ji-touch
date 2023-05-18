import { mapMutations, mapActions, mapState } from "vuex";
import { useSSRContext, mergeProps, resolveComponent, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
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
const _sfc_main$4 = {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: ["tabButton", { active: $props.isActive }]
  }, _attrs))}><span>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span></button>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/TheTabButton.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const TheTabButton = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const JobsItem_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  components: {
    TheTabButton
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activeTab: "requirements"
      // Начально выбранная вкладка
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheTabButton = resolveComponent("TheTabButton");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "job" }, _attrs))}><div class="row"><div class="col-5" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column" })}"><h2>${ssrInterpolate($props.item.title)}</h2><div class="job-logo"><img${ssrRenderAttr("src", $props.item.img)} alt=""></div></div><div class="col-7" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "row-gap": "1.5rem" })}"><div class="tabs">`);
  _push(ssrRenderComponent(_component_TheTabButton, {
    isActive: $data.activeTab === "requirements",
    onClick: ($event) => $options.changeTab("requirements")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Требования`);
      } else {
        return [
          createTextVNode("Требования")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_TheTabButton, {
    isActive: $data.activeTab === "responsibilities",
    onClick: ($event) => $options.changeTab("responsibilities")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Обязанности`);
      } else {
        return [
          createTextVNode("Обязанности")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="desc">`);
  if ($data.activeTab === "requirements") {
    _push(`<div class="desc">${$props.item.requirements}</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.activeTab === "responsibilities") {
    _push(`<div class="desc">${$props.item.responsibilities}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><div class="hover"><svg width="385" height="324" viewBox="0 0 385 324" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M385 135L0.245727 0.89759L72.9843 157.228L10.6498 323.087L385 135Z" fill="#EF7F1A"></path></svg></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Jobs/JobsItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const JobsItemVue = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const TheLoader_vue_vue_type_style_index_0_scoped_dc245199_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "loader" }, _attrs))} data-v-dc245199><div class="orbe" style="${ssrRenderStyle({ "--index": "0" })}" data-v-dc245199></div><div class="orbe" style="${ssrRenderStyle({ "--index": "1" })}" data-v-dc245199></div><div class="orbe" style="${ssrRenderStyle({ "--index": "2" })}" data-v-dc245199></div><div class="orbe" style="${ssrRenderStyle({ "--index": "3" })}" data-v-dc245199></div><div class="orbe" style="${ssrRenderStyle({ "--index": "4" })}" data-v-dc245199></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UI/TheLoader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TheLoaderVue = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-dc245199"]]);
const JobsList_vue_vue_type_style_index_0_scoped_2b027af9_lang = "";
const _sfc_main$1 = {
  components: { JobsItemVue, TheLoaderVue },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jobs_item_vue = resolveComponent("jobs-item-vue");
  const _component_the_loader_vue = resolveComponent("the-loader-vue");
  if ($props.items.length > 0) {
    _push(`<div${ssrRenderAttrs(_attrs)} data-v-2b027af9><div class="wrapper" data-v-2b027af9><!--[-->`);
    ssrRenderList($props.items, (item, index) => {
      _push(ssrRenderComponent(_component_jobs_item_vue, {
        item,
        key: index
      }, null, _parent));
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "loader-container" }, _attrs))} data-v-2b027af9>`);
    _push(ssrRenderComponent(_component_the_loader_vue, null, null, _parent));
    _push(`</div>`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Jobs/JobsList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const JobsListVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-2b027af9"]]);
const _sfc_main = {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jobs_list_vue = resolveComponent("jobs-list-vue");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "jobs" }, _attrs))}><div class="container">`);
  _push(ssrRenderComponent(_component_jobs_list_vue, { items: _ctx.items }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Panels/Jobs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Jobs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Jobs as default
};
