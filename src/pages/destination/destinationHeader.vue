<template>
	<div class="destination-header" ref="header">
    <div class="search-con" ref="search">
      <span class="search-history" ref="history"></span>
      <span class="search-box" ref="searchBox">
        <router-link to="/city" tag="span" class="searchrouter">
          <em class="searchicon" ref="searchicon"></em>
          {{headerInfo.searchtxt}}
        </router-link>
      </span>
      <router-link to="/Chinesemap" tag="div">
        <span class="search-position" ref="map"></span>
      </router-link>
    </div>

    <div class="city-temp">
      <span class="addr-city">
        <router-link to="/city" tag="div" class="routerLink">
          <i class="cityicon"></i>
          <em class="city">{{city}}</em>
        </router-link>
      </span>
      <span class="temp-num">
        {{headerInfo.temperature}}°
        <i class="weather">{{headerInfo.weather}}</i>
      </span>
      <!-- <span class="more-img">
        339万张图片
        <i class="iconfont right-arr">&#xe610;</i>
      </span> -->
    </div>    

	</div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    props: ['headerInfo', 'views'],
    computed: {
      ...mapState(['city']),
      getRandBG () {
        const maxIndex = this.headerInfo.viewImg.length - 1
        return Math.round(Math.random() * maxIndex)
      }
    },
    watch: {
      headerInfo () {
        this.$nextTick(() => {
          this.$refs.header.style.backgroundImage = 'url(' + this.headerInfo.viewImg[this.getRandBG] + ')'
        })
      }
    },
    methods: {
      bindScroll () {
        this.proxyFn = this.handleScroll.bind(this)
        window.addEventListener('scroll', this.proxyFn)
      },
      unbindScroll () {
        window.removeEventListener('scroll', this.proxyFn)
      },
      handleScroll () {
        const scrolltop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrolltop > 150) {
          this.$refs.history.style.backgroundImage = 'url(../../../static/img/historyicon2.png)'
          this.$refs.map.style.backgroundImage = 'url(../../../static/img/mapicon2.png)'
          this.$refs.searchicon.style.backgroundImage = 'url(../../../static/img/searchicon2.png)'
          this.$refs.search.style.background = 'rgba(255,255,255,1)'
          this.$refs.searchBox.style.background = 'rgba(0,0,0,.1)'
          this.$refs.searchBox.style.color = 'rgba(0,0,0,1)'
        } else {
          this.$refs.history.style.backgroundImage = 'url(../../../static/img/historyicon1.png)'
          this.$refs.map.style.backgroundImage = 'url(../../../static/img/mapicon1.png)'
          this.$refs.searchicon.style.backgroundImage = 'url(../../../static/img/searchicon1.png)'
          this.$refs.search.style.background = 'rgba(255,255,255,0)'
          this.$refs.searchBox.style.background = 'rgba(255,255,255,.3)'
          this.$refs.searchBox.style.color = 'rgba(255,255,255,1)'
        }
      }
    },
    created () {
      this.bindScroll()
    },
    destroyed () {
      this.unbindScroll()
    }
  }
</script>
<style scoped lang="stylus">
  .destination-header {
    height: 4.6rem;
    width: 100%;
    background-color:#000;
    // background: url(../../../static/img/top.png);
    background-size: 100% 100%!important; 
  }
  .search-con {
    width: 100%;
    height: .88rem;
    display: flex;
    color: #fff;
    position: fixed;
    top: 0;
    z-index: 9999;
  }
  .search-history{
    display: inline-block;
    width: .34rem;
    height: .34rem;
    background: url(../../../static/img/historyicon1.png);
    background-size: 100% 100%;
    margin:.28rem .46rem .1rem .4rem;
  }
  .search-position {
    display: inline-block;
    width: .34rem;
    height: .34rem;
    background: url(../../../static/img/mapicon1.png);
    background-size: 100% 100%;
    margin:.28rem .4rem .1rem .46rem;
  }
  .search-box {
    flex: 1;
    height: .6rem;
    margin-top: .14rem;
    background:rgba(255,255,255,.3);
    color: #fff;
    line-height: .6rem;
    border-radius: .1rem;
    text-align: center;
  }
  .searchrouter {
    position: relative;
  }
  .searchicon {
    position: absolute;
    display: inline-block;
    width: .34rem;
    height: .34rem;
    left: -0.54rem;
    background: url(../../../static/img/searchicon1.png);
    background-size: 100% 100%;
    top: 0;
  }
  .city-temp {
    box-sizing:border-box;
    height: 100%;
    padding-top: 1.24rem;
    position: relative;
  }
  .addr-city {
    position:absolute;
    top: 1.5rem;
    left: .2rem;  
    display: inline-block;
    font-size: .38rem;
    font-weight: 400;
    margin-left: .1rem;  
    color: #fff;
  }
  .addr-province {
    overflow: hidden;
    width: 100%;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .routerLink {
    padding-right:10px;
    display: flex;
    justify-content: center;
    max-width: 4rem;
    min-width: 1.76rem;
    line-height: 1rem;
    background: rgba(0,0,0,0.5);
    border-radius: .2rem;
  }
  .city {
    overflow: hidden;
    max-width: 2.6rem;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .cityicon {
    height: .44rem;
    width: .44rem;
    background: url(../../../static/img/cityicon.png);
    background-size: 100% 100%;
    margin: .28rem .16rem .28rem .2rem;
  }
  .temp-num {
    position: absolute;
    right: .2rem;
    bottom: .3rem;
    color:#fff;
    font-size: .3rem;
  }
  .more-img {
    position: absolute;
    bottom: .3rem;
    left: .2rem;
    color: #fff;
    font-size: .28rem;
    line-height: .3rem;
  }
  .right-arr {
    font-size: .24rem;
    line-height: .3rem;
  }
  .temp-icon {
    display: inline-block;
    width: .34rem;
    height: .3rem;
    margin-left: .16rem;
    background: url(../../../static/img/wether.png);
    background-size: 100% 100%;
  }
  .header-time {
    box-sizing:border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
    line-height: .4rem;
    font-size: .3rem;
    color: #fff;
    padding: .3rem .38rem;
  }
  .time-date,.time-week {
    overflow: hidden;
    width: 40%;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .time-week {
    text-align: right;
  }
</style>