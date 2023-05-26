<template>
    category
    <div class="breadcrumbs">
        <router-link to="/">Главная</router-link>
        <router-link to="/catalog/category">Каталог</router-link>
        <router-link :to="'/catalog/category/'+item.url" v-for="item in breadcrumbs">
            {{item.title}}
        </router-link>
    </div>
    <div class="container row">
        <catalog-cart />
        <catalog-category :categories="categories" />
        <catalog-products :products="products" />
    </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import {useRouter} from "vue-router";
import CatalogCategory from "../components/CatalogCategory.vue";
import CatalogProducts from "../components/CatalogProducts.vue";
import CatalogCart from "../../cart/components/CatalogCart.vue";

export default {
    components: {CatalogCart, CatalogProducts, CatalogCategory},
    data() {
        // this.fetchInfo()
        return {
        };
    },
    methods: {
        ...mapMutations({}),
        ...mapActions({
            getCategoryBySlug: "catalogModule/getCategoryBySlug",
            getCategoryByHome: "catalogModule/getCategoryByHome",
            getBreadcrumb: "catalogModule/getBreadcrumb",
        }),
        constructRoute(category) {
            const currentRoute = this.$route.path;
            return currentRoute +"/"+ category.url;
        },
    },
    mounted() {
        if(this.$route.params.slug) {
            this.getCategoryBySlug(this.$route.params.slug);
            this.getBreadcrumb(this.$route.params.slug);
        } else {
            this.getCategoryByHome()
            this.getBreadcrumb('category')
            console.log(this.categories)
        }
    },
    updated() {
        if(!this.$route.params.slug && this.url !== this.$route.params.slug)
        {
            this.getBreadcrumb('category')
            this.getCategoryByHome()
        }else if(this.url !== this.$route.params.slug) {
            this.getCategoryBySlug(this.$route.params.slug);
            this.getBreadcrumb(this.$route.params.slug)
        }
        document.title = this.secondCategory.seo_title || this.secondCategory.title
    },
    computed: {
        ...mapState({
            categories: (state) => state.catalogModule.categories,
            products: (state) => state.catalogModule.products,
            count: (state) => state.cartModule.count,
            url: (state) => state.catalogModule.url,
            secondCategory: (state) => state.catalogModule.secondCategory,
            breadcrumbs: (state) => state.catalogModule.breadcrumbs,
        }),
    },
    watch: {},
};
</script>

<style lang='scss'>

</style>
