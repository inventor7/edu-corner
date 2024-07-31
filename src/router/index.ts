import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/modules/authenticated/home/views/homePage.vue')
      },
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/modules/anonymous/auth/views/loginPage.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router