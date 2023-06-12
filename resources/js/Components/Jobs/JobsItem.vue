<template>
  <div class="job">
    <div class="row">
      <div class="col-xl-5 job-top" style="display: flex; flex-direction: column">
        <h2>{{ item.title }}</h2>
        <div class="job-logo">
          <img :src="item.img" alt="" />
        </div>
      </div>
      <div
        class="col-xl-7"
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


