<template>
  <div>
    <div class="start-page" v-if="startpage">
      <img src="../../../static/img/logo.jpg" alt="" class="start-img">
    </div>
    <div class="banner-top" v-show="!startpage&&bannerInfo">
      <a :href="bannerInfo[this.getRandBG].linkUrl">
        <img class="top-img" :src="bannerInfo[this.getRandBG].imgUrl" >
      </a>
    </div>
    <search v-show="!startpage"></search>
    <icons v-show="!startpage"></icons>
    <selection :selectionInfo="selectionInfo" v-show="!startpage"></selection>
    <couple :coupleInfo="coupleInfo" v-show="!startpage"></couple>
    <babytrip :babytripInfo="babytripInfo" v-show="!startpage"></babytrip>
    <movietrip :movietripInfo="movietripInfo" v-show="!startpage"></movietrip>
    <common-footer v-show="!startpage"></common-footer>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  import axios from 'axios'
  import Search from './search'
  import commonFooter from '../../components/common/commonFooter'
  import Icons from './icons'
  import Selection from './selection'
  import Couple from './couple'
  import Babytrip from './babytrip'
  import Movietrip from './movietrip'

  export default {
    name: 'index',
    data () {
      return {
        bannerInfo: [{}],
        selectionInfo: [],
        coupleInfo: [],
        babytripInfo: [],
        movietripInfo: [],
        isTop: false,
        startpage: false
      }
    },
    computed: {
      getRandBG () {
        const maxIndex = this.bannerInfo.length - 1
        return Math.round(Math.random() * maxIndex)
      },
      ...mapState(['city'])
    },
    methods: {
      getIndexData () {
        axios.get('/common/index.html')
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        res = res ? res.data : null
        if (res && res.data) {
          this.bannerInfo = res.data.banner
          this.selectionInfo = res.data.selection
          this.coupleInfo = res.data.coupletrip
          this.babytripInfo = res.data.babyTrip
          this.movietripInfo = res.data.movietrip
        }
      },
      handleGetDataErr () {
        console.log('获取数据失败')
      },
      ...mapMutations(['getCity'])
    },
    components: {
      Search,
      Icons,
      Selection,
      Couple,
      Babytrip,
      Movietrip,
      commonFooter
    },
    created () {
      window.scrollTo(0, 0)
      this.getIndexData()
      this.getCity(window.localStorage.city || '北京')
    }
  }
</script>
<style scoped lang="stylus">
  .start-page
    position:absolute
    top:0
    left:0
    right:0
    bottom:0
    z-index:99999999
    .start-img
      height:100%
      width:100%
  .banner-top
    width:100%
    height:3.15rem
    line-height: 3.15rem
    text-align: center
    .top-img
      width:100%
      height:100%
  .banner-mid
    width: 100%
    height:0
    overflow: hidden
    padding-bottom:31.25%
    .mid-img
      width:100%
  .toTop
    z-index:666
    position:fixed
    left:50%
    bottom:.8rem
    width:.8rem
    height:.4rem
    img
      width:100%
      height:100%
      transform:translateX(-50%)
  .selection
    background:#fff
</style>