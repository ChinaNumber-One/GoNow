import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import '@/assets/styles/border.css'
import '@/assets/styles/animate.css'
import '@/assets/styles/reset.css'
import '@/assets/styles/iconfont/iconfont.css'
import Fastclick from 'fastclick'
import Calendar from 'vue2-datepick'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)
Fastclick.attach(document.body)

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Calendar)
Vue.use(ElementUI)
Vue.use(VueLazyload, {
  preLoad: 1,
  error: '../static/img/loaderror.png',
  loading: '../static/img/defaultimg.png',
  attmpt: 3
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
