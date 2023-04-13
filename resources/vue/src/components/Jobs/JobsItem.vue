<template>
  <div class="post">
    <div>
      <div>{{ item.id }}</div>
      <div><strong>Название:</strong> {{ item.title }}</div>
      <div><strong>Описание:</strong> {{ item.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
}
</style>
