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
<!--      <the-section-caption-->
<!--        :sectionCaption="sectionCaption"-->
<!--      ></the-section-caption>-->
    </div>
  </section>
</template>

<script>
import TheOrderContent from "./../Components/Order/TheOrderContent.vue";
import TheOrderForm from "./../Components/Order/TheOrderForm.vue";
import TheSectionCaption from "./../Components/TheSectionCaption.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    props: {
        order: Array,
        contact: Array
    },
  components: {
    TheOrderContent,
    TheOrderForm,
    TheSectionCaption,
  },
  data() {
      console.log(this.contact[0])
    return {
      title: this.order[0].title,
      desc: this.order[0].desc,
      phone: this.contact.phone.value,
      email: this.contact.email.value,
      telegram: this.contact.telegram.value,
      whatsapp: this.contact.whatsapp.value,
      address: this.contact.address.value,
      worktime: this.contact.worktime.value,
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
