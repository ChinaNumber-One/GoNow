<template>
	<div class="selection-detail">

		<div class="detail-header">
			<img class="back" @click="handleBack" src="/static/img/back.png">
      游记
      <img class="star" src="/static/img/star_blank.png" @click="changeCollect" v-if="!isCollect">
      <img class="star" src="/static/img/slection.png" @click="changeCollect" v-if="isCollect">
		</div>

    <div class="detail-top">
      <div class="top-time">
        <span class="time-day">{{date.split('-')[2]}}</span>
        <span class="time-date">
          <i class="date-year">{{date.split('-')[0]}}</i>
          <i class="date-month">{{date.split('-')[1]}}</i>
        </span>
      </div>
      <div class="top-title">游记</div>
    </div>
    
    <detail-con :detail="detail"></detail-con>
    <div class="toTop" v-show="toTopShow" ref="toTop" @click="totopClick">
      <span class="toTopicon"></span>
    </div>
	</div>
</template>

<script>
import axios from 'axios'
import detailCon from './detailCon'
export default {

  components: {
    detailCon
  },
  data () {
    return {
      toTopShow: false,
      isCollect: false,
      detail: {},
      date: ''
    }
  },
  methods: {
    handleBack () {
      this.$router.go(-1)
    },
    changeCollect () {
      if (window.localStorage.isLogin) {
        if (this.isCollect) {
          this.isCollect = false
        } else {
          this.isCollect = true
        }
      } else {
        this.$router.push('/login')
      }
    },
    getDataInfo () {
      axios.get('/visit/get.html?id=' + this.$route.params.id)
          .then(this.handleGetVisitSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
    },
    handleGetVisitSucc (res) {
      if (res && res.data.data) {
        this.detail = res.data.data.visit
        this.date = res.data.data.visit.createdDate
      }
    },
    handleGetDataErr () {
      alert('服务器发生错误！')
    },
    bindScroll () {
      this.proxyFn = this.handleScroll.bind(this)
      window.addEventListener('scroll', this.proxyFn)
    },
    unbindScroll () {
      window.removeEventListener('scroll', this.proxyFn)
    },
    handleScroll () {
      const screenHeight = window.screen.height
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > screenHeight) {
        this.toTopShow = true
      } else if (scrollTop <= screenHeight) {
        this.toTopShow = false
      }
    },
    totopClick () {
      var timer = null
      clearInterval(timer)
      let scrollTop = document.documentElement.scrollTop
      timer = setInterval(function () {
        scrollTop = scrollTop - scrollTop / 10
        window.scrollTo(0, scrollTop)
        if (scrollTop < 10) {
          clearInterval(timer)
        }
      }, 10)
    }
  },
  created () {
    this.getDataInfo()
    this.bindScroll()
  }
}
</script>

<style scoped>
  .selection-detail {
    background: #fff;
    padding-top: .88rem;
  }
  .detail-header {
    position: fixed;
    top: 0;
    height: .88rem;
    width: 100%;
    line-height:.88rem;
    text-align: center;
    font-size: .32rem;
    font-weight: 500;
    background: #fff;
  }
	.back {
    position:absolute;
    left:.17rem;
    top:.25rem;
    width:.25rem;
    height:.41rem;
  }
  .star {
    position:absolute;
    right:.17rem;
    top:.25rem;
    width:.38rem;
    height:.36rem;
  }
  .detail-top {
    height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #008887;
  }
  .top-time {
    display: flex;
    justify-content: center;
    margin-bottom: .2rem;
  }
  .time-date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: .44rem;
    padding: 0 .1rem;
    border-right: .06rem solid #008887;
    text-align: center;
  }
  .time-day {
    padding: 0 .1rem;
    font-size: 1rem;
    border-right: .06rem solid #008887;
    border-left: .06rem solid #008887;
  }
  .top-title {
    font-size: .5rem;
    font-weight: 900;
  }
  .toTop {
    position: fixed;
    right: .4rem;
    bottom: .6rem;
    height: 1.04rem;
    width: 1.04rem;
    z-index: 9999;
  }
  .toTopicon {
    display: inline-block;
    display: inline-block;
    height: 100%;
    width: 100%;
    background: url(../../../../static/img/toTop.png);
    background-size: 100% 100%; 
  }
</style>