<template>
  <div class="job">
    <div class="row">
      <div class="col-5" style="display: flex; flex-direction: column">
        <h2>{{ item.title }}</h2>
        <div class="job-logo">
          <img :src="item.img" alt="" />
        </div>
      </div>
      <div
        class="col-7"
        style="display: flex; flex-direction: column; row-gap: 1.5rem"
      >
        <div class="tabs">
          <TheTabButton
            :isActive="activeTab === 'requirements'"
            @click="changeTab('requirements')"
            >Требования</TheTabButton
          >
          <TheTabButton
            :isActive="activeTab === 'responsibilities'"
            @click="changeTab('responsibilities')"
            >Обязанности</TheTabButton
          >
        </div>
        <div class="desc">
          <div
            class="desc"
            v-if="activeTab === 'requirements'"
            v-html="item.requirements"
          ></div>
          <div
            class="desc"
            v-if="activeTab === 'responsibilities'"
            v-html="item.responsibilities"
          ></div>
        </div>
        <!-- <div class="price">
          <span>{{ item.price }}</span>
        </div> -->
      </div>
    </div>
    <div class="hover">
      <svg
        width="385"
        height="324"
        viewBox="0 0 385 324"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M385 135L0.245727 0.89759L72.9843 157.228L10.6498 323.087L385 135Z"
          fill="#EF7F1A"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import TheTabButton from "./../UI/TheTabButton.vue";
export default {
  components: {
    TheTabButton,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activeTab: "requirements", // Начально выбранная вкладка
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style lang='scss'>
.job {
  position: relative;
  background-color: #fff;
  height: 100%;
  padding: 60px 90px;
  z-index: 2;
  &:hover {
    .hover {
      opacity: 1;
    }
    .job-logo {
      img {
        opacity: 1;
      }
    }
  }
  .tabs {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: flex-end;
  }
  &-logo {
    margin-top: auto;
    img {
      opacity: 0.5;
      transition: 0.3s linear;
      max-width: 100%;
      height: 60px;
    }
  }
  .desc {
    &-text {
      font-size: 0.8rem;
    }
    & > ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        font-size: 0.8rem !important;
      }
    }
  }
}
.price {
  margin-top: auto;
  color: var(--c-title);
  font-weight: 700;
}
h2 {
  transition: 0.3s linear;
  font-size: 34px;
  font-weight: 700;
}
.hover {
  transition: 0.3s linear;
  opacity: 0;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: -10px;
  transform: translateY(-50%) translateX(-50%);
  animation: animateSamolet 1s infinite;
  svg {
    width: 50px;
    height: auto;
  }
}
@keyframes animateSamolet {
  0%,
  100% {
    transform: translateY(-50%) translateX(-50%);
  }

  50% {
    transform: translateY(-50%) translateX(-60%);
  }
}
</style>
