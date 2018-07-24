<template>
  <div>
    <button @click="shuffle">Shuffle</button>
    <transition-group name="cell" tag="div" class="container">
      <div v-for="cell in  cells" :key="cell.id" class="cell">
        {{cell.number}}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'demo9',
  data () {
    return {
      cells: Array.apply(null, {
        length: 81
      })
        .map(function (_, index) {
          return {
            id: index,
            number: index % 9 + 1
          }
        })
    }
  },
  methods: {
    shuffle: function () {
      this.cells = _.shuffle(this.cells)
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
