<template>
  <div class="order-left">
    <h2 v-html="row.title"></h2>
    <p>
      {{ row.desc }}
    </p>
    <div class="order-contacts">
      <a class="order-contacts-tel" href="{{contact.phone}}">{{ contact.phone }}</a>
      <a class="order-contacts-mail" href="mailto:{{contact.email}}">{{
        contact.email
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    row: {
      type: Object,
      required: true,
    },
    contact:{
      type: Object,
      required: true,
    }
  },
};
</script>
