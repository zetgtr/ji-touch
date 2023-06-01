<template>
  <transition name="dialog" appear>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
      <div
        @click.stop
        class="dialog__content"
        :class="{ show: show, hide: !show , fullscreen: showFullscreen}"
      >
        <span class="dialog__close" @click.stop="hideDialog"></span>
        <slot>
          <!-- Добавьте код для отображения свойства item -->
          <h2>{{ item.title }}</h2>
          <p v-html="$replaceNewLines(item.desc)"></p>
          <!-- и т.д. -->
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
import toggleMixin from "./../../Components/mixins/toggleMixin";

export default {
  name: "my-dialog",
  mixins: [toggleMixin],
  props: {
    item: {
      type: Object,
      required: false,
    },
    flag: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showFullscreen() {
      return this.flag;
    },
  },

  mounted() {
    console.log("flag", this.flag);
  },
};
</script>

<style scoped lang="scss">
/* Стили для модального окна */
</style>