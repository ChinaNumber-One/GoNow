<template>
	<div class="setting">
    <img class="back" @click="handleBack" src="/static/img/back.png">
		<div class="exit" @click="exitUser">退出当前账号</div>
	</div>
</template>

<script>
export default {
  methods: {
    exitUser () {
      window.localStorage.clear()
      alert('退出成功')
    },
    handleBack () {
      this.$router.go(-1)
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
	    background: #fff;
	}
	.exit {
		position: absolute;
		bottom: .2rem;
		width: 100%;
		font-size: .3rem;
		font-weight: 900;
		color:blue;
		text-align: center;
		line-height: 1rem;
		background: #eee;
	}
  .back {
    position:absolute;
    left:.17rem;
    top:.25rem;
    width:.25rem;
    height:.41rem;
  }
</style>