<template>
  <div class="search">
  	<div class="logo">
     <img class="logo-img" src="../../../static/img/logo.png"> 
    </div>
  	<div class="search-input">
      <i class="searchicon"></i>
      <router-link to="/searchPage" class="searchtxt" tag="span"> 搜索目的地/景点/酒店等</router-link>
    </div>
  	<div class="mes" @click="goTomessage">
     <img class="mes-img" src="../../../static/img/message.png">  
    </div>
  </div>
</template>
<script>
  export default {
    name: 'search',
    methods: {
      goTomessage () {
        if (window.localStorage.isLogin) {
          this.$router.push('/message')
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
<style scoped lang="stylus">
  .search 
    display:flex;
    height:1.3rem
    background: white
    .logo 
      width: 1.6rem
      margin-top:.42rem
      height: .52rem
      margin-left: .35rem
      .logo-img
        width: 100%
        height: 100%
    .search-input 
      flex:1
      display:flex
      box-sizing:border-box
      padding-left:.2rem
      align-items:center
      justify-content: center
      height: .63rem
      border-radius: .1rem
      border:0.01rem solid #999
      margin:0.34rem 0 0 .25rem
      .searchicon
        display:inline-block
        width:.34rem
        height:.34rem
        background:url(../../../static/img/searchicon2.png)
        background-size:100% 100%
      .searchtxt
        flex:1
        display:inline-block
        line-height: .63rem
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    .mes 
      width:.44rem
      height:.51rem
      line-height: 1.3rem
      padding:.45rem .2rem 0 .2rem
      .mes-img
        float:right
        width:100%
        height:100%
</style>