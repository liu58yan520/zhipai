import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '派智，知识产权一站式服务平台',
        keywords:"派智,知识产权,专利服务"
      }

    }
  ]
})
