<template>
  <div class="inputbox in2">
    <textarea
      :value="inputValue"
      @input="onInput"
      :required="required"
      type="text"
      :data-maska="mask"
      placeholder="Описание проекта"
    ></textarea>
    <i></i>
  </div>
</template>

<script>
import { vMaska } from "maska";
export default {
  directives: { maska: vMaska },
  props: {
    input: {
      type: String,
      required: true,
      default: null,
    },
    mask: {
      type: String,
      default: null,
    },
    inputValue:{
        type: String,
        default: ""
    }
  },
  methods: {
    onInput(event) {
      this.inputValue = event.target.value;
      this.$emit("update:modelValue", this.inputValue);
    },
  },
  data() {
    return {
      maskedValue: "",
      bindedObject: {
        masked: "",
        unmasked: "",
        completed: false,
      },
      inputValue: this.value,
    };
  },
};
</script>

<style>
</style>