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
    <router-link to="/travelsList" tag="div" class="icons-item" >
      <img src="../../../static/img/游记.png" alt="" class="icons-img">
      <p class="icons-title">游记</p>
    </router-link> 
    <router-link :to="'/destination/' + city" tag="div" class="icons-item" >
      <img src="../../../static/img/目的地.png" alt="" class="icons-img">
      <p class="icons-title">目的地</p>
    </router-link>  
    <router-link to="/ticket"  tag="div" class="icons-item" >
      <img src="../../../static/img/车票.png" alt="" class="icons-img">
      <p class="icons-title">车票</p>
    </router-link> 
    <div class="icons-item" @click="write">
      <img src="../../../static/img/摄影.png" alt="" class="icons-img">
      <p class="icons-title">写游记</p>
    </div>  
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    props: ['iconsInfo'],
    computed: {
      ...mapState(['city'])
    },
    methods: {
      write () {
        if (window.localStorage.isLogin) {
          this.$router.push('/photography')
        } else {
          this.$router.push('/mine')
        }
      }
    }
  }
</script>

<style scoped>
	.destination-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 3.6rem;
    text-align: center;
    background: #fff;
    margin-bottom:0.15rem ;
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