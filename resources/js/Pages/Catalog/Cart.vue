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
            addCart: "cartModule/addCart",
            deleteCart: "cartModule/deleteCart",
            removeCart: "cartModule/removeCart",
            deleteProductCart: "cartModule/deleteProductCart",
        })
    },
    computed: {
        ...mapGetters({
            totalPrice: 'cartModule/totalPrice'
        }),
        ...mapState({
            cart: (state) => state.cartModule.cart,
            count: (state) => state.cartModule.count,
        }),
    },
    mounted() {
        document.title = "Корзина"
    },
    watch: {},
};
</script>

