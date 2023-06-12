<template>
    <Head>
        <title>{{meta.title}}</title>
        <meta name="description" :content="meta.description ?? $page.props.settings.description">
        <meta name="keywords" :content="meta.keywords ?? $page.props.settings.keywords">
    </Head>
  <the-header></the-header>
    <div class="content">
      <div class="container"><h2>{{ meta.title }}</h2></div>
      <div v-for="item in panels" :key="item.id">
        <component
          :is="components[item.alias]"
          :[item.alias]="item.content"
          v-bind="item.props"
          v-if="item.type === 'panel'"
        />
        <div
          v-if="item.type === 'text'"
          @click="handleLinkClick"
          v-html="item.content"
        />
      </div>
    </div>
  <the-footer></the-footer>
</template>

<script>
import { defineAsyncComponent, markRaw } from "@vue/runtime-core";
import TheHeader from "../Components/TheHeader.vue";
import TheFooter from "../../vue/src/components/TheFooter.vue";
import InnerLayoutVue from "../Loyauts/InnerLayout.vue";
import {Head} from "@inertiajs/vue3";

export default {
  components: { TheFooter,Head, TheHeader, InnerLayoutVue },
  layout: InnerLayoutVue,
  props: {
    meta: Array,
    panels: Array,
  },
  methods: {
    handleLinkClick(event) {
      const target = event.target;
      if (target.tagName === "A") {
        event.preventDefault();
        const href = target.getAttribute("href");
        this.$inertia.visit(href);
      }
    },
  },
  data() {
    const components = {};
    for (const item of this.panels) {
      if (item.type === "panel") {
        const componentName =
          item.alias.charAt(0).toUpperCase() + item.alias.slice(1);
        components[item.alias] = markRaw(
          defineAsyncComponent(() =>
            import(`../Components/Panels/${componentName}.vue`)
          )
        );
      }
    }
    return {
      components,
    };
  },
};
</script>
