<template>
    <Head>
        <title>{{title}}</title>
    </Head>
    <the-header></the-header>
    <TheAnimateBg></TheAnimateBg>
    <first-component :first="first" v-on:modal="showModal"></first-component>
    <services-component :services="services"></services-component>
    <portfolio-component :portfolio="portfolio" :page='"home"'></portfolio-component>
    <company-component :company="company"></company-component>
    <order-component :order="order" :contact="contact"></order-component>
    <my-dialog v-model:show="dialogVisible" @accepted="showModal">
        <post-form @create="fetchForm" />
    </my-dialog>
     <the-swiper></the-swiper>
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

import firstComponent from "./../infusions/firstComponent.vue";
import servicesComponent from "./../infusions/servicesComponent.vue";
import portfolioComponent from "./../infusions/portfolioComponent.vue";
import companyComponent from "./../infusions/companyComponent.vue";
import orderComponent from "./../infusions/orderComponent.vue";
import TheFooterVue from '../components/TheFooter.vue';

import {Head} from "@inertiajs/vue3";
import {mapActions} from "vuex";

export default {
    props: {
        title: String,
        first: Array,
        services: Array,
        portfolio: Array,
        company: Array,
        order: Array,
        contact: Array
    },
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
        TheFooterVue
    },
    data() {
        return {
            dialogVisible: false,
        };
    },
    mixins: [messageMixin],
    methods: {
        showModal() {
            this.dialogVisible = true;
            document.body.classList.add('overflow')
        },
        showMessage(mess,status,flag,duration) {
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
                this.showMessage({ title: "Отправлено", content: "Ваша форма успешно отправлена" },"success", false, 3000);
                this.dialogVisible = false;
            } catch (error) {
                console.error(error);
                this.showMessage({ title: "Ошибка", content: "Ваша форма не отправлена" },"error", true, 3000);
            }
        },
    },
};
</script>
