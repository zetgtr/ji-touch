<template>
  <div class="services_inner">
    <div class="container services_inner-container">
      <div class="services_inner-wrapper">
        <div class="row">
          <ServicesItem v-on:modal="showModal" :items="services_inner"></ServicesItem>
        </div>
      </div>
    </div>
  </div>
  <my-dialog :item="selectedItem" :flag="fullscreen"  v-model:show="dialogVisible" @accepted="showModal">
    
  </my-dialog>
</template>

<script>
import MyDialog from ".././../Components/UI/MyDialog.vue";
import ServicesItem from '../Services/ServicesItem.vue';
import { messageMixin } from ".././../Components/mixins/messageMixin";
export default {
  props: {
    services_inner: Array,
  },
  components: {
    ServicesItem,
    MyDialog,
  },
  data() {
    console.log(this.$page.props);
    return {
      dialogVisible: false,
      selectedItem: null,
      fullscreen: false,
    };
  },
  methods: {
    showModal(item, flag = false) {
      if(!!flag) {
        this.fullscreen = true;
      }
      this.selectedItem = item;
      this.dialogVisible = true;
      console.log(flag);
      document.body.classList.add('overflow')
    },
  }
};
</script>








