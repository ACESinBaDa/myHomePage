const particles = () =>
  import(/* webpackChunkName: "particles" */ '@/components/canvas/particles')
const canvas = [
  {
    path: '/canvas/particles',
    component: particles,
    name: 'particles',
    meta: { title: '粒子星空' }
  }
]
export default canvas
