<template>
  <div class="form">
    <form id="myForm">
      <div class="form__wrapper">
        <InputBox
          :value="form.name"
          v-on:dich="form.name = $event"
          :class="{ 'has-value': form.name !== '' }"
          label="Ваше имя"
          id="name"
          v-on:click="clearError($event, 'name')"
          data-input="name"
        />
        <InputBox
          :value="form.company"
          v-on:dich="form.company = $event"
          :class="{ 'has-value': form.company !== '' }"
          label="Компания"
        />

        <InputBox
          :value="form.tel"
          v-on:dich="form.tel = $event"
          :class="{ 'has-value': form.tel !== '' }"
          label="Телефон"
          v-maska
          mask="+1 ### ###-##-##"
          id="tel"
          v-on:click="clearError($event, 'tel')"
          data-input="tel"
        />

        <InputBox
          :value="form.email"
          v-on:dich="form.email = $event"
          :class="{ 'has-value': form.email !== '' }"
          label="Email"
          id="email"
          v-on:click="clearError($event, 'email')"
          data-input="email"
        />
        <slider-form :value="form.price"  @update:budget="updateBudget">
        </slider-form>
        <BudgetDropdown
          :options="[1000, 5000, 10000]"
          v-model="form.price"
          :placeholder="'Бюджет проекта'"
        />
        <BudgetDropdown
          :options="[1000, 5000, 10000]"
          v-model="form.where"
          :placeholder="'Откуда узнали о нас'"
        />
          <InputTextareaVue
              :value="form.desc"
              v-on:textarea="form.desc = $event"
              :placeholder="'Откуда узнали о нас'"
          />
        <div class="file">
          <span
            >В чём заключается задача? Какие сроки реализации?<br />
            Несколько слов о компании.
          </span>
          <file-uploader v-on:uploadFile="uploadFile"> </file-uploader>
        </div>
        <div class="file-display--container" v-show="filesToUploadShow == true">
          <div class="mb-2 small">Список файлов:</div>
          <div
            class="file-display small"
            id="file_display"
            ref="fileDisplay"
          ></div>
          <div class="btn-del" @click.prevent="delFiles">
            <div class="line-1"></div>
            <div class="line-2"></div>
          </div>
        </div>
        <div class="subm">
          <the-button
            @click.prevent="onSubmit"
            class="button button--orange first__btn order__btn"
            type="submit"
            ><span>Отправить</span></the-button
          >
          <p class="sogl">
            Нажимая на кнопку «Отправить», вы даете согласие на обработку
            персональных данных и соглашаетесь с политикой конфиденциальности.
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import TheButton from "./../UI/TheButton.vue";
import BudgetDropdown from "./../UI/BudgetDropdown.vue";
import InputBox from "./../UI/InputBox.vue";
import InputTextareaVue from "../UI/InputTextarea.vue";
import SliderForm from "../UI/SliderForm.vue";
import FileUploader from "../UI/FileUploader.vue";
import { vMaska } from "maska";
import { messageMixin } from "./../mixins/messageMixin";

export default {
  directives: { maska: vMaska },
  components: {
    TheButton,
    BudgetDropdown,
    InputBox,
    InputTextareaVue,
    FileUploader,
    SliderForm,
  },
  mixins: [messageMixin],
  data() {
    return {
      form: {
        name: "",
        tel: "",
        company: "",
        email: "",
        price: [50000, 200000],
        budget: '',
        desc: "",
        file: null,
      },
      formName: "orderForm",
      filesToUploadShow: false,
    };
  },
  methods: {
    updateBudget(value) {
      console.log(value);
      this.form.price = value;
    },
    async fetchForm(data) {
      let pages = window.location.href;
      let formName = data.form;
      const formData = new FormData();
      formData.append("name", data.data.name);
      formData.append("tel", data.data.tel);
      formData.append("company", data.data.company);
      formData.append("email", data.data.email);
      formData.append("price", data.data.price);
      formData.append("desc", data.data.desc);

      if (data.data.file?.length) {
        for (let i = 0; i < data.data.file.length; i++) {
          formData.append("file[]", data.data.file[i]);
        }
      }

      formData.append("pages", pages);
      try {
        const response = await axios
          .post("/api/form/" + formName, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res);
            if (res.data.status) {
              this.showMessage(
                {
                  title: "Отправлено",
                  content: "Ваша форма успешно отправлена",
                },
                "success",
                false,
                3000
              );
            }
          });
      } catch (error) {
        console.error(error);
        this.showMessage(
          { title: "Ошибка", content: "Ваша форма не отправлена" },
          "error",
          true,
          3000
        );
      }
    },
    onSubmit(e) {
      if (!this.form.name || !this.form.email || !this.form.tel) {
        console.log(this.name);
        this.showMessage(
          { title: "Не отправлено", content: "Заполните обязательные поля" },
          "error",
          false,
          3000
        );
        const requiredInputs = document.querySelectorAll("[data-input]");
        console.log(requiredInputs);
        requiredInputs.forEach((el) => {
          if (!el.querySelector("input").value) {
            el.classList.add("input--error");
          }
        });
      } else {
        this.fetchForm({ data: this.form, form: this.formName });
      }
      // post the form to the server
    },
    showMessage(mess, status, flag, duration) {
      this.message(mess, status, flag, duration);
    },
    clearError(event, id) {
      console.log(123);
      document.getElementById(id).classList.remove("input--error");
    },
    uploadFile(event) {
      this.form.file = event;
      let ds = this.$refs.fileDisplay;
      ds.innerText = "";
      for (let i = 0; i < event.length; i++) {
        let file_name = document.createElement("div");
        file_name.innerText = event[i].name + " : " + event[i].size + " kB";
        ds.append(file_name);
      }
      this.filesToUploadShow = true;
    },
    delFiles() {
      console.log(this.form.file);
      this.form.file = null;
      this.filesToUploadShow = false;
    },
  },
};
</script>

<style lang='scss'>

</style>
