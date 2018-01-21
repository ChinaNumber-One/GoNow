<template>
	<div class="selection-detail">

		<div class="detail-header">
			<img class="back" @click="handleBack" src="/static/img/back.png">
      精选
      <img class="star" src="/static/img/star_blank.png">
		</div>

    <div class="detail-top">
      <div class="top-time">
        <span class="time-day">{{detail.day}}</span>
        <span class="time-date">
          <i class="date-year">{{detail.year}}</i>
          <i class="date-month">{{detail.month}}</i>
        </span>
      </div>
      <div class="top-title">精选·游记</div>
    </div>
    
    <detail-con :detail="detail"></detail-con>
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
      detail: {}
    }
  },
  methods: {
    handleBack () {
      this.$router.go(-1)
    },
    getDataInfo () {
      axios.get('/api/selectionDetail.html?id=' + this.$route.params.id)
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      if (res && res.data.data) {
        this.detail = res.data.data
      }
    },
    handleGetDataErr () {
      alert('服务器发生错误！')
    }
  },
  created () {
    this.getDataInfo()
  }
}
</script>

<style scoped>
  .selection-detail {
    background: #fff;
  }
  .detail-header {
    height: .88rem;
    line-height:.88rem;
    text-align: center;
    font-size: .32rem;
    font-weight: 500;
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
        
</style>