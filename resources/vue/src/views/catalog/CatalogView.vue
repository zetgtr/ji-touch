<template>
    category
    <div v-for="category in categories" :key="category.id" >
        <router-link :to="constructRoute(category)">
            <p>{{category.title}}</p>
        </router-link>
    </div>
    <div v-for="product in products" :key="product.id" >
        <router-link :to="constructRoute(product)">
            <p>{{product.title}}</p>
        </router-link>
    </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import {useRouter} from "vue-router";

export default {
    components: {},
    data() {
        this.fetchInfo()
        return {
        };
    },
    methods: {
        ...mapMutations({}),
        ...mapActions({
            fetchInfo: "catalog/fetchInfo",
        }),
        constructRoute(category) {
            const currentRoute = this.$route.path;
            return currentRoute +"/"+ category.url;
        },
    },
    mounted() {
        this.fetchInfo();
    },
    updated() {
        const router = useRouter();
        const route = router.currentRoute._value
        const parts = route.path.split("/");
        const url = parts[parts.length - 1];
        if(this.url !==  url)
            this.fetchInfo();
    },
    computed: {
        ...mapState({
            categories: (state) => state.catalog.categories,
            products: (state) => state.catalog.products,
            url: (state) => state.catalog.url,
        }),
    },
    watch: {},
};
</script>

<style lang='scss'>
</style>
