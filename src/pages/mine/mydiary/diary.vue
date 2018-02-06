<template>
  <div class="list">
    <div class="detail-header">
      <img class="back" @click="handleBack" src="/static/img/back.png">
      我的游记
    </div>
    <ul class="list-list">
      <div class="img-box">
        <img class="img-top" src="/static/img/headImg.jpg" alt="">
      </div>
      <li class="list-item" v-for="item of list" :key="item.id" >
        <div class="item-txt">
          <p class="item-title">{{item.title}}</p>
          <div class="item-user">
            <p class="item-text" v-html="item.article"></p>
          </div>
          <p class="item-nums">
            发表时间：<span class="item-time">{{item.createdDate}}</span>
          </p>
        </div>
      </li>  
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'mydiary',
    data () {
      return {
        list: []
      }
    },
    methods: {
      getDiaryInfo () {
        axios.get('/common/userVisit.html?id=' + window.localStorage.userId)
        .then(this.getDiaryInfoSucc.bind(this))
        .catch(this.getDiaryInfoErr.bind(this))
      },
      getDiaryInfoSucc (res) {
        if (res && res.data) {
          this.list = res.data.data.list
        }
      },
      getDiaryInfoErr () {
        this.$message.error({
          message: '网路错误！',
          duration: 3000,
          center: true
        })
      },
      handleBack () {
        this.$router.go(-1)
      }
    },
    created () {
      this.getDiaryInfo()
    }
  }
</script>
<style scoped>
  .detail-header {
    position: fixed;
    top: 0;
    height: .88rem;
    width: 100%;
    line-height:.88rem;
    text-align: center;
    font-size: .32rem;
    font-weight: 500;
    background: #fff;
    margin-bottom:.2rem;
  }
  .back{ 
    position:absolute;
    left:.17rem;
    top:.25rem;
    width:.25rem;
    height:.41rem;
  }
  .img-box {
    width:100%;
    height:3.5rem;
  }
  .img-top {
    width:100%;
    height:100%;
  }
  .list {
    margin-top: 1rem;
  }
  .list-item {
    display: flex;
    margin-top: .2rem;
    background: #fff;
    box-sizing:border-box;
    padding: .1rem 0;
  }
  .item-txt{
    width: 100%;
    box-sizing:border-box;
    padding-left: .1rem;
  }
  .item-imgBox {
    width: 40%;
  } 
  .item-img {
    width:100%;
    height: 100%;
  }
  .item-txt {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-bottom: .02rem solid #999;
  }
  .item-title {
    font-size: .34rem;
    line-height: .34rem;
    height: .58rem;
    font-weight: 900;
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .user-place {
    color:#ffbf10;
  }
  .item-nums {
    display: flex;
    font-size: .28rem;
  }
  .num{
    display: flex;
    align-items: center;
  }
  .item-time {
    width: 40%;
  }
  .item-nums {
    margin-top: .6rem;
    text-align: center;
  }
  .item-nums span {
    font-weight: 100;
  }
  .item-user {
    display: flex;
    min-height:1.2rem;
  }
  .item-text {
    line-height:.30rem;
    width: 100%;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
  .item-user span {
    display: inline-block;
  }
</style>