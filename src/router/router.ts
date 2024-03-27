import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store/store'
import Login from '@/pages/Login.vue'


const routes: Array<RouteRecordRaw> = [
  {
    name: '',
    path: '/',
    redirect: (_) => {
        if (!store.state.is_authenticated) return { path: '/login' }
        return { path: '/home' }
    },
},
  {
    name: 'Login',
    path: '/login',
    component: Login,
},
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../components/Profile.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
