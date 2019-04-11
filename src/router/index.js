import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import parent from '@/components/parent'
import swiper from '@/components/swiper'

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
    }
  ]
})
