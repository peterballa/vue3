import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/vue/ref',
    name: 'vue_ref',
    component: () => import( '../views/vueRef/VueRef.vue')
  },
  {
    path: '/vue/computed-ref',
    name: 'vue_computed_ref',
    component: () => import('../views/vueComputedRef/VueComputedRef.vue')
  },
  {
    path: '/vue/lifecycle-hooks',
    name: 'vue_lifecycle_hooks',
    component: () => import('../views/vueLifecycleHooks/VueLifecycleHooks.vue')
  },
  {
    path: '/vue/watcher',
    name: 'vue_watcher',
    component: () => import('../views/vueWatcher/VueWatcher.vue')
  },
  {
    path: '/vue/component',
    name: 'vue_component',
    component: () => import('../views/vueComponent/VueComponent.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import('../views/vuex/Vuex.vue')
  },
  {
    path: '/tailwind',
    name: 'tailwind',
    component: () => import('../views/tailwind/Tailwind.vue')
  },
  {
    path: '/typescript',
    name: 'typescript',
    component: () => import('../views/typeScript/TypeScript.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
