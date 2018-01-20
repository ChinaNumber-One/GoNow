<template>
	<div class="mine-icons">
    <ul class="icons-list">
      <li class="icons-item" style="border-right: 0.02rem solid #dcdcdc;border-bottom: 0.02rem solid #dcdcdc">
        <img src="../../../static/img/slection.png" alt="" style="height: .64rem;width: .66rem;">
        <span class="item-title">我的收藏</span>
      </li>
      <li class="icons-item" style="border-right: 0.02rem solid #dcdcdc;border-bottom: 0.02rem solid #dcdcdc">
        <img src="../../../static/img/order.png" alt="" style="height: .63rem;width: .5rem">
        <span class="item-title">我的订单</span>
      </li>
      <li class="icons-item" style="border-bottom: 0.02rem solid #dcdcdc">
        <img src="../../../static/img/download.png" alt="" style="height: .73rem;width: .6rem">
        <span class="item-title">我的下载</span>
      </li>
      <li class="icons-item" style="border-right: 0.02rem solid #dcdcdc;">
        <img src="../../../static/img/travels.png" alt="" style="height: .58rem;width: .66rem">
        <span class="item-title">我的游记</span>
      </li>
      <li class="icons-item" style="border-right: 0.02rem solid #dcdcdc;">
        <img src="../../../static/img/wallet.png" alt="" style="height: .51rem;width: .58rem">
        <span class="item-title">我的钱包</span>
      </li>
      <li class="icons-item" >
        <img src="../../../static/img/customservice.png" alt="" style="height: .6rem;width: .6rem">
        <span class="item-title">客服</span>
      </li>
    </ul>
  </div>
</template>

<script>
	export default {}
</script>

<style scoped>
	.mine-icons {
    margin: .2rem 0;
    height: 3.8rem;
    background: #fff;
  }
  .icons-list {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .icons-item {
    width: 33.33%;
    height: 1.9rem;
    box-sizing:border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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