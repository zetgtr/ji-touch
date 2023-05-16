<template>
  <transition name="dialog" appear>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
      <div
        @click.stop
        class="dialog__content"
        :class="{ show: show, hide: !show }"
      >
        <span class="dialog__close" @click.stop="hideDialog"></span>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import toggleMixin from "./../../Components/mixins/toggleMixin";

export default {
  name: "my-dialog",
  mixins: [toggleMixin],
  mounted() {
    console.log("dialog mounted");
  },
};
</script>

<style scoped lang='scss'>

</style>
