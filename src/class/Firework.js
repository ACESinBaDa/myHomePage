import Particle from './Particle'

export default class Firework {
  constructor (config) {
    // 烟花自身属性
    this.x = config.x || (config.width / 8 + Math.random() * config.width * 3 / 4)
    this.y = config.y || (config.height / 8 + Math.random() * config.height * 3 / 4)
    this.xEnd = config.xEnd || (config.height / 8 + Math.random() * config.height * 3 / 8)
    this.yEnd = config.yEnd || (config.width / 8 + Math.random() * config.width * 3 / 8)
    this.size = 2
    this.velocity = -3

    this.opacity = 0.8
    this.color = `hsla(${360 * Math.random() | 0}, 80%, 60%, 1)`
    this.wait = config.wait || 30 + Math.random() * 30
    // 微粒个数等
    this.count = config.count
    this.particles = []
    this.createParticles()

    this.status = 1
  }

  // 创建微粒
  createParticles () {
    for (let i = 0; i < this.count; ++i) {
      this.particles.push(new Particle({
        x: this.xEnd,
        y: this.yEnd
      }))
    }
  }

  // 升空
  rise () {
    this.y += this.velocity * 1
    this.velocity += 0.005 // 升空时产生的阻力
    // 烟花升空到目标位置开始消失
    if (this.y - this.yEnd <= 50) {
      this.opacity = (this.y - this.yEnd) / 50
    }
    // 如果到达目标位置, 开始第二个状态
    if (this.y <= this.yEnd) {
      this.status = 2
    }
  }

  // 渲染烟花 烟花所有动作完成后返回false
  render (ctx) {
    switch (this.status) {
      case 1: // 升空中
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

        this.rise()
        return true
      case 2: // 烟花消失阶段 等待炸裂
        if (--this.wait <= 0) {
          this.opacity = 1
          this.status = 3
        }
        return true
      case 3: // 炸裂之后 渲染烟花微粒
        ctx.save()
        ctx.globalCompositeOperation = 'lighter'
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        for (let i = 0; i < this.particles.length; ++i) {
          this.particles[i].render(ctx)
        }
        ctx.restore()
        this.opacity -= 0.01
        return this.opacity > 0
      default:
        return false
    }
  }
}
