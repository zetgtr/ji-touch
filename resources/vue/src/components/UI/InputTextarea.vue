<template>
  <div class="inputbox in2">
    <textarea
      :value="value"
      @input="onInput"
      :placeholder="placeholder"
    ></textarea>
    <i></i>
  </div>
</template>

<script>
export default {
  props: {
    value:{
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInput(event) {
      this.$emit("textarea", event.target.value);
    },
  },
};
</script>
<style>
</style>