<template>
    <Link href="/catalog/cart" class="cart ml-5">
        <i class="fad fa-shopping-cart"></i>
        <div class="cart_count">{{count}}</div>
    </Link>
</template>

<script>
import {mapState} from "vuex";

import {Link} from "@inertiajs/vue3";

export default {
    components: {
        Link
    },
    computed: {
        ...mapState({
            count: (state) => state.cart.count,
        }),
    },
}
</script>

