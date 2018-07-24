<template>
  <div>
    Fade In: <input type="range" v-model="fadeInDuration" min="0" v-bind:max="maxFadeDuration">
    Fade Out: <input type="range" v-model="fadeOutDuration" min="0" v-bind:max="maxFadeDuration">

    <transition
      v-bind:css="false"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <p v-if="show">hello</p>
    </transition>
    <button
      v-if="stop"
      v-on:click="stop = false; show = false"
    >Start animating</button>
    <button
      v-else
      v-on:click="stop = true"
    >Stop it!</button>

  </div>
</template>

<script>
export default {
  name: 'demo10',
  data () {
    return {
      show: true,
      fadeInDuration: 1000,
      fadeOutDuration: 1000,
      maxFadeDuration: 1500,
      stop: true
    }
  },
  mounted: function () {
    this.sbow = false
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      var vm = this
      Velocity(el, {
        opacity: 1
      },
      {
        duration: this.fadeInDuration,
        complete: function () {
          done()
          if (!vm.stop) vm.show = false
        }
      })
    },
    leave: function (el, done) {
      var vm = this
      Velocity(el, { opacity: 0 }, {
        duration: this.fadeOutDuration,
        complete: function () {
          done()
          vm.show = true
        }
      })
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 238px;
  margin: 100px auto;
}
.cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaa;
  margin-right: -1px;
  margin-bottom: -1px;
}
  .cell:nth-child(3n) {
    margin-right: 0;
  }
  .cell:nth-child(27n) {
    margin-bottom: 0;
  }

  .cell-move {
    -webkit-transition: transform 1s;
    -moz-transition: transform 1s;
    -ms-transition: transform 1s;
    -o-transition: transform 1s;
    transition: transform 1s;
  }
</style>
