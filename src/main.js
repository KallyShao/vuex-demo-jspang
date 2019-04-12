import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

import store from './store';

Vue.config.productionTip = false

// import AnchorHeading from './components/anchor.js';
// Vue.use(AnchorHeading);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
