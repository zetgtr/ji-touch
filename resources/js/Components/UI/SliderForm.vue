<template>
  <div class="inputbox">
    <span>Бюджет проекта</span>
    <Slider :value="value" :min="min" :max="max" @input="updateBudget" :format="format"  />
  </div>
</template>

<script>
import Slider from "@vueform/slider";

export default {
  components: { Slider },
  props: {
    value: {
      type: Array,
      default: [50000, 200000],
    },
  },
  data: () => ({
    value: [5000, 100000],
    min: 5000,
    max: 1000000,
    format: function (value) {
        return `${Math.floor(value / 1000)} 000 ₽`;
      }
  }),
  methods: {
    updateBudget(value) {
      this.$emit("update:budget", value);
    },
  },
};
</script>
<style lang="scss">
:root {
  --slider-tooltip-bg: #ef7f1a;
  --slider-connect-bg: #ef7f1a;
  --slider-tooltip-font-size: 14px;
}
</style>
<style src="@vueform/slider/themes/default.css">
</style>
<style lang="scss" scoped>
.inputbox {
  height: 90px;
  display: flex;
  width: 100%;
  grid-area: 3 / span 2;

  .slider-horizontal {
    height: 2px;
    width: 100%;
    width: 95%;
    margin: auto auto 0;
  }
  .slider-horizontal .slider-tooltip-top {
    font-size: 14px !important;
    background: var(--c-primary) !important;
    border-color: var(--c-primary) !important;
  }
}
</style>