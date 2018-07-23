<template>
  <div>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <p v-if="show">hellp</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'demo1',
  data () {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    -webkit-transition: opacity .5s;
    -moz-transition: opacity .5s;
    -ms-transition: opacity .5s;
    -o-transition: opacity .5s;
    transition: opacity .5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
