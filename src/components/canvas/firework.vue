<template>
  <div class="firework" ref="firework">
    <canvas id="fireBox" ref="fireBox"></canvas>
  </div>
</template>
<script type="text/ecmascript-6">
import Sky from '../../class/Sky'
export default {
  name: 'firework',
  data () {
    return {
      ctx: '',
      width: '',
      height: '',
      firework: '',
      // resize放抖动计时器
      resizeTimeout: '',
      // 天空对象
      mySky: ''
    }
  },
  methods: {
    addEvent (ele, ev, fun) {
      ele.addEventListener(ev, fun)
    },
    resize () { // 拖动变化
      clearTimeout(this.resizeTimeout)
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.resizeTimeout = setTimeout(() => {
        this.width = this.$refs.fireBox.width = this.$refs.firework.style.width = window.innerWidth
        this.height = this.$refs.fireBox.height = this.$refs.firework.style.height = window.innerHeight
        this.initSky()
      }, 100)
    },
    mouseDown () {
      this.createFirework()
    },
    createFirework () {
      let ctx = this.ctx
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(600, 600)
      ctx.lineTo(500, 500)
      ctx.closePath()
      ctx.strokeStyle = 'rgba(0,0,0,0.8)'
      ctx.stroke()
    },
    initSky () {
      let canvas = this.$refs.fireBox
      this.ctx = canvas.getContext('2d')
      let skys = this.mySky = new Sky(this.ctx, this.width, this.height, 150)
      skys.init()
    }
  },
  mounted () {
    this.addEvent(window, 'resize', this.resize)
    this.resize()
    this.addEvent(this.$refs.fireBox, ('mousedown' || 'touchstart'), this.mouseDown)
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.firework
  background rgba(0, 0, 10, 1)
  width 100%
  height 100%
  overflow hidden
  cursor crosshair
  ::-webkit-scrollbar
    display block
    width 100%
    height 8px
  ::-webkit-scrollbar-thumb
    background red
    border-radius 5px
</style>
