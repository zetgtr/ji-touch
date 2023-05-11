<template>
    <router-link class="col-lg-4 container_category category-link" :to="'/catalog/product/'+product.url" v-for="product in products" :key="product.id" >
        <img :src="product.images" alt="Category Image" class="category-image">
        <h3 class="category-title">{{product.title}}</h3>
        <div class="category-description" v-html="product.description"></div>
    </router-link>
</template>

<script>
export default {
    name: "CatalogProducts",
    props: {
        products: {
            type: Array
        }
    },
}
</script>

<style scoped>

</style>
