<template>
  <div class="home">
    <TheAnimateBg></TheAnimateBg>
    <the-header></the-header>
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
