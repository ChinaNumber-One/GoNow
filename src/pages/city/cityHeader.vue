<template>
  <div class="header border-bottom">
  	<h1 class="title">目的地切换
      <span class="iconfont back" @click="handleBack">&#xe662;</span>
    </h1>
    
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
  .header {
    height: .88rem;
  }
  .title {
    width: 100%;
    line-height: .88rem;
    text-align: center;
    font-size: .32rem;
    position: relative;
  }
  .back {
    position: absolute;
    left: .28rem;
    line-height: .88rem;
    font-size: .38rem;
  }
</style>
