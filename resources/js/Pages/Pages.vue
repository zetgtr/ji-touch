<template>

</template>

<script>
export default {
    props: {
        title: String,
        panels: Array
    },
    mounted() {
        console.log(this.panels)
    }
}
</script>

<style scoped>

</style>
