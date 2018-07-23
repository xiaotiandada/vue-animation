<template>
  <div>
    <button v-on:click="show = !show">
      Toggle show
    </button>
    <transition name="bounce">
      <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'demo3',
  data () {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
.bounce-enter-active {
  -webkit-animation: bounce-in .5s;
  -o-animation: bounce-in .5s;
  animation: bounce-in .5s;
}
  .bounce-leave-active {
    -webkit-animation: bounce-in .5s reverse;
    -o-animation: bounce-in .5s reverse;
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0%  {
      -webkit-transform: scale(0);
      -moz-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1.5);
      -moz-transform: scale(1.5);
      -ms-transform: scale(1.5);
      -o-transform: scale(1.5);
      transform: scale(1.5);
    }

    100% {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  }
</style>
