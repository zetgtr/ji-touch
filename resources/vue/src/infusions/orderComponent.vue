<template>
  <section id="order" class="order">
    <div class="container order-container">
      <div class="order-container__wrapper">
        <div class="row">
          <div class="col-6">
            <the-order-content :row="row" :contact="rowContact"></the-order-content>
          </div>
          <div class="col-6">
            <the-order-form></the-order-form>
          </div>
        </div>
      </div>
      <the-section-caption
        :sectionCaption="sectionCaption"
      ></the-section-caption>
    </div>
  </section>
</template>

<script>
import TheOrderContent from "./../components/Order/TheOrderContent.vue";
import TheOrderForm from "./../components/Order/TheOrderForm.vue";
import TheSectionCaption from "./../components/TheSectionCaption.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    TheOrderContent,
    TheOrderForm,
    TheSectionCaption,
  },
  data() {
    return {
      sectionCaption: "contacts",
    };
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      order: "order/fetchInfo",
      contact: "contact/fetchInfo",
    }),
  },
  mounted() {
    this.order();
    this.contact();
  },
  computed: {
    ...mapState({
      title: (state) => state.order.title,
      desc: (state) => state.order.desc,
      phone: (state) => state.contact.phone,
      email: (state) => state.contact.email,
    }),
    ...mapGetters({
      row: "order/row",
      rowContact: "contact/row"
    })
  },
  watch: {},
};
</script>


<style lang='scss'>
.order {
  position: relative;
  padding-top: 110px;
  padding-bottom: 145px;
  &-container__wrapper {
    z-index: 2;
    position: relative;
    background: #fff;
  }
}
</style>
