<template>
  <div>
    <input type="text" v-model="query">

    <transition-group
    name="staggered-fade"
    tag="ul"
    v-bind:css="false"
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave">
      <li
      v-for="(item, index) in computedList"
      v-bind:key="item.msg"
      v-bind:data-index="index">{{item.msg}}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'demo10',
  data () {
    return {
      query: '',
      list: [
        { msg: 'Bruce Lee' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' }
      ]
    }
  },
  computed: {
    computedList: function () {
      var vm = this
      return this.list.filter(function (item) {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    beforEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = el.dataset.index * 150
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
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
