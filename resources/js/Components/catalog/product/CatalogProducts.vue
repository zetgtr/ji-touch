<template>
    <Link class="col-lg-4 container_category category-link" :to="'/catalog/product/'+product.url" v-for="product in products" :key="product.id" >
        <img :src="JSON.parse(product.images)[0]" alt="Category Image" class="category-image">
        <h3 class="category-title">{{product.title}}</h3>
        <div class="category-description" v-html="product.description"></div>
    </Link>
</template>

<script>
import {Link} from "@inertiajs/vue3";
export default {
    components: {
        Link
    },
    props: {
        products: {
            type: Array
        }
    },
}
</script>

