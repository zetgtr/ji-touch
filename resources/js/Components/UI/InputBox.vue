<template>
  <div class="inputbox">
    <input
      :value="value"
      @input="onInput"
      type="text"
      v-maska
      :data-maska="mask"
    />
    <span>{{ label }}</span>
    <i></i>
  </div>
</template>

<script>
import { vMaska } from "maska";
export default {
  directives: { maska: vMaska },
  props: {
    value: {
      type: String,
      default: "",
    },
    mask: {
      type: String,
      default: null,
    },
    label: {
      type: String,
    },
  },
  methods: {
    onInput(event) {
      this.$emit("dich", event.target.value);
    },
  },
};
</script>

<style lang='scss'>

</style>
