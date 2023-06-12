<template>
  <div class="services_inner">
    <div class="container services_inner-container">
      <div class="services_inner-wrapper">
        <div class="row">
          <ServicesItem
            v-on:modal="showModal"
            :items="services_inner"
          ></ServicesItem>
        </div>
      </div>
    </div>
  </div>
  <my-dialog
    ref="dialogElement"
    :item="selectedItem"
    :flag="fullscreen"
    v-model:show="dialogVisible"
    @accepted="showModal"
  >
  </my-dialog>
</template>

<script>
import MyDialog from ".././../Components/UI/MyDialog.vue";
import ServicesItem from "../Services/ServicesItem.vue";
import toggleMixin from "./../../Components/mixins/toggleMixin";
import { messageMixin } from ".././../Components/mixins/messageMixin";
import { ref } from "vue";
export default {
  props: {
    services_inner: Array,
  },
  components: {
    ServicesItem,
    MyDialog,
  },
  mixins: [toggleMixin],
  data() {
    console.log(this.$page.props);
    return {
      dialogElement: null,
      dialogVisible: false,
      selectedItem: null,
      fullscreen: false,
    };
  },
  mounted() {
    this.dialogElement = this.$refs.dialogElement;
    console.log(this);
  },
  methods: {
    showModal(item, flag = false) {
      if (!!flag) {
        this.fullscreen = true;
      }
      this.beforeOpenDialog(this.dialogElement, item);
      this.selectedItem = item;
      this.dialogVisible = true;
      document.body.classList.add("overflow");
    },
    beforeOpenDialog(dialogElement, item) {
      console.log("Before opening dialog");
    },
  },
};
</script>








