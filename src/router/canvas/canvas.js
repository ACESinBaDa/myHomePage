const particles = () =>
  import(/* webpackChunkName: "particles" */ '@/components/canvas/particles')
const firework = () =>
  import(/* webpackChunkName: "firework" */ '@/components/canvas/firework')
const firework2 = () =>
  import(/* webpackChunkName: "firework2" */ '@/components/canvas/firework2')
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
},
{
  path: '/canvas/firework2',
  component: firework2,
  name: 'firework2',
  meta: {
    title: 'Firework2'
  }
}
]
export default canvas
