<template>
	<div class="ticket">
		<div class="header">
			<img @click="handleBack" src="static/img/back.png" alt="">
			<span>车票</span>
		</div>
		<div class="plane">
			<img src="static/img/plane.png" alt="">
		</div>
		<div class="type">
			<div @click="changType" :class="{ area: isActive}"><span v-bind:class="{ active: isActive }" >单程</span></div>
			<div @click="changType" :class="{ area: !isActive}"><span v-bind:class="{ active: !isActive }" >往返</span></div>
		</div>
		<div class="city">
			<!-- <router-link :to="{ name: 'city', params: { type: 'from' }}" class="startPlace" tag="div"> -->
				<el-input v-model="startPlace" placeholder="请输入起点"></el-input>
			<!-- </router-link> -->
			<img src="../../../static/img/fromto.png" alt="">
			<!-- <router-link :to="{ name: 'city', params: { type: 'to' }}" class="startPlace" tag="div"> -->
				<el-input v-model="endPlace" placeholder="请输入终点"></el-input>
			<!-- </router-link> -->
		</div>
		<div class="date-pick">
			<date-picker 
          v-model="time1" 
          :not-before="today" 
          :not-after="endDay" 
          v-bind:style="{ width: '40%', marginLeft:'2%' ,float: 'left', marginTop: '.16rem'}"
          ></date-picker>
      <date-picker v-model="time2" :not-before="today" :not-after="endDay"  v-bind:style="{ width: '40%', marginRight: '2%', float: 'right', marginTop: '.16rem' }" v-show="!isActive"></date-picker>
		</div>
		<div class="search">
			<div class="search-btn" @click="searchTicket" plain>搜索</div>
		</div>

		<!-- <div class="order">
			<div class="quan">
				<img src="static/img/ticket2.png" alt="">
				<span>我的优惠券</span>
			</div>
			<div class="quan">
				<img src="static/img/ticket1.png" alt="">
				<span>我的订单</span>
			</div>
		</div> -->

	</div>
</template>
<script>
import DatePicker from 'vue2-datepicker'
// import { mapState } from 'vuex'
export default {
  name: 'ticket',
  components: { DatePicker },
  data () {
    return {
      isReturn: true,
      isActive: true,
      times: '单程',
      time1: '',
      time2: '',
      today: '',
      endDay: '',
      startPlace: '',
      endPlace: ''
    }
  },
  methods: {
    handleBack () {
      this.$router.push('/')
    },
    changType (e) {
      if (e.target.className === '') {
        this.isActive = !this.isActive
      }
      if (this.isActive) {
        this.times = '单程'
      } else {
        this.times = '返程'
      }
    },
    searchTicket () {
      const date = this.time1.toLocaleDateString().split('/')
      if (date[1] < 10) {
        date[1] = '0' + date[1]
      }
      if (date[2] < 10) {
        date[2] = '0' + date[2]
      }
      const handlDate = date.join('-')
      if (this.time1 && this.times === '单程' && this.startPlace !== '请选择' && this.endPlace !== '请选择') {
        this.$router.push({path: '/train', query: {startPlace: this.startPlace, endPlace: this.endPlace, queryDate: handlDate}})
      } else if (this.time1 && this.time2 && this.times === '返程' && this.startPlace !== '请选择' && this.endPlace !== '请选择') {
        this.$router.push({path: '/train', query: {startPlace: this.startPlace, endPlace: this.endPlace, queryDate: handlDate}})
      } else {
        this.$message({
          message: '所选信息不完整！',
          type: 'warning',
          center: true,
          duration: 1000
        })
      }
    }
  },
  // computed: {
  //   ...mapState(['startPlace', 'endPlace'])
  // },
  created () {
    const d = new Date()
    this.today = d.toLocaleDateString()
    this.endDay = this.today.split('/')
    if (this.endDay[1] < 12) {
      this.endDay[1] = parseInt(this.endDay[1], 10) + 1
    } else {
      this.endDay[1] = 1
      this.endDay[0] = parseInt(this.endDay[0], 10) + 1
    }
    this.endDay = this.endDay.join('/')
  }
}
</script>
<style scoped lang="stylus">
.ticket
  background:#fff
  height:100vh
  position:relative
  display:flex
  flex-direction: column
	.header
		position:relative
		height:.9rem
		line-height:.9rem
		width:100%
		background:#fff
		img
			position:absolute
			left:.22rem
			top:.22rem
			width:.3rem
			height:.46rem
		span
			float:left
			margin-left:50%
			transform:translateX(-50%)
			width:.75rem
			height:.4rem
			font-size:.36rem
	.plane
		width:100%
		height:3.4rem
		img
			width:100%
			height:100%
	.type
		display:flex
		justify-content:space-around
		height:.7rem
		margin-top:.47rem
		background:#fff
		border-bottom:1px solid #ccc
		div
			width:50%
			text-align:center
			height:.7rem
			line-height:.7rem
	.city
		align-items:center
		display:flex
		justify-content:space-around
		height:1.35rem
		width:94%
		border-bottom:1px solid #ccc
		margin:0 auto
		.from
			width:auto
			text-align:center
			font-size:.35rem
			margin-left:.5rem
			font-weight:600
			border:none
		.to
			width:auto
			text-align:center
			font-size:.35rem
			margin-right:.5rem
			font-weight:600
			border:none
		img 
			height: .3rem
			margin:0 .4rem
	.date-pick
		width:94%
		margin:0 auto
		height:1.35rem
		line-height:1.35rem
		border-bottom:1px solid #ccc
	.search
		flex:1
		background:#fff
		.search-btn
			width:6.7rem
			margin:0 auto
			height:1rem
			text-align:center
			line-height:1rem
			font-size:.36rem
			font-weight:600
			margin-top:.5rem
			background:#ffbf1c
			border-radius:5px
	.order
    display:flex
    width:100%
    position: fixed
    justify-content:space-around
    align-items:center
    bottom: 0.2rem
    .quan
      display: flex
      flex-direction: column
      align-items: center
    .quan img
      width: .6rem
      height: .6rem
      margin-bottom:.2rem
</style>

<style scoped>
  .active {
    font-size:.3rem;
    padding-bottom:.14rem;
    border-bottom:.1rem solid #ffbf1c;
    font-weight: 600;
  }
     
</style>