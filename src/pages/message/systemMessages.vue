<template>
	<div class="system-con scroller" ref="systemscroller">
    <ul class="system-list">
      <li class="system-item border-bottom" v-for="item in notice" :key="item.id">
        <div class="item-imgbox">
          <img src="../../../static/img/systemimg.png" alt="" class="item-img">
        </div>
        <div class="item-txt">
          <span class="txt-title">系统通知</span>
          <span class="txt-con">{{item.messagetxt}}</span>
          <span class="txt-time">{{item.time}}</span>
        </div>
      </li>
    </ul> 
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: ['notice'],
  mounted () {
    this.scroll = new BScroll(this.$refs.systemscroller)
  },
  watch: {
    notice () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  }
}
</script>

<style scoped>
  .system-item {
    box-sizing:border-box;
    display: flex;
    height: 2.6rem;
    padding: .2rem;
  }
  .item-imgbox {
    height: .8rem;
    width: .8rem;
    margin-top: .26rem;
    margin-right: .2rem;
  }
  .item-img {
    height: 100%;
    width: 100%;
  }
  .item-txt {
    padding-top: .4rem;
    flex: 1;
    position: relative;
    overflow: hidden;
  }
  
  .txt-title {
    display: inline-block;
    width: 100%;
    font-size: .32rem;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: .1rem;
  }
  .txt-con {
    display: inline-block;
    padding-right: 1.2rem;
    word-break:break-all;
    font-size: .24rem;
    line-height: .26rem;
    padding-left: .3rem;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .txt-time {
    display: inline-block;
    position: absolute;
    bottom: 0;
  }
</style>