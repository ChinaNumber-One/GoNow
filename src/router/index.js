import Vue from 'vue'
import Router from 'vue-router'
import Destination from '@/pages/destination/index'
import City from '@/pages/city/index'
import Chinesemap from '@/pages/map/map.vue'
import Customservice from '@/pages/mine/customservice.vue'
import Mine from '@/pages/mine/index.vue'
import Hotel from '@/pages/hotel/index'
import Login from '@/pages/login/login.vue'
import Register from '@/pages/register/register.vue'
import Message from '@/pages/message/index.vue'
import Setting from '@/pages/setting/index.vue'
import TravelsDetail from '@/pages/home/travelsDetail/selectionDetail.vue'
import StrategyDetail from '@/pages/home/strategyDetail/selectionDetail.vue'
import Ticket from '@/pages/home/ticket.vue'
import Train from '@/pages/home/train.vue'
import Photography from '@/pages/home/photography.vue'
import StrategyList from '@/pages/home/strategyList/index.vue'
import TravelsList from '@/pages/home/travelsList/index.vue'
import SearchPage from '@/pages/home/searchPage/index.vue'
import GetPoients from '@/pages/setting/getPoients.vue'
import GoFeedback from '@/pages/setting/goFeedback.vue'
import ChangeInfo from '@/pages/setting/changeInfo.vue'
import AboutUs from '@/pages/setting/aboutUs.vue'
import Diary from '@/pages/mine/mydiary/diary.vue'

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
      path: '/customservice',
      name: 'customservice',
      component: Customservice
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
    }, {
      path: '/getPoients',
      name: 'getPoients',
      component: GetPoients
    }, {
      path: '/goFeedback',
      name: 'goFeedback',
      component: GoFeedback
    }, {
      path: '/changeInfo',
      name: 'changeInfo',
      component: ChangeInfo
    }, {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUs
    }, {
      path: '/travelsDetail/:id',
      name: 'travelsDetail',
      component: TravelsDetail
    }, {
      path: '/strategyDetail/:id',
      name: 'strategyDetail',
      component: StrategyDetail
    }, {
      path: '/photography',
      name: 'photography',
      component: Photography
    }, {
      path: '/ticket',
      name: 'ticket',
      component: Ticket
    }, {
      path: '/train',
      name: 'train',
      component: Train
    }, {
      path: '/strategyList',
      name: 'strategyList',
      component: StrategyList
    }, {
      path: '/travelsList',
      name: 'travelsList',
      component: TravelsList
    }, {
      path: '/searchPage',
      name: 'searchPage',
      component: SearchPage
    }, {
      path: '/diary',
      name: 'diary',
      component: Diary
    }
  ]
})
