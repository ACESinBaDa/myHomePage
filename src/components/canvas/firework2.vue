<template>
  <div class="firework2">
    <canvas :width="width" :height="height" id="fwBox" ref="fwBox" @mousedown="mouseClick" @mouseup="removeEve"></canvas>
  </div>
</template>
<script type="text/ecmascript-6">
// import Firework from './js/fireAll.js'
export default {
  name: 'firework2',
  data () {
    return {
      canvas: '',
      ctx: '',
      width: 1000,
      height: 800,
      startX: 500,
      startY: 800,
      endX: 0,
      endY: 0,
      fireworkArr: []
    }
  },
  methods: {
    init () {
      this.canvas = this.$refs.fwBox
      this.ctx = this.canvas.getContext('2d')

      this.canvas.addEventListener('selectstart', () => {
        return false
      })

      this.bindEvents()
      this.canvasLoop()

      this.canvas.addEventListener('selectstart', () => {
        return false
      })
    },
    bindEvents () {
    },
    canvasLoop () {
      this.requestAnimateFrame(this.canvasLoop)
      this.ctx.clearRect(0, 0, this.width, this.height)
      this.ctx.fillStyle = 'hsla(201, 50%, 10%, 1)'
      this.ctx.fillRect(0, 0, this.width, this.height)
      this.ctx.lineCap = 'round'
      this.ctx.lineJoin = 'round'
      this.updateFirework()
    },
    mouseClick (e) { // 点击触发
      let time = setTimeout(() => {
        clearTimeout(time)
        this.fire(e)
      }, 100)
      this.canvas.addEventListener('mousemove', this.fire)
    },
    removeEve () {
      this.canvas.removeEventListener('mousemove', this.fire)
    },
    fire (e) { // 放烟花
      this.endX = e.offsetX
      this.endY = e.offsetY
      this.ctx.save()
      this.ctx.beginPath()
      this.ctx.arc(this.endX, this.endY, 40, 0, 2 * Math.PI, false)
      this.ctx.stroke()
      // this.ctx.restore()
      this.ctx.closePath()
      this.firework()
    },
    firework () {
      let newFirework = {
        rate: Math.random * 30,
        particles: [],
        count: this.rand(300, 500),
        color: `hsla(${360 * Math.random() | 0}, 80%, 60%, 1)`,
        opacity: 0.8,
        x: this.startX,
        y: this.startY,
        eX: this.endX,
        eY: this.endY,
        t: this.rand(50, 100)
      }
      this.fireworkArr.push(newFirework)
    },
    updateFirework () {
      let i = this.fireworkArr.length
      while (i--) {
        let p = this.fireworkArr[i]
        let vx = (p.eX - p.x) / p.t
        let vy = (p.eY - p.y) / p.t
        if (p.y - p.eY <= 50) {
          p.opacity = (p.y - p.eY) / 50
        }
        p.x += vx
        p.y += vy
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.globalAlpha = p.opacity
        this.ctx.arc(p.x, p.y, this.rand(2, 3), 0, Math.PI * 2, false)
        this.ctx.fillStyle = p.color
        this.ctx.fill()
        this.ctx.restore()
        this.ctx.closePath()
      }
    },
    rand (min, max) {
      return (Math.random() * (max - min + 1)) + min
    },
    requestAnimateFrame (event) {
      return (
        window.requestAnimationFrame(event) ||
        window.webkitRequestAnimationFrame(event) ||
        window.mozRuestAnimationFrame(event) ||
        window.oRequestAnimationFrame(event) ||
        this.window.mozRuestAnimationFrame(event) ||
        function (event) {
          window.setTimeout(event, 1e3 / 60)
        }
      )
    }
  },
  mounted () {
    this.init()
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.firework2
  position relative
  width 100%
  height 100%
  background rgba(0, 0, 0, 0.9)
  #fwBox
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    margin auto
    width 1000px
    height 800px
</style>
