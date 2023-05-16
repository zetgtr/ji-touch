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

</style>
