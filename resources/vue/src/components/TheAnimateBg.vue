<template>
  <section class="animate">
    <div class="animate-container"></div>
  </section>
</template>

<script>
import anime from 'animejs';
export default {
    data(){
        return {

        }
    },
    mounted(){
        let cont = document.querySelector('.animate-container');
        for(let i = 1; i <= 100; i++){
            let dot = document.createElement('div');
            dot.classList.add('element');
            cont.appendChild(dot);
        }
        let dotAll = document.querySelectorAll('.element');
        let animation = anime.timeline({
            targets: dotAll,
            easing: 'easeInOutExpo',
            loop: true,
            delay: anime.stagger(40,{grid:[10, 10] , from: 'center'}),
        })
        animation
        .add({
            rotateZ: 180,
            translateY: anime.stagger(-60,{ grid:[10,10], from: 'center', axis:'y'}),
            translateX: anime.stagger(-60,{ grid:[10,10], from: 'center', axis:'x'}),
        })
        .add({
            rotateZ: 180,
            translateY: anime.stagger(0,{ grid:[10,10], from: 'center', axis:'y'}),
            translateX: anime.stagger(0,{ grid:[10,10], from: 'center', axis:'x'}),
            opacite: 1,
        })
    }
};
</script>

<style lang='scss'>
.animate {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    align-items: center;
  }
  .element {
    position: relative;
    width: 10px;
    height: 10px;
    background-color: #e9f5f9;
    // background-color: red;
    justify-self: center;
    border-radius: 50%;
  }
}
</style>