import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home.vue'
// import About from '../views/about.vue'

import Streamanity from '../views/casestudies/streamanity.vue'

Vue.use(VueRouter)

const routes = [
{
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
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
    component: () => import(/* webpackChunkName: "lufe" */ '@/views/casestudies/lufe.vue')
  },
  {
    path: '/plan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "plan" */ '@/views/Plan.vue')
  },
  {
    path: '/therm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "therm" */ '@/views/sensehawk.vue')
  },
  {
    path: '/aisuggest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "aisuggest" */ '@/views/ushur/aisuggest.vue')
  },
  {
    path: '/builder',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "builder" */ '@/views/ushur/builder.vue')
  },
  {
    path: '/notifications',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "notifications" */ '@/views/ushur/notifications.vue')
  },
  {
    path: '/capstone',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "capstone" */ '@/views/Capstone.vue')
  },
  {
    path: '/soar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "lufe" */ '@/views/casestudies/soar.vue')
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/about.vue')
  },
  {
    path: '/shots',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "shots" */ '@/views/shots.vue')
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
