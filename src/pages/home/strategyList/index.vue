<template>
	<div class="list-box">
		<div class="list-header">
			<img class="logo-img" src="../../../../static/img/logo.png" >
      <span class="title">攻略</span>
			<router-link to="/" tag="span" class="go-index">官网首页</router-link> 
		</div>
		<Swiper :banner="banner"></Swiper>
    <List :list="list"></List>
	</div>
</template>

<script>
import axios from 'axios'
import Swiper from './swiper'
import List from './list'
export default {
  name: 'strategyList',
  data () {
    return {
      banner: [],
      list: []
    }
  },
  components: {
    Swiper,
    List
  },
  methods: {
    getDataInfo () {
      axios.get('/common/strategyList.html')
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      if (res && res.data.data) {
        this.banner = res.data.data.banner
        this.list = res.data.data.list
      }
    },
    handleGetDataErr () {
      alert('服务器错误，获取数据失败！')
    }
  },
  created () {
    this.getDataInfo()
  }
}
</script>

<style scoped>
	.list-box {
		background: #fff;
    padding-top: .88rem;
	}
	.list-header {
		height: .88rem;
    width: 100%;
    background: #fff;
    position: fixed;
    top:0;
		display: flex;
		justify-content: space-between;
    z-index: 9999;
    border-bottom: 0.01rem solid #999;

	}
	.logo-img {
		height: .58rem;
		margin:.15rem;
	}
	.go-index {
		line-height: .88rem;
		padding-right: .4rem;
		color: #ffbf1c;
		font-weight: 600;
		font-size: .28rem;
	}
  .title {
    line-height: .88rem;
    padding-right: .4rem;
    color: #000;
    font-weight: 600;
    font-size: .32rem;
  }
</style>