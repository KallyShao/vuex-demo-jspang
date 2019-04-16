import Vue from 'vue'
import Router from 'vue-router'
import parent from '@/components/parent'
import swiper from '@/components/swiper'
import Render from '@/pages/render';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'parent',
      component: parent
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    },
    {
      path: '/render',
      name: 'Render',
      component: Render
    }
  ]
})
