<template>
  <div>
    <input
      v-model="colorQuery"
      v-on:keyup.enter="updateColor"
      placeholder="Enter a color"
    >
    <button v-on:click="updateColor">Update</button>
    <p>Preview:</p>
    <span
      v-bind:style="{ backgroundColor: tweenedCSSColor }"
      class="example-7-color-preview"
    ></span>
    <p>{{ tweenedCSSColor }}</p>
  </div>
</template>

<script>
var Color = net.brehaut.Color

export default {
  name: 'demo12',
  data () {
    return {
      colorQuery: '',
      color: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1
      },
      tweenedColor: {}
    }
  },
  computed: {
    tweenedCSSColor: function () {
      return new Color({
        red: this.tweenedColor.red,
        green: this.tweenedColor.green,
        blue: this.tweenedColor.blue,
        alpha: this.tweenedColor.alpha
      }).toCSS()
    }
  },
  watch: {
    color: function () {
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }

      new TWEEN.Tween(this.tweenedColor)
        .to(this.color, 750)
        .start()

      animate()
    }
  },
  methods: {
    updateColor: function () {
      this.color = new Color(this.colorQuery).toRGB()
      this.colorQuery = ''
    }
  },
  created: function () {
    // Object.assign方法用于对象的合并，将源对象（ source ）的所有可枚举属性，复制到目标对象（ target ）。
    this.tweenedColor = Object.assign({}, this.color)
  }
}
</script>

<style scoped>
  .example-7-color-preview {
    display: inline-block;
    width: 50px;
    height: 50px;
  }
</style>
