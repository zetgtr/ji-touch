<template>
  <div v-if="items.length > 0">
    <h3>Список вакансий</h3>
    <transition-group name="user-list">
      <jobs-item-vue
        v-for="item in items"
        :item="item"
        :key="item.id"
      />
    </transition-group>
  </div>
  <div v-else class="loader-container">
    <the-loader-vue></the-loader-vue>
  </div>
</template>

<script>
import TheLoaderVue from '../UI/TheLoader.vue'
import JobsItemVue from './JobsItem.vue'
export default {
  components: {JobsItemVue,TheLoaderVue},
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.4s ease;
}
.loader-container{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
