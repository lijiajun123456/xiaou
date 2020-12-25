import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../pages/home/home'),
      redirect: '/index',
      children: [
        {
          path: '/index',
          component: () => import('../pages/index/index'),
        },
        {
          path: '/cart',
          component: () => import('../pages/cart/cart'),
        },
        {
          path: '/cate',
          component: () => import('../pages/cate/cate'),
        },
        {
          path: 'user', component: () => import('../pages/user/uesr')
        }
        // {
        //   path: 'goods',
        //   component: () => import('../pages/goods/goods'),
        // },

        // {
        //   path: '/login',
        //   component: () => import('../pages/login/login'),
        // },

      ]
    },


  ]
})
