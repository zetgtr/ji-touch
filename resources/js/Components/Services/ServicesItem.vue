
<template>
    <div class="col-lg-4 services_inner__item-container" v-for="(item, index) in items" :key="item.id">
        <div class="services_inner__item">
            <h2>{{ item.title }}</h2>
            <div class="services_inner__item-logo-container">
                <div class="services_inner__item-logo" v-html="item.img">
                </div>
                <span>{{ item.title }}</span>
            </div>
            <div class="services_inner__item-desc" v-html="$replaceNewLines(item.desc)">
            </div>
            <TheMoreButton @click.prevent="showModal(item, true)"><span>Узнать больше</span></TheMoreButton>
            <div class="count">{{ index + 1 }}</div>
        </div>
    </div>
</template>

<script>
import { onMounted, nextTick, ref } from "vue";
import Fancybox from "./../UI/Fancybox.vue";
import TheMoreButton from '../UI/TheMoreButton.vue';
export default {
    components: {
        Fancybox,
        TheMoreButton,
    },
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    methods: {
        showModal(item, flag) {
            this.$emit("modal", item, flag);
        }
    }
}
</script>


