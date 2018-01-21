<template>
	<div style="background:#fff">
		<div class="header">
			<img @click="handleBack" src="static/img/back.png" alt="">
			<span>车票</span>
		</div>
		<div class="plane">
			<img src="static/img/plane.png" alt="">
		</div>
		<div class="type">
			<div><span>单程</span></div>
			<div><span>往返</span></div>
		</div>
		<div class="city">
			<select class="from" >
				<option value ="volvo">北京</option>
				<option value ="saab">上海</option>
				<option value="opel">呼和浩特</option>
				<option value="audi">重庆</option>
			</select>
			<img src="" alt="">
			<select class="to" >
				<option value ="volvo">三亚</option>
				<option value ="saab">天津</option>
				<option value="opel">大理</option>
				<option value="audi">呼伦贝尔</option>
			</select>
		</div>
		<div class="date-pick">
			<date-picker v-model="time1" :first-day-of-week="1"></date-picker>
		</div>
		<div class="search">
			<div class="search-btn">搜索</div>
		</div>
		<div class="order">
			<div>
				<div class="quan">
					<img src="static/img/ticket2.png" alt="">
					<span>我的优惠券</span>
				</div>
			</div>
			<div>
				<div class="quan">
					<img src="static/img/ticket1.png" alt="">
					<span>我的订单</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  import DatePicker from 'vue2-datepicker'
  export default {
    name: 'ticket',
    components: { DatePicker },
    data () {
      return {
        time1: '',
        time2: ''
      }
    },
    methods: {
      handleBack () {
        this.$router.go(-1)
      }
    },
    updated () {
    }
  }
</script>
<style scoped lang="stylus">
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
			span
				font-size:.3rem
				padding-bottom:.14rem
				border-bottom:1px solid orange
	.city
		display:flex
		justify-content:space-between
		align-items:center
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
	.date-pick
		width:94%
		margin:0 auto
		height:1.35rem
		line-height:1.35rem
		border-bottom:1px solid #ccc
	.search
		height:4.5rem
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
			background:yellow
			border-radius:5px
	.order
		display:flex
		justify-content:space-around
		align-items:center
		height:1.45rem
		div
			width:50%
			margin:0 auto
			.quan
				width:1.5rem
				text-align:center
				img
					width:.45rem
					height:.32rem
				span
					margin-top:.2rem
					display:inline-block
</style>