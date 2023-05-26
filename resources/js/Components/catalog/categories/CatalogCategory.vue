<template>
    <Link class="col-lg-4 container_category category-link" :href="route('catalog.category',{category:category.url})" v-for="category in $page.props.catalog.categories" :key="category.id" >
        <img :src="category.images" alt="Category Image" class="category-image">
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
}
</script>
