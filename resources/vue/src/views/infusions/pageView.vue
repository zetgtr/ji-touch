<template>
    <article-component />
</template>

<script>

    import articleComponent from '../../infusions/articleComponent.vue'

    export default {
        components: {
            articleComponent,
            },
        data(){
            return{
                captionTitle: 'page',
            }
        },
        created() {
            this.breadcrumbs = this.$route.meta.breadcrumbs;
            console.log(this.breadcrumbs);
        },
    };
</script>

<style scoped lang='scss'>

</style>
