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
.inputbox {
  position: relative;
  width: 196px;
  width: 100%;
}

.inputbox input {
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  // color: var(--c-white);
  color: var(--c-secondary);
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;
}
.inputbox input.def {
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  color: var(--c-def);
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;
}
.inputbox span {
  position: absolute;
  left: 0px;
  padding: 10px 10px 10px 0;
  font-size: 18px;
  // color: #8f8f8f;
  color: var(--c-grey);
  letter-spacing: 0.05em;
  transition: 0.5s;
  pointer-events: none;
}

.inputbox input.has-value ~ span,
.inputbox input:focus ~ span {
  color: var(--c-secondary);
  transform: translateX(-10px) translateY(-34px);
  font-size: 0.75em;
  padding: 20px 10px 10px 0;
}

.inputbox i {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  // background: var(--c-primary);
  background: var(--c-bg);
  border-radius: 4px;
  transition: 0.5s;
  pointer-events: none;
  z-index: 9;
}

.inputbox input.has-value ~ i,
.inputbox input:focus ~ i {
  height: 44px;
}
.inputbox.has-value i {
  height: 44px;
}
.inputbox.has-value input ~ span {
  color: var(--c-secondary);
  transform: translateX(-10px) translateY(-34px);
  font-size: 0.75em;
  padding: 20px 10px 10px 0;
}
.sogl {
  font-size: 0.7rem;
  color: #ccc;
}
</style>