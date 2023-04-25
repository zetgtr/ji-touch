<template>
    <test2-component />
    <test-component />
</template>

<script>

    import test2Component from '../../infusions/test2Component.vue'
    import testComponent from '../../infusions/testComponent.vue'

    export default {
        components: {
            test2Component,
            testComponent,
            },
        data(){
            return{
                captionTitle: 'test2',
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
