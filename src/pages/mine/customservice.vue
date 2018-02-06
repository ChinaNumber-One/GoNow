<template>
	<div class="main">
		<div class="header border-bottom">
  	  <img @click="handleBack" class="back" src="/static/img/back.png">
  	  <h1 class="title">联系我们</h1>
    </div>
    <div class="box">
    	<div class="img">
    		<img src="../../../static/img/pcER.jpg" alt="">
    		<span class="txt">联系我们</span>
    	</div>
    	<div class="img">
    		<img src="../../../static/img/gzh.jpg" alt="">
    		<span class="txt">关注公众号</span>
    	</div>
    </div>
	</div>
</template>

<script>
export default {
  methods: {
    handleBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
	.main {
		height: 100vh;
		display: flex;
		flex-direction: column;
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
 	}
 	.box {
 		flex:1;
 		display: flex;
 		flex-direction: column;
 	}
 	.box div {
 		width: 100%;
 		height: 50%;
 		display: flex;
 		flex-direction: column;
 	}
 	.img img {
		width: 50%;
 	}
 	.img {
 		display: flex;
 		flex-direction: column;
 		align-items: center;
 		justify-content: center;
 	}
 	.txt {
 		font-weight: 600;
 		font-size: .5rem;
 		margin-top: .6rem;
 	}
</style>