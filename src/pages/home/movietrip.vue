<template>
  <div class="selection">
  	<h2 class="title">
  		<span class="tipL">影视地游</span>
  		<span class="tipR">更多  ></span>
  	</h2>
  	<div class="selBox" ref="wrapper">
  	  <ul class="selList">
  	  	<li class="selCont" 
  	  		v-for="item of movietripInfo"
  	  		:key="item.id">
  	  	  <img class="sel-img" v-lazy="item.imgUrl">
  	  	  <p class="sel-desc" v-text="item.title"></p>
  	  	  <div class="sel-res">
  	  	  	<div class="res-left">
  	  	  	  <img src="https://n3-q.mafengwo.net/s10/M00/AE/EF/wKgBZ1lkcRiAXs8iAALY5sXyY7s27.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90">{{item.nickname || user}}<span>在{{item.place}}</span>
  	  	  	</div>
  	  	  	<div class="res-right">
  	  	  	  <span class="mr1">{{item.browseNum}}</span>浏览·
  	  	  	  <span class="mr1">{{item.reply}}</span>回复
  	  	  	</div>
  	  	  </div>
  	  	</li>
  	  </ul>
  	</div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default{
    name: 'movietrip',
    props: {
      movietripInfo: Array
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        scrollY: false,
        eventPassthrough: 'vertical',
        click: true
      })
    },
    watch: {
      movietripInfo () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    }
}
</script>
<style scoped lang="stylus">
  .mr1
    margin-right:.1rem
  .selection
    box-sizing:border-box
    height:7rem
    width:100%
    padding-left:.3rem
    padding-top:.3rem
    border-bottom:2px solid #eee
    .title
      height:.8rem
      .tipL
        float:left
        width:3rem
        font-weight: 600
        font-size: .32rem
        padding-left: .15rem
        border-left:3px solid orange
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      .tipR
        float:right
        width:2rem
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align:right
        margin-right:.2rem
        color:#808080
    .selBox
      width: 100%
      overflow: hidden
      height:7rem
      .selList
        display:flex
        flex-wrap: nowrap
        width:41.2rem;
        .selCont
          width:6.68rem
          height:5.35rem
          margin-right:.2rem
          .sel-img
            width:6.68rem
            height:3.7rem
          .sel-desc
            font-weight:800
            display:-webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp:2
            overflow: hidden
            margin-top:.2rem
            width: 6.68rem
            height: 1.09rem
            line-height:.38rem
            font-size: .32rem
          	color:#000
          	margin-bottom:.3rem
          .sel-res
            display:flex
            justify-content:space-between
            height:.47rem
            line-height:.47rem
            .res-left
              width:3.5rem
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              img
                width:.5rem
                height:.5rem
                border-radius:50%
            .res-right
              span
                font-weight:600
</style>