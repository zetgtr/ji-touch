<template>
    <Head>
        <title>{{title}}</title>
    </Head>
    <the-header></the-header>
    <div class="content">
        <div class="container">
            <h1>{{title}}</h1>
<!--            <BreadCrumbs :breadcrumbs="breadcrumbs"></BreadCrumbs>-->
        </div>
<!--        <portfolio-component :page='"inner"'></portfolio-component>-->
    </div>
</template>

<script>
// import BreadCrumbs from "../components/BreadCrumbs.vue";
import TheHeader from "../Components/TheHeader.vue";
import portfolioComponent from "./../infusions/portfolioComponent.vue";

import {Head} from "@inertiajs/vue3";

export default {
    props: {
        title: String
    },
    components: {
        Head,
        TheHeader,
        portfolioComponent
    },
    created() {
        // this.breadcrumbs = this.$route.meta.breadcrumbs;
        // console.log(this.breadcrumbs);
    },
};
</script>

<style scoped lang='scss'>

</style>

