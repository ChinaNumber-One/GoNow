<template>
	<div class="main">
    <div class="header border-bottom">
      <img @click="handleBack" class="back" src="/static/img/back.png">
      <h1 class="title">{{startPlace}} - {{endPlace}}</h1>
    </div>
    <div class="list-box">
      <ul class="train-list">
        <li class="list-item border-bottom" v-for="(item, index) of list" :key="index">
          <div class="info">
            <div class="start">
              <span class="startTime">{{item.startTime}}</span>
              <span class="startPlace">{{item.startStationName}}</span>
            </div>
            <div class="trainNum">
              <span class="txt">车次</span>
              <span class="num">{{item.trainName}}</span>
            </div>
            <div class="end">
              <span class="endTime">{{item.endTime}}</span>
              <span class="endPlace">{{item.endStationName}}</span>
            </div>
          </div>
          <div class="find" @click="handleshowTicket">{{txt}}</div>
          <div class="seats">
            <p class="seats-type" v-for="value of item.seats">
              <span class="seat">{{value.name}}</span>
              <span class="price">{{value.price}}元</span>
              <span class="nums">{{value.inventory}}张</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      startPlace: '',
      endPlace: '',
      queryDate: '',
      showTicket: false,
      txt: '点击查看车票',
      list: []
    }
  },
  methods: {
    handleBack () {
      this.$router.go(-1)
    },
    handleshowTicket (e) {
      if (!this.showTicket) {
        e.currentTarget.nextSibling.nextSibling.style.display = 'block'
        e.currentTarget.innerHTML = '隐藏车票信息'
      } else {
        e.currentTarget.nextSibling.nextSibling.style.display = 'none'
        e.currentTarget.innerHTML = '点击查看车票'
      }
      this.showTicket = !this.showTicket
    },
    getData () {
      axios.get('/common/tickets.html?startName=' + this.startPlace + '&&endName=' + this.endPlace + '&&queryDate=' + this.queryDate)
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      if (res && res.data.result) {
        this.list = res.data.data
      } else {
        this.$message.error({
          message: res.data.result,
          duration: 3000,
          center: true,
          onClose: () => {
            this.$router.go(-1)
          }
        })
      }
    },
    handleGetDataErr () {
      this.$message.error('网络或服务器错误！')
    }
  },
  computed: {
    ...mapState(['trains'])
  },
  created () {
    this.startPlace = this.$route.query.startPlace
    this.endPlace = this.$route.query.endPlace
    this.queryDate = this.$route.query.queryDate
    this.getData()
  }
}
</script>

<style scoped>
	.main {
    background:#fff;
  }
  .header {
    position: fixed;
    top: 0;
    height: .88rem;
    line-height: .88rem;
    width:100%;
    background: #fff;
    z-index: 1;
  }
  .back {
    position:absolute;
    left:.17rem;
    top:.25rem;
    width:.25rem;
    height:.41rem;
  } 
  .title{
    font-size:.32rem;
    width:2.4rem;
    margin:0 auto;
    text-align:center;
  }
  .list-box {
    margin-top: .88rem;
  }
  .list-item {
    padding: .2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .trainNum {
    display: flex;
    flex-direction: column;
  }
  .num {
    margin-top: .1rem;
    font-weight: 600;
  }
  .info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    height: 43%;
    padding-bottom: 2%;
  }
  .start, .end {
    display: flex;
    flex-direction: column;
  }
  .seats {
    height: 45%;
    display: none;
  }
  .startTime, .endTime {
    margin-bottom: .1rem;
    font-size:.4rem;
    font-weight: 900;
    text-align: center;
  }
  .startPlace, .endPlace {
    color: #ffbf1c;
  }
  .seats-type {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .seats-type span {
    display: inline-block;
    width: 33%;
    text-align: center;
    margin-top: .1rem;
  }
  .nums {
    color: red;
  }
  .find {
    text-align: center;
    color: #25a4bb;
    font-style: .24rem;
  }
</style>