<template>
  <div>
    <button v-on:click="show = !show">
      Toggle render
    </button>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"

      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled">
      <p v-if="show">hellp</p>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'demo5',
  data () {
    return {
      show: true
    }
  },
  methods: {
    // --------
    // 进入中
    // --------

    beforeEnter: function (el) {
      // ...
      console.log('beforeEnter')
    },
    // 此回调函数是可选项的设置
    // 与 CSS 结合时使用
    enter: function (el, done) {
      // ...
      done()
    },
    afterEnter: function (el) {
      // ...
      console.log('afterEnter')
    },
    enterCancelled: function (el) {
      // ...
      console.log('enterCancelled')
    },

    // --------
    // 离开时
    // --------

    beforeLeave: function (el) {
      // ...
      console.log('beforeLeave')
    },
    // 此回调函数是可选项的设置
    // 与 CSS 结合时使用
    leave: function (el, done) {
      // ...
      done()
      console.log('leave')
    },
    afterLeave: function (el) {
      // ...
      console.log('afterLeave')
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function (el) {
      // ...
      console.log('leaveCancelled')
    }
  }
}
</script>

<style scoped>

</style>
