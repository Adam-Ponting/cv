import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Error404 from './components/Error404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    /*
    https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
    */
    {
      path: '/404',
      name: '404',
      component: Error404
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
  /* https://dev.to/napoleon039/the-lesser-known-amazing-things-vuerouter-can-do-25di */
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})
