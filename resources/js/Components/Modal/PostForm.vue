<template>
  <form @submit.prevent>
    <h2>Создание поста</h2>
    <div class="wrapper">
      <InputBox
        :value="form.name"
        :class="{ 'has-value': form.name !== '' }"
        v-on:dich="form.name = $event"
        label="Ваше имя"
      />
      <InputBox
        :value="form.tel"
        :class="{ 'has-value': form.tel !== '' }"
        v-on:dich="form.tel = $event"
        label="Телефон"
        v-maska
        mask="+1 ### ###-##-##"
      />
      <InputBox
        :value="form.email"
        v-on:dich="form.email = $event"
        :class="{ 'has-value': form.email !== '' }"
        label="Email"
      />
    </div>
    <the-button
      style="align-self: flex-end; margin-top: 15px"
      @click.prevent="fetchForm"
      type="submit"
    >
      <span>Создать</span>
    </the-button>
  </form>
</template>

<script>
import InputBox from "./../UI/InputBox.vue";
import TheButton from "./../UI/TheButton.vue";
import { vMaska } from "maska";
export default {
  directives: { maska: vMaska },
  components: {
    InputBox,
    TheButton,
  },
  data() {
    return {
      form: {
        name: "",
        tel: "",
        email: "",
        pages: '',
      },
      formName: "feedback",
    };
  },
  methods: {
    fetchForm() {
      this.form.pages = window.location.href;
      this.$emit("create", { data: this.form, form: this.formName });
    },
  },
};
</script>

<style scoped lang='scss'>
form {
  display: flex;
  flex-direction: column;
}
h2{
  margin-bottom: 2rem;
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.button-click {
  color: #ffffff;
  &:hover {
    color: var(--c-primary);
  }
}


</style>
