const particles = () =>
  import(/* webpackChunkName: "particles" */ '@/components/canvas/particles')
const firework = () =>
  import(/* webpackChunkName: "firework" */ '@/components/canvas/firework')
const canvas = [{
  path: '/canvas/particles',
  component: particles,
  name: 'particles',
  meta: {
    title: '粒子星空'
  }
},
{
  path: '/canvas/firework',
  component: firework,
  name: 'firework',
  meta: {
    title: 'Firework'
  }
}
]
export default canvas
