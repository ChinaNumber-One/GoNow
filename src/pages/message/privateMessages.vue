<template>
	<div class="system-con scroller" ref="systemscroller">
    <ul class="system-list">
      <li class="system-item border-bottom" v-for="item in letter" :key="item.id">
        <div class="item-imgbox">
          <img v-lazy="item.userimg" alt="" class="item-img">
        </div>
        <div class="item-txt">
          <span class="txt-name">{{item.name}}</span>
          <span class="txt-message">{{item.message}}</span>
          <span class="txt-time">{{item.time}}</span>
        </div>
      </li>
    </ul> 
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: ['letter'],
  mounted () {
    this.scroll = new BScroll(this.$refs.systemscroller)
  },
  watch: {
    letter () {
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
    height: 1.4rem;
  }
  .item-imgbox {
    height: .8rem;
    width: .8rem;
    margin: .3rem .2rem;
  }
  .item-img {
    height: 100%;
    width: 100%;
  }
  .item-txt {
    padding-top: .4rem;
    flex: 1;
    overflow: hidden;
    position: relative;
  }
  
  .txt-name {
    display: inline-block;
    width: 100%;
    font-size: .32rem;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: .1rem;
  }
  .txt-message {
    display: inline-block;
    padding-right: 1.2rem;
    word-break:break-all;
    font-size: .24rem;
    line-height: .26rem;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .txt-time {
    position: absolute;
    right: .2rem;
    top: .38rem;
  }
</style>