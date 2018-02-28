const homePage = () =>
  import(/* webpackChunkName: "homePage" */ '@/components/home/homePage')
const home = [
  {
    path: '/home/homePage',
    component: homePage,
    name: 'homePage',
    meta: { title: '我的主页' }
  }
]
export default home
