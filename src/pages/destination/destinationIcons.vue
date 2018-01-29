<template>
	<div class="destination-icons">
    <router-link to="/strategyList" tag="div" class="icons-item" >
      <img src="../../../static/img/攻略.png" alt="" class="icons-img">
      <p class="icons-title">攻略</p>
    </router-link>
    <router-link to="/hotel" tag="div" class="icons-item" >
      <img src="../../../static/img/酒店.png" alt="" class="icons-img">
      <p class="icons-title">酒店</p>
    </router-link> 
    <!-- <div class="icons-item" >
      <img src="../../../static/img/景点.png" alt="" class="icons-img">
      <p class="icons-title">景点</p>
    </div>  -->
    <router-link to="/travelsList" tag="div" class="icons-item" >
      <img src="../../../static/img/游记.png" alt="" class="icons-img">
      <p class="icons-title">游记</p>
    </router-link> 
    <!-- <div class="icons-item" >
      <img src="../../../static/img/美食.png" alt="" class="icons-img">
      <p class="icons-title">美食</p>
    </div> 
    <div class="icons-item" >
      <img src="../../../static/img/定制旅行.png" alt="" class="icons-img">
      <p class="icons-title">定制旅行</p>
    </div>  --> 
  </div>
</template>

<script>
	export default {
  props: ['iconsInfo']
	}
</script>

<style scoped>
	.destination-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 1.8rem;
    text-align: center;
    background: #fff;
  }
  .icons-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33.3%;
  }
  .icons-img {
    height: 1rem;
    width: 1rem;
  }
  .icons-title {
    margin-top: .2rem;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>