<template>
  <div class="home">
    <TheAnimateBg></TheAnimateBg>
    <the-first></the-first>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '../components/TheHeader.vue'
import TheFirst from '../components/TheFirst.vue'
import TheAnimateBg from '../components/TheAnimateBg.vue'

export default {
  name: 'HomeView',
  components: {
    TheHeader,
    TheFirst,
    TheAnimateBg,

  }
}
</script>
<style  lang='scss'>
.nav {
  // padding-top: 7px;
}
.nav__list {
  display: flex;
  gap: 40px;
}
.nav__item {
  a {
    font-size: 13px;
    text-transform: uppercase;
  }
  &:hover {
    & ~ .cursor {
      transform: scale(4);
    }
  }
}
.header {
  padding: 40px 0;
  position: fixed;
  width: 100%;
  transition: 0.3s linear;
  z-index: 100;

  &-container {
    position: relative;
  }
  &-content {
    margin: 0 auto;
    padding: 0 calc(var(--container-offset)) 0 var(--container-offset);
    max-width: var(--container-width);
    position: relative;
  }
  &_fix {
    padding-top: 10px;
    box-shadow: 0px -10px 31px 3px rgb(34 60 80 / 9%);
    background: #fff;
    padding-bottom: 10px;
    .header {
      &__wrapper {
        align-items: center;
      }
    }
    .burger {
      top: calc(50% - 9px);
    }
  }
  &.burger__open {
    background: transparent;
    box-shadow: none;
  }
  &__right {
    margin-right: 95px;
  }
  &__logo {
    max-width: 150px;
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: flex-start;
    transition: 0.15s linear;
    &.hidden {
      opacity: 0;
      visibility: hidden;
    }
  }
  &__right {
    display: flex;
    gap: 2.5rem;
    align-items: center;
  }
}
.burger {
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 37px;
  height: 17px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  justify-content: flex-start;
  gap: 7px;
  position: absolute;
  top: calc(50% - 15px);
  right: 1.764583%;
  width: 38px;
  height: 38px;
  .line:nth-child(1) {
  }

  .line {
    transition: 0.3s linear;
    position: relative;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: -100%;
      transition: 0.3s linear;
      background-color: var(--c-primary);
    }
  }
  .line:nth-child(2) {
    width: 70%;
    &::before {
      transition-delay: 0.1s;
    }
  }
  &.active {
    .line:nth-child(1) {
      width: 26px;
      transform: rotate(45deg) translateY(10px);
      transform: rotate(45deg) translate(8px, 2px);
      transform: rotate(45deg) translate(6px, 1px);
      height: 3px;
    }
    .line:nth-child(2) {
      width: 26px;
      transform: rotate(315deg) translate(2px, -13px);
      transform: rotate(315deg) translate(10px, -5px);
      transform: rotate(315deg) translate(6px, -2px);
      height: 3px;
    }
  }
  &:hover {
    .line {
      &::before {
        left: 0;
      }
    }
  }
  .line {
    width: 37px;
    height: 5px;
    background-color: #00779f;
  }
}
.sss {
  position: fixed;
  height: 125px;
  width: 100%;
  z-index: 999;
  transition: 0.3s linear;
  &._fix {
    height: 64px;
  }
  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
