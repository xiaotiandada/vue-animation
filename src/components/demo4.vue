<template>
  <div>
    <button v-on:click="show = !show">
      Toggle render
    </button>
    <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight">
      <p v-if="show">hellp</p>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'demo4',
  data () {
    return {
      show: true
    }
  }
}
</script>

<style scoped>

</style>
