export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false);
            document.body.classList.remove('overflow')
          },
    },
    mounted() {
        console.log('mixin mounted')
    }
    // ...
}
