import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../ssr.mjs";
const TheAboutList_vue_vue_type_style_index_0_scoped_e57388c2_lang = "";
const _sfc_main = {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(mergeProps({
    class: ["list-reset", _ctx.classes]
  }, _attrs))} data-v-e57388c2><!--[-->`);
  ssrRenderList($props.tabs, (tab, index) => {
    _push(`<li class="nav__item" data-v-e57388c2></li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/About/TheAboutList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TheAboutListVue = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e57388c2"]]);
export {
  TheAboutListVue as T
};
