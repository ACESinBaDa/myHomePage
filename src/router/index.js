import Vue from 'vue'
import Router from 'vue-router'
import Home from './home/home'
import Canvas from './canvas/canvas'
import Errors from './error/error'

Vue.use(Router)

const DefaultRouter = [
  {
    path: '/',
    redirect: '/home/homePage'
  }
]

const ErrorRouter = [
  {
    path: '*',
    redirect: '/error/errorPage'
  }
]

let router = new Router({
  routes: [...DefaultRouter, ...Home, ...Canvas, ...Errors, ...ErrorRouter],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.meta.title || to.params.message) {
    document.title = to.meta.title || to.params.message.title
  } else {
    document.title = '辛巴达'
  }
  next()
})

export default router
