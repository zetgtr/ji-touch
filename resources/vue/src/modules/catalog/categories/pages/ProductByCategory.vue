<template>
    category

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
        }),
        constructRoute(category) {
            const currentRoute = this.$route.path;
            return currentRoute +"/"+ category.url;
        },
    },
    mounted() {
        if(this.$route.params.slug)
            this.getCategoryBySlug(this.$route.params.slug);
        else {
            this.getCategoryByHome()
            console.log(this.categories)
        }
    },
    updated() {
        if(!this.$route.params.slug && this.url !== this.$route.params.slug)
        {
            this.getCategoryByHome()
        }else if(this.url !== this.$route.params.slug)
            this.getCategoryBySlug(this.$route.params.slug);
    },
    computed: {
        ...mapState({
            categories: (state) => state.catalogModule.categories,
            products: (state) => state.catalogModule.products,
            count: (state) => state.cartModule.count,
            url: (state) => state.catalogModule.url,
        }),
    },
    watch: {},
};
</script>

<style lang='scss'>
.container_category {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.category-image {
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    border-radius: 5px;
}

.category-title {
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
}

.category-description {
    margin-top: 0.5rem;
    text-align: center;
}

.category-link {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
    transition: all 0.3s ease;
}



.category-link:hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
}
</style>
