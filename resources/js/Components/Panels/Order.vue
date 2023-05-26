<template>
  <section id="order" class="order">
    <div class="container order-container">
      <div class="order-container__wrapper">
        <div class="row">
          <div class="col-6">
            <the-order-content :row="rowOrder()" :contact="rowContact()"></the-order-content>
          </div>
          <div class="col-6">
            <the-order-form></the-order-form>
          </div>
        </div>
      </div>
     <!-- <the-section-caption-->
<!--        :sectionCaption="sectionCaption"-->
<!--      ></the-section-caption> -->
    </div>
  </section>
</template>

<script>
import TheOrderContent from "../Order/TheOrderContent.vue";
import TheOrderForm from "../Order/TheOrderForm.vue";
import TheSectionCaption from "../TheSectionCaption.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    TheOrderContent,
    TheOrderForm,
    TheSectionCaption,
  },
  data() {
    return {
      title: this.$page.props.order[0].title,
      desc: this.$page.props.order[0].desc,
      phone: this.$page.props?.contact?.phone.value,
      email: this.$page.props?.contact?.email.value,
      telegram: this.$page.props?.contact?.telegram.value,
      whatsapp: this.$page.props?.contact?.whatsapp.value,
      address: this.$page.props?.contact?.address.value,
      worktime: this.$page.props?.contact?.worktime.value,
      sectionCaption: "contacts",
    };
  },
  methods: {
      rowOrder() {
          const state = {
              title: this.title,
              desc: this.desc
          }
          return Object.keys(state).reduce((obj, key) => {
              obj[key] = state[key];
              return obj;
          }, {});
      },
      rowContact() {
          const state = {
              phone: this.phone,
              email: this.email,
              telegram: this.telegram,
              whatsapp: this.whatsapp,
              address: this.address,
              worktime: this.worktime
          }
          return Object.keys(state).reduce((obj, key) => {
              obj[key] = state[key];
              return obj;
          }, {});
      },
  },
};
</script>


<style lang='scss'>

</style>
