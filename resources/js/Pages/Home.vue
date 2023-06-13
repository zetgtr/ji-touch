<template>

  <Head>
    <title>{{ title }}</title>
  </Head>
  <the-header></the-header>
  <TheAnimateBg></TheAnimateBg>
  <first-component v-on:modal="showModal"></first-component>
  <services-component></services-component>
  <portfolio-component
    :portfolio="lastItems()"
  ></portfolio-component>
  <company-component></company-component>
  <order-component></order-component>
  <my-dialog v-model:show="dialogVisible" @accepted="showModal">
    <post-form @create="fetchForm" />
  </my-dialog>
  <div id="messages"></div>
  <the-footer-vue></the-footer-vue>

</template>

<script>
// @ is an alias to /src
import TheHeader from "../Components/TheHeader.vue";
import TheAnimateBg from "../Components/TheAnimateBg.vue";
import TheSwiper from "../Components/Services/TheSwiper.vue";
import MyDialog from "../Components/UI/MyDialog.vue";
import PostForm from "../Components/Modal/PostForm.vue";
import { messageMixin } from "../Components/mixins/messageMixin";

// panels

import firstComponent from "./../Components/Panels/First.vue";
import servicesComponent from "../Components/Panels/Services.vue";
import portfolioComponent from "../Components/Panels/Portfolio.vue";
import companyComponent from "../Components/Panels/Company.vue";
import orderComponent from "../Components/Panels/Order.vue";
import TheFooterVue from "../Components/TheFooter.vue";

import { Head } from "@inertiajs/vue3";
import { mapActions } from "vuex";

export default {
  components: {
    Head,
    TheHeader,
    TheAnimateBg,
    TheSwiper,
    MyDialog,
    PostForm,
    firstComponent,
    servicesComponent,
    portfolioComponent,
    companyComponent,
    orderComponent,
    TheFooterVue,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  mixins: [messageMixin],
  methods: {
    showModal(item, flag = false) {
      this.dialogVisible = true;
      document.body.classList.add("overflow");
    },
    showMessage(mess, status, flag, duration) {
      this.message(mess, status, flag, duration);
    },
    async fetchForm(data) {
      console.log(data);
      let form = data.data;
      let formName = data.form;
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("tel", form.tel);
      formData.append("email", form.email);
      formData.append("pages", form.pages);

      try {
        const response = await fetch("/api/form/" + formName, {
          method: "POST",
          body: formData,
        });

        const responseData = await response.json();
        console.log(responseData);
        if (responseData.status == true) {
          this.showMessage(
            { title: "Отправлено", content: "Ваша форма успешно отправлена" },
            "success",
            false,
            3000
          );
        } else {
          this.showMessage(
            { title: "Ошибка", content: "Ваша форма не отправлена" },
            "error",
            true,
            3000
          );
        }
        this.dialogVisible = false;
      } catch (error) {
        console.error(error);
        this.showMessage(
          { title: "Ошибка", content: "Ваша форма не отправлена" },
          "error",
          true,
          3000
        );
      }
    },
    lastItems() {
      const portfolio = this.$page.props.portfolio;
      const lastFourItems = portfolio[0].items.slice(-4); // Создаем копию последних 4 элементов массива items
      const modifiedPortfolio = [{ ...portfolio[0], items: lastFourItems }]; // Создаем модифицированную копию объекта portfolio

      return modifiedPortfolio;
    },
  },
};
</script>
