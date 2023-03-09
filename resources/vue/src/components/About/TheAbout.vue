<template>
  <section id="about" class="about">
    <div class="container about-container">
      <div class="about__header wow fadeIn" data-wow-delay="0.4s">
        <h2 v-html="row.title"></h2>
      </div>
      <div class="about__wrapper">
        <div class="row about__wrapper-content">
          <div class="col-6 wow fadeIn" data-wow-delay="0.4s">
            <div class="about__item-title-container">
              <h3 class="about__item-title" v-html="row.subtitle"></h3>
            </div>
          </div>
          <div class="col-6 wow fadeIn" data-wow-delay="0.4s">
            <div class="about__item-right">
              <h3 class="about__item-subtitle">
                {{ row.itemTitle }}
              </h3>
              <p>
                {{ row.desc }}
              </p>
              <the-more-button class="more"><span>Узнать больше</span></the-more-button>
            </div>
          </div>
        </div>
      </div>
      <the-section-caption :sectionCaption="sectionCaption" class="color"></the-section-caption>
    </div>
  </section>
</template>

<script>
import TheMoreButton from "./../UI/TheMoreButton.vue";
import TheButton from "./../UI/TheButton.vue";
import TheSectionCaption from "./../TheSectionCaption.vue";
export default {
  components: {
    TheMoreButton,
    TheButton,
    TheSectionCaption
  },
  data() {
    return {
      row: {
        title:
          "С 2009 года специализируемся на разработке <br> web-сайтов и мобильных приложений",
        subtitle: "Надёжный партнёр <br> вашего бизнеса",
        itemTitle: "Обладаем широкими знаниями в области",
        desc: "Мы погружаемся в бизнес заказчика, хорошо понимаем его цели и задачи, поэтому с большинством клиентов работаем годами.",
      },
      sectionCaption: "Company"
    };
  },
};
</script>

<style lang='scss'>
.about {
  padding-top: 120px;
  padding-bottom: 140px;
  position: relative;
  background-color: #e9f5f9;
  &__header {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 0;
      margin-bottom: 3.5rem;
    }
  }
  &__wrapper {
    background: #fff;
    position: relative;
    &-content {
      padding-top: 90px;
      padding-bottom: 90px;
    }
  }
  &__item {
    &-title {
      font-size: 50px;
      font-weight: 700;
      color: var(--c-title);
      margin-bottom: 0;
      &-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
    }
    &-subtitle {
      font-size: var(--fz-l);
      color: var(--c-title);
      margin-bottom: 50px;
      line-height: 1.2;
    }
    &-right {
      p {
        font-size: var(--fz-s);
        color: var(--c-def);
        margin-bottom: 80px;
        max-width: 75%;
      }
    }
  }
}
</style>