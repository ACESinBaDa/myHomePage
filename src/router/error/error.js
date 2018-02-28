const errorPage = () =>
  import(/* webpackChunkName: "errorPage" */ '@/components/error/errorPage')
const error = [
  {
    path: '/error/errorPage',
    component: errorPage,
    name: 'errorPage',
    meta: { title: '-_-页面跑飞了!' }
  }
]
export default error
