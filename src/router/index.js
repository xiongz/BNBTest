import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import() 代码分割

const HomeView = () => import('../views/HomeView.vue')
const notFundView = () => import('../views/notFundView.vue')
const symbolView = () => import('../views/symbolView.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: HomeView },
      { path: '/symbol/:id', component: symbolView },
      { path: '*', component: notFundView}
    ]
  })
}
