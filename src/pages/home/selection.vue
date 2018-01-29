<template>
  <div class="selection">
  	<h2 class="title">
  		<span class="tipL">精选</span>
  		<router-link to="/travelsList" tag="span" class="tipR">更多  ></router-link>
  	</h2>
  	<div class="selBox" ref="wrapper">
  	  <ul class="selList">
  	  	<router-link tag="li" :to="/travelsDetail/ + item.id " class="selCont" 
  	  		v-for="item of selectionInfo"
  	  		:key="item.id">
            <div class="sel-date">
              <span class="date-time">{{item.createdDate.split('-')[2]}}</span>
              <span class="date-date">
                <i class="date-year">{{item.createdDate.split('-')[0]}}</i>
                <i class="date-month">{{item.createdDate.split('-')[1]}}</i>
              </span>
            </div>
            <img class="sel-img" v-lazy="item.imgUrl">
            <p class="sel-desc" v-text="item.title"></p>
            <div class="sel-res">
              <div class="res-left">
                <img :src="item.userImg">{{item.nickname || user}}在<span>{{item.place}}</span>
              </div>
              <div class="res-right">
                <span class="mr1">{{item.browseNum}}</span>浏览·
                <span class="mr1">{{item.reply}}</span>回复
              </div>
            </div>
  	  	</router-link>
  	  </ul>
  	</div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default{
    name: 'selection',
    props: {
      selectionInfo: Array
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
      selectionInfo () {
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
      height:100%
      .selList
        display:flex
        flex-wrap: nowrap
        width:41.2rem;
        .selCont
          position:relative
          width:6.68rem
          margin-right:.2rem
          .sel-img
            width:6.68rem
            height:3.7rem
          .sel-date
            position: absolute
            display:flex
            justify-content: center
            background: #ffbf1c
            top:0
            left:.3rem
            height:.44rem
            width: 1.4rem
            border-bottom-left-radius: .1rem
            border-bottom-right-radius: .1rem
            padding:.1rem 0
            .date-time
              font-size:.32rem
              font-weight:900
              line-height:.44rem
              padding-right:.06rem
              border-right: .01rem solid #000
            .date-date
              display:flex
              flex-direction: column
              justify-content: space-around
              text-align: center
              padding-left: .06rem
              font-size: .2rem

              



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
            font-weight:800
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
              font-weight:900
              color:#999
              img
                width:.5rem
                height:.5rem
                border-radius:50%
                margin-right:.1rem
              span
                font-weight:600
                color: #ffbf1c
                margin-left:.1rem
            .res-right
              span
                font-weight:600
</style>