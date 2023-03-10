<template>
  <div class="form">
    <form id="myForm">
      <div class="form__wrapper">
        <InputBox
          :value="form.name"
          v-on:dich="form.name = $event"
          :class="{ 'has-value': form.name !== '' }"
          label="Ваше имя"
        />
        <InputBox
          :value="form.tel"
          v-on:dich="form.tel = $event"
          :class="{ 'has-value': form.tel !== '' }"
          label="Телефон"
          v-maska
          mask="+1 ### ###-##-##"
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
          <!-- <div class="order__upload">
            <label class="file-input__label" for="myfile">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8545 9.96878L10.6797 11.1438L7.38924 14.4342C6.10061 15.7225 4.00324 15.7225 2.71384 14.4337C1.42467 13.1449 1.42503 11.0477 2.71384 9.75877L4.5944 7.87803L10.198 2.27443C11.0792 1.39327 12.5139 1.39327 13.3953 2.27443C14.2765 3.15595 14.2765 4.59019 13.3953 5.47175L9.78949 9.07723L8.36797 10.4986L6.51495 12.3518C6.05288 12.8138 5.30105 12.8133 4.83935 12.3518C4.37728 11.8897 4.37728 11.1377 4.83935 10.6756L7.52566 7.98948L8.11352 7.40126L10.6249 4.89022L9.84196 4.10745L6.74307 7.20635L4.05639 9.8937C3.16319 10.7865 3.16301 12.2409 4.05639 13.1348C4.95012 14.0282 6.40431 14.0282 7.2975 13.1348L8.9874 11.4447L10.5722 9.85996L14.1775 6.2543C15.4907 4.94148 15.4907 2.80502 14.1775 1.49161C12.8646 0.178416 10.7278 0.178416 9.41477 1.49161L6.65956 4.24718L3.91141 6.99533L1.93138 8.97572C0.210902 10.696 0.210902 13.4958 1.93138 15.2162C3.65186 16.9369 6.45126 16.9369 8.17188 15.2162L12.637 10.7511L14.8207 8.56753L14.0383 7.78457L11.8545 9.96878Z"
                  fill="#00779F"
                />
              </svg>
              Прикрепить файл
            </label>
            <input
              class="input file-input"
              type="file"
              name="attach[]"
              multiple=""
              id="myfile"
            />
          </div> -->
        </div>
        <div class="file-display--container" v-show="filesToUploadShow == true">
          <div class="mb-2 small">Список файлов:</div>
          <div
            class="file-display small"
            id="file_display"
            ref="fileDisplay"
          ></div>
          <div 
            class="btn-del"
            @click.prevent="delFiles"
          >
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
import TheButton from "./../UI/TheButton.vue";
import BudgetDropdown from "./../UI/BudgetDropdown.vue";
import InputBox from "./../UI/InputBox.vue";
import InputTextareaVue from "../UI/InputTextarea.vue";
import FileUploader from "../UI/FileUploader.vue";
import { vMaska } from "maska";

export default {
  directives: { maska: vMaska },
  components: {
    TheButton,
    BudgetDropdown,
    InputBox,
    InputTextareaVue,
    FileUploader,
  },
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
      filesToUploadShow: false,
    };
  },
  methods: {
    onSubmit(e) {
      console.log(this.form);
      // post the form to the server
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
    delFiles(){
      console.log(this.form.file);
      this.form.file = null;
      this.filesToUploadShow = false;
    }
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
  &:hover{
    .line-1,
    .line-2{
      background-color: var(--c-primary);
      
    }
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
