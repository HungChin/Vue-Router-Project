import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/acc',
    name: '帳號頁面',
    component: () => import('../views/AccountView.vue'),
    children: [
      {
        path: 'accData',
        name: '帳戶資料',
        component: () => import('../views/AccountDetail.vue')
      },
      {
        path: 'profies',
        name: '帳戶個人資料',
        component: () => import('../views/AccountProfies.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
