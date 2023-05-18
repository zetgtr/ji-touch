<template>
  <div class="innerLayout">
    <slot class="content" />
  </div>
</template>
<style lang="scss">
.innerLayout {
  background: var(--c-bg);
  .content {
    padding-top: 115px;
    padding-top: 155px;
    background: var(--c-bg);
    // padding-bottom: 100px;
  }
  .container .container{
    padding: 0;
  }
  .footer{
    padding-top: 0;
  }
  .order{
    padding-bottom: 50px;
  }
}
</style>
