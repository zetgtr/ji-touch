<template>
    Product
    <div class="container">
        <div class="cart_items" v-for="(item, index) in cart" :key="index">
            <div v-if="item" class="cart_product">
                <p>{{item.title}}</p>
                <button @click="deleteCart(item)" >-</button>
                <button @click="addCart(item)" >+</button>
                <button @click="deleteProductCart(item)" >x</button>
                <p>{{item.count}}</p>
            </div>
        </div>
        <button @click="removeCart()" >Очистить корзину</button>
        <div>
            <p>Общая стоимость: {{ totalPrice }} руб.</p>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import {useRouter} from "vue-router";

export default {
    data() {
        // this.fetchInfo()
        return {
        };
    },
    methods: {
        ...mapMutations({}),
        ...mapActions({
            addCart: "cart/addCart",
            deleteCart: "cart/deleteCart",
            removeCart: "cart/removeCart",
            deleteProductCart: "cart/deleteProductCart",
        })
    },
    computed: {
        ...mapGetters({
            totalPrice: 'cart/totalPrice'
        }),
        ...mapState({
            cart: (state) => state.cart.cart,
            count: (state) => state.cart.count,
        }),
    },
    watch: {},
};
</script>

