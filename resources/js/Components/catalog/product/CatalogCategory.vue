<template>
    <Link class="col-lg-4 container_category category-link" :to="'/catalog/category/'+category.url" v-for="category in categories" :key="category.id" >
        <img :src="JSON.parse(category.images)[0]" alt="Category Image" class="category-image">
        <h3 class="category-title">{{category.title}}</h3>
        <div class="category-description" v-html="category.description"></div>
    </Link>
</template>

<script>
import {Link} from "@inertiajs/vue3";
export default {
    components: {
        Link
    },
    props: {
        categories: {
            type: Array
        }
    },
}
</script>
