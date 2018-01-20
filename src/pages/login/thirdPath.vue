<template>
	<div class="third-box">
		<div class="third">
      <img src="static/img/line-left.png">
      第三方账号
      <img src="static/img/line-right.png">
	  </div>
    <div class="icons">
      <div><img src="../../../static/img/qq.png" style="width: .54rem;height: .58rem">QQ</div>
      <div><img src="../../../static/img/wechat.png" style="width: .72rem;height: .6rem">微信</div>
      <div><img src="../../../static/img/sina.png" style="width: .7rem;height: .57rem">微博</div>
    </div> 
	</div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="stylus">
  .third-box
    padding-top:.8rem
    .third
      width:100%
      height:.33rem
      box-sizing:border-box
      color:#000
      text-align:center
      img
        width:36%
    .icons
      display:flex
      flex-direction:row
      justify-content:space-around
      height:1.24rem
      margin-top:1.06rem
      div
        display:flex
        flex-direction: column
        text-align:center
      img
        height: 1rem
        margin-bottom:.3rem
</style>