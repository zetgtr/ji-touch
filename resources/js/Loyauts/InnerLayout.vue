<template>
  <div class="innerLayout">
    <router-view />
  </div>
</template>
<style lang="scss">
.innerLayout {
  background: var(--c-bg);
  .content {
    padding-top: 115px;
    padding-top: 155px;
    background: var(--c-bg);
    padding-bottom: 100px;
  }
}
</style>
