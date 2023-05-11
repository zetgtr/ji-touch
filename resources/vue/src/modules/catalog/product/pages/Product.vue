<template>
    Product
    <div class="container">
        <catalog-cart />
        <div class="product">
            <img :src="product.images" alt="Product image">
            <h2 class="product-title">{{product.title}}</h2>
            <div class="product-description" v-html="product.description"></div>
            <p class="product-price">{{product.price}}</p>
            <button @click="addCart(product)" class="add-to-cart-btn">Добавить в корзину</button>
        </div>
    </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

import CatalogCart from "../../cart/components/CatalogCart.vue";

export default {
    components: { CatalogCart},
    data() {
        // this.fetchInfo()
        return {
        };
    },
    methods: {
        ...mapMutations({}),
        ...mapActions({
            getProductBySlug: "productModule/getProductBySlug",
            addCart: "cartModule/addCart",
        })
    },
    mounted() {
        this.getProductBySlug(this.$route.params.slug);
    },
    updated() {
        if(this.url !== this.$route.params.slug)
            this.getProductBySlug(this.$route.params.slug);
        document.title = this.product.seo_title || this.product.title
    },
    computed: {
        ...mapState({
            product: (state) => state.productModule.product,
            url: (state) => state.productModule.url,
        }),
    },
    watch: {

    },
};
</script>

<style lang='scss'>
.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
}

.product-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

.product-description {
    margin-bottom: 10px;
}

.product-price {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.add-to-cart-btn {
    background-color: #0066cc;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.add-to-cart-btn:hover {
    background-color: #004499;
}
</style>
