<template>
  <div>
    <button v-on:click="shuffle">Shuffle</button>
    <transition-group name="flip-list" tag="ul">
      <li v-for="item in items" v-bind:key="item">{{item}}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'demo7',
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  methods: {
    shuffle: function () {
      this.items = _.shuffle(this.items)
    }
  }
}
</script>

<style scoped>
.flip-list-move {
  -webkit-transition: transform 1s;
  -moz-transition: transform 1s;
  -ms-transition: transform 1s;
  -o-transition: transform 1s;
  transition: transform 1s;
}
</style>
