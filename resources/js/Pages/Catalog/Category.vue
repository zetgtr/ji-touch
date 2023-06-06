<template>
    category
    <div class="breadcrumbs">
        <Head :title="$page.props.title" />
        <Link :href="route('home')">Главная</Link>
        <Link :href="route('catalog')">Каталог</Link>
        <Link :href="route('catalog.category',{category:item.url})" v-for="item in $page.props.breadcrumbs">
            {{item.title}}
        </Link>
    </div>
    <div class="container row">
        <CatalogCart />
        <CatalogCategory />
        <CatalogProducts />
    </div>
</template>


<script>
import {Link} from "@inertiajs/vue3";
import CatalogCart from "./../../Components/catalog/cart/CatalogCart.vue"
import CatalogCategory from "./../../Components/catalog/categories/CatalogCategory.vue"
import CatalogProducts from "./../../Components/catalog/categories/CatalogProducts.vue"
import {Head} from "@inertiajs/vue3";

export default {
    components: {
        Head,
        CatalogCategory,
        CatalogProducts,
        CatalogCart,
        Link
    }
}
</script>
