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
          :value="form.company"
          v-on:dich="form.company = $event"
          :class="{ 'has-value': form.company !== '' }"
          label="Компания"
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
  },
  mixins: [messageMixin],
  data() {
    return {
      form: {
        name: "",
        tel: "",
        company: "",
        email: "",
        price: "",
        where: "",
        desc: "",
        file: null,
      },
      formName: "orderForm",
      filesToUploadShow: false,
    };
  },
  methods: {
    async fetchForm(data) {
      let pages = window.location.href;
      let formName = data.form;
      const formData = new FormData();
      formData.append("name", data.data.name);
      formData.append("tel", data.data.tel);
      formData.append("company", data.data.company);
      formData.append("email", data.data.email);
      formData.append("price", data.data.price);
      formData.append("where", data.data.where);
      formData.append("desc", data.data.desc);

      if (data.data.file?.length) {
        for (let i = 0; i < data.data.file.length; i++) {
          formData.append("file[]", data.data.file[i]);
        }
      }

      formData.append("pages", pages);
      try {
        const response = await axios.post("/api/form/" + formName, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const responseData = await response.json();
        this.showMessage(
          { title: "Отправлено", content: "Ваша форма успешно отправлена" },
          "success",
          false,
          3000
        );
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
.form {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    .subm {
      grid-column: span 2;
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 40px;
    }
    .file-display--container {
      position: relative;
      grid-column: span 2;
      .file-display.small {
        width: 100%;
        padding: 0.375rem 0.75rem;
        font-size: 0.5rem;
        line-height: 1;
        color: #495057;
        background-color: #e9f5f9;
      }
    }
    .file {
      grid-column: span 2;
      display: grid;
      grid-template-columns: 1fr auto;
      span {
        font-size: 14px;
        color: #ccc;
      }
      .input.file-input {
        display: none;
      }
      .order__upload {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        svg {
          width: 22px;
          height: 21px;
        }
        label {
          font-size: 14px;
          color: var(--c-secondary);
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .button {
        }
      }
    }
    .in2 {
      grid-column: span 2;
      textarea {
        display: block;
        width: 100%;
        padding: 0.55rem 1rem 0.55rem 0;
        font-size: 18px;
        line-height: 1.3;
        background-image: none;
        border: none;
        border-bottom: 2px solid #dadada;
        border-radius: 0;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        outline: none;
        background-color: transparent;
        border-color: var(--c-bg);
        color: var(--c-secondary);
      }
    }
    .inputbox {
      position: relative;
      width: 196px;
      width: 100%;
    }

    .inputbox input {
      position: relative;
      width: 100%;
      padding: 20px 10px 10px;
      background: transparent;
      outline: none;
      box-shadow: none;
      border: none;
      // color: var(--c-white);
      color: var(--c-secondary);
      font-size: 1em;
      letter-spacing: 0.05em;
      transition: 0.5s;
      z-index: 10;
    }
    .inputbox input.def {
      position: relative;
      width: 100%;
      padding: 20px 10px 10px;
      background: transparent;
      outline: none;
      box-shadow: none;
      border: none;
      color: var(--c-def);
      font-size: 1em;
      letter-spacing: 0.05em;
      transition: 0.5s;
      z-index: 10;
    }
    .inputbox span {
      position: absolute;
      left: 0px;
      padding: 10px 10px 10px 0;
      font-size: 18px;
      // color: #8f8f8f;
      color: var(--c-grey);
      letter-spacing: 0.05em;
      transition: 0.5s;
      pointer-events: none;
    }

    .inputbox input.has-value ~ span,
    .inputbox input:focus ~ span {
      color: var(--c-secondary);
      transform: translateX(-10px) translateY(-34px);
      font-size: 0.75em;
      padding: 20px 10px 10px 0;
    }

    .inputbox i {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      // background: var(--c-primary);
      background: var(--c-bg);
      border-radius: 4px;
      transition: 0.5s;
      pointer-events: none;
      z-index: 9;
    }

    .inputbox input.has-value ~ i,
    .inputbox input:focus ~ i {
      height: 44px;
    }
  }
}
.inputbox.has-value i {
  height: 44px;
}
.inputbox.has-value input ~ span {
  color: var(--c-secondary);
  transform: translateX(-10px) translateY(-34px);
  font-size: 0.75em;
  padding: 20px 10px 10px 0;
}
.sogl {
  font-size: 0.7rem;
  color: #ccc;
}
.btn-del {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 26px;
  height: 26px;
  gap: 7px;
  position: absolute;
  right: 0;
  top: 0;
  .line-1 {
    width: 20px;
    transform: rotate(45deg) translateY(10px);
    transform: rotate(45deg) translate(8px, 2px);
    transform: rotate(45deg) translate(6px, 1px);
    height: 3px;
    transition: 0.3s linear;
    background: #00779f;
  }
  .line-2 {
    width: 20px;
    transform: rotate(315deg) translate(2px, -13px);
    transform: rotate(315deg) translate(10px, -5px);
    transform: rotate(315deg) translate(6px, -2px);
    height: 3px;
    transition: 0.3s linear;
    background: #00779f;
  }
  &:hover {
    .line-1,
    .line-2 {
      background-color: var(--c-primary);
    }
  }
}

.inputbox.input--error {
  i {
    background: red;
  }
}
.order__btn {
  padding: 17px 72px;
  outline: none;
  color: var(--c-white);
  font-weight: 700;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  align-self: baseline;
}
</style>
