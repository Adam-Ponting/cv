import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TributePage from './components/freeCodeCamp/TributePage.vue'
import ProductLandingPage from './components/freeCodeCamp/ProductLandingPage.vue'
import Error404 from './components/Error404.vue'

Vue.use(Router)

export default new Router({
  // scroll to top on new link
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tribute',
      name: 'tribute',
      component: TributePage
    },
    {
      path: '/survey',
      name: 'survey',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './components/freeCodeCamp/SurveyForm.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: ProductLandingPage
    },
    {
      path: '/tennis',
      name: 'tennis',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './components/tennis/TennisHome.vue')
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
  ]
})
