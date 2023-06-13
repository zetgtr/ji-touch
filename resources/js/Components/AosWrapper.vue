<template>
  <div class="aos-wrapper">
    <slot></slot>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
.aos-wrapper {
  /* Добавьте стили для контейнера, если требуется */
}
</style>