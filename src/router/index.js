import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Streamanity from '../views/casestudies/streamanity.vue'
Vue.use(VueRouter)

const routes = [
{
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
    },
  {
    path: '/streamanity',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Streamanity
  },
  {
    path: '/lufe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "lufe" */ '../views/casestudies/lufe.vue')
  },
  {
    path: '/projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects" */ '../views/project-list.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
// router.beforeEach((to, from, next) => {
//   window.scrollTo(0, 0)
//   // ...
// })
export default router
