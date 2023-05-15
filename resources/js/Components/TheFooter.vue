<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer__wrapper">
        <p>2009-2023 © Digital-агентство «Ji-Touch»</p>
        <p>Надёжный партнёр Вашего бизнеса!</p>
        <a href="">Политика конфиденциальности</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.footer {
  height: 85px;
  background-color: #212121;
  &-container {
    height: 100%;
  }
  &__wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p,
    a {
      font-size: 14px;
      color: var(--c-white);
      margin-bottom: 0;
    }
    a {
      &:hover {
        color: var(--c-primary);
      }
    }
  }
}
</style>
