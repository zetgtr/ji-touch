<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <span class="dialog__close" @click.stop="hideDialog"></span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "./../../components/mixins/toggleMixin";

export default {
  name: "my-dialog",
  mixins: [toggleMixin],
  mounted() {
    console.log("dialog mounted");
  },
};
</script>

<style scoped lang='scss'>
.dialog {
  z-index: 999999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  position: relative;
  max-width: 600px;
  width: 100%;
  margin: auto;
  background: white;
  border-radius: 12px;
  min-width: 300px;
  min-height: 50px;
  padding: 20px;
}
.dialog__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  color: #eeeeee;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: background-color 0.3s;
  &:after{
        content: "\f00d";
    font-family: "Font Awesome 5 Free";
    font-weight: bold;
    font-size: 12px;
  }
  &:hover{
        background-color: var(--c-primary);
  }
}
</style>