import Vue from 'vue'
import Router from 'vue-router'
import Destination from '@/pages/destination/index'
import City from '@/pages/city/index'
import Chinesemap from '@/pages/map/map.vue'
import TravelInfo from '@/pages/destination/travel/travelInfo.vue'
import Mine from '@/pages/mine/index.vue'
import Hotel from '@/pages/hotel/index'
import Login from '@/pages/login/login.vue'
import Register from '@/pages/register/register.vue'
import Message from '@/pages/message/index.vue'
import Setting from '@/pages/setting/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
// 按需加载          Webpack分片
      component: () => import('@/pages/home/index')
    }, {
      path: '/destination/:city',
      name: 'destination',
      component: Destination
    }, {
      path: '/city',
      name: 'city',
      component: City
    }, {
      path: '/Chinesemap',
      name: 'Chinesemap',
      component: Chinesemap
    }, {
      path: '/travelInfo/:id',
      name: 'travelInfo',
      component: TravelInfo
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/mine',
      name: 'mine',
      component: Mine
    }, {
      path: '/message',
      name: 'message',
      component: Message
    }, {
      path: '/hotel',
      name: 'hotel',
      component: Hotel
    }, {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ]
})
