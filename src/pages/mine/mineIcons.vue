<template>
	<div class="mine-icons">
    <div class="icons-box">
      <div class="logoImg">
        <img src="../../../static/img/logo.png" alt="">
      </div>
      <ul class="icons-list">
        <li class="icons-item"  @click="travelsClick">
          <img src="../../../static/img/travels.png" alt="" style="height: .58rem;width: .66rem">
          <span class="item-title">我的游记</span>
        </li>
        <li class="icons-item" @click="customservice">
          <img src="../../../static/img/customservice.png" alt="" style="height: .6rem;width: .6rem">
          <span class="item-title">客服</span>
        </li>
      </ul>
      <!-- <li class="icons-item" style="border-right: 0.02rem solid #dcdcdc;border-bottom: 0.02rem solid #dcdcdc">
        <img src="../../../static/img/slection.png" alt="" style="height: .64rem;width: .66rem;">
        <span class="item-title">我的收藏</span>
      </li>
      <li class="icons-item" style="border-right: 0.02rem solid #dcdcdc;border-bottom: 0.02rem solid #dcdcdc">
        <img src="../../../static/img/order.png" alt="" style="height: .63rem;width: .5rem">
        <span class="item-title">我的订单</span>
      </li> -->
      <!-- <li class="logoImg">
        <img src="../../../static/img/logo.png" alt="">
      </li>
      <li class="icons-item"  @click="travelsClick">
        <img src="../../../static/img/travels.png" alt="" style="height: .58rem;width: .66rem">
        <span class="item-title">我的游记</span>
      </li> -->
      <!-- <li class="icons-item" style="border-right: 0.02rem solid #dcdcdc;">
        <img src="../../../static/img/wallet.png" alt="" style="height: .51rem;width: .58rem">
        <span class="item-title">我的钱包</span>
      </li>
      <li class="icons-item" >
        <img src="../../../static/img/customservice.png" alt="" style="height: .6rem;width: .6rem">
        <span class="item-title">客服</span>
      </li> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    travelsClick () {
      if (window.localStorage.isLogin) {
        this.$router.push('/diary')
      } else {
        this.$message({
          message: '请先登录！',
          duration: 1000,
          type: 'warning',
          center: true
        })
      }
    },
    customservice () {
      this.$router.push('/customservice')
    }
  }
}
</script>

<style scoped>
	.mine-icons {
    margin: .1rem 0;
    height: 2.2rem;
    background: #fff;
  }
  .icons-box {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /*flex-wrap: wrap;*/
    /*padding: 0 .4rem;*/
  }
  .icons-list {
    width: 50%;
    display: flex;
    justify-content: center;
  }
  .icons-item {
    width: 50%;
    box-sizing:border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .item-title {
    margin-top: .24rem;
    font-size: .24rem;
    text-align: center;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>