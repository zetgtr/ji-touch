<template>
    Product
    <div class="container">
        <CatalogCart />
        <div class="product">
            <img :src="$page.props.product.images" alt="Product image">
            <h2 class="product-title">{{$page.props.product.title}}</h2>
            <div class="product-description" v-html="$page.props.product.description"></div>
            <p class="product-price">{{$page.props.product.price}}</p>
            <button @click="addCart($page.props.product)" class="add-to-cart-btn">Добавить в корзину</button>
        </div>
    </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

import CatalogCart from "./../../Components/catalog/cart/CatalogCart.vue";

export default {
    components: { CatalogCart},
    data() {
        return {
        };
    },
    methods: {
        ...mapMutations({}),
        ...mapActions({
            addCart: "cartModule/addCart",
        })
    },
};
</script>
