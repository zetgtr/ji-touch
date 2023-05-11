<template>
    <router-link to="/catalog/cart" class="cart ml-5">
        <i class="fad fa-shopping-cart"></i>
        <div class="cart_count">{{count}}</div>
    </router-link>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "CatalogCart",
    computed: {
        ...mapState({
            count: (state) => state.cartModule.count,
        }),
    },
}
</script>

<style scoped>
.cart_count{
    position: absolute;
    top: 15px;
    left: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #00a1e0;
    color: white;
    font-size: 14px;
    text-align: center;
    line-height: 20px;
    margin-left: 5px;
}

.cart_count::before {
    content: "";
    display: block;
    position: absolute;
    top: -2px;
    left: -2px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #00a1e0;
}

.cart{
    position: relative;
}
</style>
