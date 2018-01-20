<template>
  <div class="search">
  	<div class="logo">
     <img class="logo-img" src="static/img/logo.png"> 
    </div>
  	<div class="search-input">
      <i class="searchicon"></i>
      <span class="searchtxt"> 搜索目的地/景点/酒店等</span>
    </div>
  	<router-link to="/message" tag="div" class="mes">
     <img class="mes-img" src="../../../static/img/message.png">  
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'search'
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