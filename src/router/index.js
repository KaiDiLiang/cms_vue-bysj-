import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexHome',
      component: Main,
      children: [
        {
          path: '/test',
          name: 'test',
          component: () => import('@/pages/test.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login.vue')
    }
  ]
})
