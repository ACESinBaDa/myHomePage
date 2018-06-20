<template>
  <div class="firework" ref="firework">
    <canvas id="fireBox" ref="fireBox"></canvas>
  </div>
</template>
<script type="text/ecmascript-6">
import Sky from '../../class/Sky'
import Firework from '../../class/Firework.js'
export default {
  name: 'firework',
  data () {
    return {
      ctx: '',
      width: '',
      height: '',
      /** 烟花相关 */
      fireworks: [],
      fireworkTime: '',
      skyColor: 'hsla(210, 60%, 5%, 0.2)',
      /*************/
      // resize放抖动计时器
      resizeTimeout: '',
      // 天空对象
      mySky: '',
      fireworkConfig: {
        width: '',
        height: '',
        fireworkTime: { min: 30, max: 60 },
        x: 0,
        y: 0,
        xEnd: '',
        yEnd: '',
        count: 600,
        wait: '' // 消失后 => 炸裂 等待时间
      }
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
        this.initFirework()
      }, 100)
    },
    initSky () {
      let canvas = this.$refs.fireBox
      this.ctx = canvas.getContext('2d')
      let skys = this.mySky = new Sky(this.ctx, this.width, this.height, 150)
      skys.init()
    },
    initFirework () {
      if (this.width && this.height) {
        this.fireworkConfig.width = this.width
        this.fireworkConfig.height = this.height
      }
      this.fireworkTime = (this.fireworkConfig.fireworkTime.min + (this.fireworkConfig.fireworkTime.max - this.fireworkConfig.fireworkTime.min) * Math.random()) | 0
      this.loop()
    },
    requestAnimateFrame (loop) {
      return (
        window.requestAnimationFrame(loop) ||
        window.webkitRequestAnimationFrame(loop) ||
        window.mozRuestAnimationFrame(loop) ||
        window.oRequestAnimationFrame(loop) ||
        window.mozRuestAnimationFrame(loop) ||
        function (a) {
          window.setTimeout(a, 1e3 / 60)
        }
      )
    },
    loop () {
      this.requestAnimateFrame(this.loop)
      // window.requestAnimationFrame(this.loop.bind(this))
      // this.ctx.clearRect(0, 0, this.width, this.height)
      this.ctx.fillStyle = this.skyColor
      this.ctx.fillRect(0, 0, this.width, this.height)

      // 随机创建烟花
      if (--this.fireworkTime <= 0) {
        this.fireworks.push(new Firework(this.fireworkConfig))
        // 每次到达点之后重新设置烟花产生时间 ( | 0 转化为整数)
        this.fireworkTime = (this.fireworkConfig.fireworkTime.min + (this.fireworkConfig.fireworkTime.max - this.fireworkConfig.fireworkTime.min) * Math.random()) | 0
      }

      for (let i = this.fireworks.length - 1; i >= 0; --i) {
        // 渲染烟花 (返回值为false则移出烟花)
        !this.fireworks[i].render(this.ctx) && this.fireworks.splice(i, 1)
      }
    }
  },
  mounted () {
    this.addEvent(window, 'resize', this.resize)
    this.resize()
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
