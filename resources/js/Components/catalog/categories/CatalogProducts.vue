<template>
    <Link class="col-lg-4 container_category category-link" :href="route('catalog.product', {product: product.url})" v-for="product in $page.props.catalog.products" :key="product.id" >
        <img :src="product.images" alt="Category Image" class="category-image">
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
}
</script>

