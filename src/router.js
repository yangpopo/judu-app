import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "home" */ './page/home/index.vue'),
    meta: {
      title: '首页',
    }
  }, {
    path: '/quotes-details',
    name: 'quotesDetails',
    component: () => import(/* webpackChunkName: "quotes" */ './page/quotes/quotesDetails/quotesDetails.vue'),
    meta: {
      title: '金句',
    }
  }, {
    path: '/setUp',
    name: 'setUp',
    component: () => import(/* webpackChunkName: "setUp" */ './page/my/setUp/setUp.vue'),
    meta: {
      title: '设置',
    }
  }
];
 
const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
  routes: routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next()
})

export default router
