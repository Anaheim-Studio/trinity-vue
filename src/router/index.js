import Vue from 'vue'
import Router from 'vue-router'
import Home from './../pages/home'
import WorkSpace from './../pages/workSpace'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/workSpace',
      name: 'workSpace',
      component: WorkSpace
    }
  ]
})