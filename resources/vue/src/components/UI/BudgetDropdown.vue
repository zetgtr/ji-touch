<template>
  <div class="dropdown" @click="toggleDropdown">
    <input
      type="text"
      class="textBox def"
      :placeholder="placeholder"
      readonly
    />
    <div class="option" @click="selectOption">
      <div v-for="option in options" :key="option">{{ option }}</div>
    </div>
    <i></i>
  </div>
</template>

<script>
export default {
  name: "BudgetDropdown",
  props: {
    placeholder: {
      type: String,
      default: "Бюджет проекта",
    },
    options: {
      type: Array,
      default: () => [1, 2, 3, 4],
    },
  },
  methods: {
    toggleDropdown(e) {
      e.target.closest(".dropdown").classList.toggle("active");
    },
    selectOption(e) {
      const selectedOption = e.target.closest("div").textContent.trim();
      const textBox = e.target.closest(".dropdown").querySelector(".textBox");
      textBox.value = selectedOption;
      this.$emit('update:modelValue', selectedOption);
    },
  },
};
</script>

<style lang='scss'>
.dropdown {
  position: relative;
  width: 100%;
  height: 60px;
  // background: var(--c-primary);
  border-radius: 4px;

  i {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: var(--c-bg);
    border-radius: 4px;
    transition: 0.5s;
    pointer-events: none;
    z-index: 9;
    height: 2px !important;
  }
  &::before {
    content: "";
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 2;
    width: 10px;
    height: 10px;
    // border: 2px solid var(--c-primary);
    border: 2px solid var(--c-grey);
    border-top: 2px solid var(--c-white);
    border-right: 2px solid var(--c-white);
    transform: rotate(-45deg);
    transition: 0.5s;
    pointer-events: none;
  }
  input {
    background: var(--c-primary);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    outline: none;
    border: none;
    padding: 12px;
    border-radius: 10px;
    color: var(--c-white);
    padding: 0 !important;
    font-size: 18px !important;
    &::placeholder {
      color: var(--c-def);
    }
  }
  .option {
    z-index: 10;
    position: absolute;
    top: 70px;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    display: none;
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    div {
      padding: 12px 20px;
      cursor: pointer;
      &:hover {
        background-color: #63baea;
        color: var(--c-white);
      }
    }
  }
  &.active {
    &::before {
      top: 28px;
      transform: rotate(-225deg);
    }
    .option {
      display: block;
    }
  }
  .def {
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
}
</style>