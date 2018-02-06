<template>
	<div class="main">
		<div class="header border-bottom">
  	  <img @click="handleBack" class="back" src="/static/img/back.png">
  	  <h1 class="title">关于我们</h1>
    </div>
    <div class="mainBox">
      <div class="logoBox">
        <img src="../../../static/img/logo.png" alt="">
      </div>
      <div class="version">版本号:v1.0.3</div>
      <div class="txtBox">
        <p>即刻出发，寻找你的蛙儿~</p>
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
  .mainBox {
    flex: 1;
    text-align: center;
  }
  .logoBox {
    margin-top: 2.8rem;
  }
  .version {
    margin-top: .4rem;
  }
  .txtBox {
    margin-top: 2.6rem;
  }
</style>	