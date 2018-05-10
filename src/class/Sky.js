/* 天空粒子类 */
export default class Sky {
  constructor (ctx, width, height, sum) {
    this.count = 0
    this.ctx = ctx
    this.width = width
    this.height = height
    this.stars = this.initStars(sum)
  }

  init () {
    const frame = () => {
      this.count++
      this.count % 10 === 0 && this.shake()
      this.draw()
      requestAnimationFrame(frame)
    }
    frame()
  }

  initStars (sum) {
    let stars = []
    while (sum--) {
      stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        r: Math.random()
      })
    }
    return stars
  }

  draw () {
    let ctx = this.ctx
    ctx.save()
    ctx.fillStyle = 'white'
    ctx.clearRect(0, 0, this.width, this.height)
    this.stars.forEach((star) => {
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
      ctx.fill()
      ctx.closePath()
    })
    ctx.restore()
  }

  shake () {
    this.stars = this.stars.map((star) => {
      let yes = Math.random() > 0.5 ? 1 : -1
      star.r += yes * 0.3
      if (star.r < 0) {
        star.r = -star.r
      } else if (star.r > 1) {
        star.r -= 0.2
      }
      return star
    })
  }
}
