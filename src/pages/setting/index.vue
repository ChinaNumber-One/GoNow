<template>
	<div class="setting">
		<div class="header border-bottom">
  	  <img @click="handleBack" class="back" src="/static/img/back.png">
  	  <h1 class="title">设置</h1>
    </div>
    <div class="item box1" @click="changeInfo" plain>
    	<span class="change" >修改/完善个人信息</span>
    	<span class="iconfont">&#xe610;</span>
    </div>
    <div class="item box2" @click="goFeedback">
    	<span class="change" >反馈问题</span>
    	<span class="iconfont">&#xe610;</span>
    </div>
    <div class="item box3" @click="getPoients">
    	<span class="change">给我们打分</span>
    	<span class="iconfont">&#xe610;</span>
    </div>
    <div class="item box4" @click="aboutUs">
    	<span class="change">关于我们</span>
    	<span class="iconfont">&#xe610;</span>
    </div>
    <div class="blank">
    	
    </div>
		<div class="exit" @click="exitUser" plain>退出当前账号</div>
	</div>
</template>

<script>
export default {
  methods: {
    exitUser () {
      if (window.localStorage.isLogin) {
        window.localStorage.clear()
        this.$message({
          message: '退出成功！',
          duration: 1000,
          center: true,
          onClose: () => {
            this.$router.push('/mine')
          }
        })
      } else {
        this.$message({
          message: '请先登录！',
          duration: 1000,
          type: 'warning',
          center: true,
          onClose: () => {
            this.$router.push('/mine')
          }
        })
      }
    },
    handleBack () {
      this.$router.go(-1)
    },
    getPoients () {
      this.$router.push('/getPoients')
    },
    goFeedback () {
      this.$router.push('/goFeedback')
    },
    aboutUs () {
      this.$router.push('/aboutUs')
    },
    changeInfo () {
      if (window.localStorage.isLogin) {
        this.$router.push('/changeInfo')
      } else {
        this.$message({
          message: '请先登录！',
          duration: 1000,
          type: 'warning',
          center: true,
          onClose: () => {
            this.$router.push('/mine')
          }
        })
      }
    }
  }
}
</script>

<style scoped>
	.setting {
		display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
	}
	.exit {
		width: 100%;
		font-size: .3rem;
		font-weight: 900;
		color:#0f6d8a;
		text-align: center;
		line-height: .8rem;
		background: #eee;
		background: #fff;
		margin-top: .2rem;
	}
	.item {
		line-height: .8rem;
		font-size: .3rem;
		background: #fff;
		padding-left: .4rem;
		padding-right: .2rem;
		display: flex;
		justify-content: space-between;
	}
	.box1 {
		margin:.2rem 0;
	}
	.box3,.box4 {
		margin-bottom: .2rem;  
	}
	.blank {
		flex:1;
		background: #fff;
	}
  .header {
  	position: relative;
    height: .88rem;
    line-height: .88rem;
    width:100%;
    background: #fff;
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
	  font-size:.38rem;
 	}
</style>