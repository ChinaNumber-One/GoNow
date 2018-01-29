<template>
  <div>
    <div class="title-box">
      <h2 class="strategy-title">攻略<router-link to="/strategyList" tag="span" class="strategy-more">更多<i class="iconfont right-arr">&#xe610;</i></router-link></h2>
    </div>
    <div class="strategy-info">
      <ul class="strategy-list">
        <router-link :to="/strategyDetail/ + item.id " tag="li" class="strategy-item border-bottom" v-for="(item, index) in strategy" :key="item.id">
          <div class="item-user">
            <p class="item-name">{{item.title}}</p>
            <p class="item-title">{{item.summary}}</p>
            <p class="item-comment">
              <span class="browse">{{item.viewCount}}</span>浏览·
              <span class="collect">{{item.collectCount}}</span>收藏
            </p>
          </div>
          <img v-lazy="item.imgUrl" alt="" class="item-img">
        </router-link>
      </ul>
    </div>
    <!-- <transition name="loading">  
      <div class="loadingBox" v-show="isLoading" ref="loadingBox">
        <img class="loadImg" src="../../../static/img/juhua.gif" alt="">
        <span ref="loadingstatus">正在加载……</span>
      </div>
    </transition>
    <div class="toTop" v-show="toTopShow" ref="toTop" @click="totopClick">
      <span class="toTopicon"></span>
    </div> --> 
  </div>
</template>

<script>
  // import axios from 'axios'
  // import { mapState, mapMutations } from 'vuex'
export default {
    props: ['strategy'],
    name: 'mainStrategy'
    // data () {
    //   return {
    //     a: 0,
    //     pageNum: 1,
    //     isLoading: false,
    //     toTopShow: false,
    //     loadstrategy: [],
    //     name: '攻略'
    //   }
    // },
    // watch: {
    //   list () {
    //     this.isLoading = false
    //   }
    // },
    // methods: {
    //   getListInfo () {
    //     axios.get('/static/loadStrategy.json?city=' + this.city + '&page=' + this.pageNum)
    //       .then(this.handleGetDataSucc.bind(this))
    //       .catch(this.handleGetDataError.bind(this))
    //   },
    //   handleGetDataSucc (res) {
    //     res = res ? res.data : null
    //     if (res && res.data && res.data.strategy) {
    //       this.loadstrategy = this.loadstrategy.concat(res.data.strategy)
    //       this.pageNum += 1
    //     }
    //   },
    //   handleGetDataError () {
    //     this.isLoading = true
    //     this.$refs.loadingstatus.innerHtml = '已经加载全部~~'
    //   },
    //   bindScroll () {
    //     this.proxyFn = this.handleScroll.bind(this)
    //     window.addEventListener('scroll', this.proxyFn)
    //   },
    //   unbindScroll () {
    //     window.removeEventListener('scroll', this.proxyFn)
    //   },
    //   handleScroll () {
    //     const pageHeight = document.body.clientHeight
    //     const screenHeight = window.screen.height
    //     const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    //     if (scrollTop >= pageHeight - screenHeight - 40 && !this.isLoading) {
    //       this.getListInfo()
    //       this.isLoading = true
    //     } else if (scrollTop > screenHeight) {
    //       this.toTopShow = true
    //     } else if (scrollTop <= 10) {
    //       this.toTopShow = false
    //     }
    //   },
    //   totopClick () {
    //     var timer = null
    //     clearInterval(timer)
    //     let scrollTop = document.documentElement.scrollTop
    //     timer = setInterval(function () {
    //       scrollTop = scrollTop - scrollTop / 10
    //       window.scrollTo(0, scrollTop)
    //       if (scrollTop < 10) {
    //         clearInterval(timer)
    //       }
    //     }, 10)
    //   },
    //   changeTitle () {
    //     this.getTitle(this.name)
    //   },
    //   ...mapMutations(['getTitle'])
    // },
    // computed: {
    //   ...mapState(['city', 'title']),
    //   list () {
    //     return this.strategy.concat(this.loadstrategy)
    //   }
    // },
    // created () {
    //   this.bindScroll()
    // },
    // destroyed () {
    //   this.unbindScroll()
    // }
}
</script>

<style scoped>
  .title-box {
    padding: .28rem 0;
    padding-left: .2rem;
    margin-bottom: .2rem;
  }
  .strategy-title {
    box-sizing:border-box;
    padding-left: .2rem;
    width: 100%;
    overflow: hidden;
    line-height: .32rem;
    font-size: .3rem;
    font-weight: 900;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-left: .06rem solid #fdb92f;
  }
  .strategy-more {
    position: absolute;
    font-size: .2rem;
    color: #808080;
    right: .2rem;
    margin-top: .05rem;
    line-height: .22rem;
  }
  .right-arr {
    font-size: .22rem;
    line-height: .22rem;
    float: right;
  }
  .loadingBox {
    text-align: center;
    vertical-align: middle;
    color: #9e9e9e;
    line-height: .8rem;
  }
  .loading-enter-active,.loading-leave-active {
    transition: opacity .5s;
  }
  .loading-enter,.loading-leave-active-to {
    opacity: 0;
  }
  .loadImg {
    height: .28rem;
    width: .28rem;
  }
  .strategy-info {
    overflow: hidden;
    width: 100%;
    margin-bottom: 1rem;
  }
  .strategy-list {
    width: 100%;
  }
  .strategy-item {
    box-sizing:border-box;
    display: flex;
    justify-content: space-between;
    box-sizing:border-box;
    width: 100%;
    padding: .2rem;
  }
  .item-img {
    display: block;
    width: 2.6rem;
    height: 1.9rem;
  }
  .item-title {
    height: .76rem;
    overflow: hidden;
    line-height: .38rem;
    font-weight: 400;
    font-size: .28rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .item-name {
    font-size: .28rem;
    font-weight: 900;
  }
  .item-comment {
    font-size: .24rem;
  }
  .item-user {
    padding-right:30px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
  .browse,.collect {
    margin-right: .1rem;
    font-weight: 900;
  }
  .toTop{
    position: fixed;
    right: 0.4rem;
    bottom: 1.5rem;
    height: 1.04rem;
    width: 1.04rem;
    z-index: 9999;
  }
  .toTopicon {
    display: inline-block;
    height: 100%;
    width: 100%;
    background: url(../../../static/img/toTop.png);
    background-size: 100% 100%; 
  }
</style>