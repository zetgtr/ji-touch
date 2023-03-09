<template>
  <div class="order-left">
    <h2 v-html="row.title"></h2>
    <p>
      {{ row.desc }}
    </p>
    <div class="order-contacts">
      <a class="order-contacts-tel" href="{{row.tel}}">{{ row.tel }}</a>
      <a class="order-contacts-mail" href="mailto:{{row.mail}}">{{
        row.mail
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
  },
};
</script>

<style lang='scss'>
.order {
  &-left {
    height: 100%;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 60px;
      line-height: 1.2 !important;
      margin-bottom: 4rem;
    }
    p {
      max-width: 80%;
    }
    .order-contacts {
      margin-top: auto;

      &-mail {
        color: var(--c-def);
      }
      &-tel {
        font-size: 1.5rem;
        color: var(--c-title);
      }
    }
  }

  &-contacts {
    display: flex;
    align-items: baseline;
    flex-direction: column;
  }
  
}
</style>