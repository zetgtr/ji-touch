<template>
  <button
    class="tabButton"
    :class="{ active: isActive }"
    @click="$emit('click')"
  >
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>