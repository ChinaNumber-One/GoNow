<template>
	<div>
		<div class="header">
			<img @click="handleBack" class="back" src="@/../static/img/back.png">
			<span>摄影</span>
			<img class="send" src="@/../static/img/send.png">
		</div>
		<div class="title">
			<span class="tip-left">境内摄影</span>
			<span class="more">更多 ></span>
		</div>
		<div class="motherland">
			<div class="show-list" v-for="item of homeInfo">
				<img :src="item.imgUrl">
			</div>
		</div>
		<div class="title">
			<span class="tip-left">境外摄影</span>
			<span class="more">更多 ></span>
		</div>
		<div class="motherland">
			<div class="show-list" v-for="item of foreignInfo">
				<img :src="item.imgUrl">
			</div>
		</div>
	</div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'Photography',
    data () {
      return {
        homeInfo: [],
        foreignInfo: []
      }
    },
    methods: {
      handleGetDataSucc (res) {
        console.log(res.data)
        res = res ? res.data : null
        if (res && res.data) {
          this.homeInfo = res.data.motherland
          this.foreignInfo = res.data.foreign
        }
      },
      handleGetDataErr () {
        console.log('获取数据失败')
      },
      handleBack () {
        this.$router.go(-1)
      }
    },
    mounted () {
      axios.get('/static/photo.json')
      .then(this.handleGetDataSucc)
      .catch(this.hnadleGetDataErr)
    }
  }
</script>
<style scoped lang="stylus">
	.header
		display:flex
		justify-content:space-between
		align-items:center
		box-sizing:border-box
		padding:0 0.2rem
		height:.88rem
		background:#fff
		.back
			width:.3rem
			height:.48rem
		span
			font-size:.36rem
			margin:0 auto
		.send
			width:.4rem
			height:.38rem
	.title
		display:flex
		justify-content:space-between
		align-items:center
		box-sizing:border-box
		padding:0 0.2rem
		min-height:.94rem
		background:#fff
		.tip-left
			font-size:.4rem
			font-weight:600
		.more
			font-size:.28rem
			color:#888888
	.motherland
		display:flex
		justify-content:space-around
		flex-wrap:wrap
		min-height:6.5rem
		padding-top:.3rem
		background:#fff
		img
			width:2.18rem
			height:3rem
			margin-bottom:.4rem
</style>