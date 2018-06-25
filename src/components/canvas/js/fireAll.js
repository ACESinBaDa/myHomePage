import Particle from '../../../class/Particle'
export default class Firework {
  constructor (startX, startY, endX, endY) {
    this.startX = startX
    this.startY = startY
    this.endX = endX
    this.endY = endY
    this.count = this.rand(200, 500)
    this.color = `hsla(${360 * Math.random() | 0}, 80%, 60%, 1)`
    this.opacity = 1
    this.particles = []
    this.creatParticles()
    this.durTime = this.rand(100, 400)
  }

  rand (min, max) {
    return (Math.random() * (max - min + 1)) + min
  }

  creatParticles () {
    for (let i = 0; i < this.count; i++) {
      this.particles.push(new Particle({
        x: this.endX,
        y: this.endY
      }))
    }
  }

  render (ctx) {
    let i = this.durTime
    let disX = this.x - this.endX
    let disY = this.y - this.endY
    while (i--) {
      ctx.save()
      ctx.beginPath()
      ctx.globalCompositeOperation = 'lighter'
      ctx.globalAlpha = this.opacity
      ctx.translate(this.x, this.y)
      ctx.scale(0.8, 2.3)
      ctx.translate(-this.x, -this.y)
      ctx.fillStyle = this.color
      ctx.arc(this.x + Math.sin(Math.PI * 2 * Math.random()) / 1.2, this.y, this.size, 0, Math.PI * 2, false)
      ctx.fill()
      ctx.restore()
      this.x += (disX / this.durTime)
      this.y += (disY / this.durTime)
    }
    if (i <= 0) {
      ctx.save()
      ctx.globalCompositeOperation = 'lighter'
      ctx.fillStyle = this.color
      for (let j = 0; j < this.particles.length; j++) {
        this.particles[j].render(ctx)
      }
      ctx.restore()
      this.opacity -= 0.01
    }
  }
}
