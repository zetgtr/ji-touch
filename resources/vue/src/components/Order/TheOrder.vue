<template>
  <section id="order" class="order">
    <div class="container order-container">
      <div class="order-container__wrapper">
        <div class="row">
          <div class="col-6">
            <the-order-content :row="row"></the-order-content>
          </div>
          <div class="col-6">
            <the-order-form></the-order-form>
          </div>
        </div>
      </div>
      <the-section-caption :sectionCaption="sectionCaption"></the-section-caption>
    </div>
  </section>

</template>

<script>
import TheOrderContent from "./TheOrderContent.vue";
import TheOrderForm from "./TheOrderForm.vue";
import TheSectionCaption from "./../TheSectionCaption.vue";
export default {
  components: {
    TheOrderContent,
    TheOrderForm,
    TheSectionCaption
  },
  data() {
    return {
      row: {
        title: "Расскажите<br> о вашем проекте",
        desc: "Кратко опишите свою задачу, и мы свяжемся с вами в кратчайшие сроки для обсуждения деталей проекта.",
        tel: "+7 905 262 49 68",
        mail: "info@ji-touch.ru",
      },
      sectionCaption: "contacts"
    };
  },
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