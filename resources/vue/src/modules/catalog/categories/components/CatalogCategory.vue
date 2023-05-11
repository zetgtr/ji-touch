<template>
    <router-link class="col-lg-4 container_category category-link" :to="'/catalog/category/'+category.url" v-for="category in categories" :key="category.id" >
        <img :src="category.images" alt="Category Image" class="category-image">
        <h3 class="category-title">{{category.title}}</h3>
        <div class="category-description" v-html="category.description"></div>
    </router-link>
</template>

<script>
export default {
    name: "CatalogCategory",
    props: {
        categories: {
            type: Array
        }
    },
}
</script>

<style scoped>
</style>
