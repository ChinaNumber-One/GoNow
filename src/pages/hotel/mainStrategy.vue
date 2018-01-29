<template>
  <div class="h6">
    <div class="title-box">
      <h2 class="hottravel-title">酒店攻略<span class="hottravel-more">更多<i class="iconfont right-arr">&#xe610;</i></span></h2>
    </div>
    <div class="hottravel-info" ref="hotscroll">
      <ul class="hottravel-list">
        <li class="hottravel-item" v-for="item in strategy" :key="item.id">
          <div>
            <img :src="item.imgUrl" alt="" class="item-img">
            <p class="item-title">{{item.title}}</p>
            <div class="item-user">
              <p class="item-comment">
                <span class="browse mr1">{{item.viewCount}}</span>评论· 
                <span class="reply mr1">{{item.collectCount}}</span>收藏
              </p>
            </div>
          </div>  
        </li>
      </ul>
    </div> 
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
export default {
    props: ['strategy'],
    mounted () {
      this.scroll = new BScroll(this.$refs.hotscroll, {
        scrollX: true,
        scrollY: false,
        eventPassthrough: 'vertical',
        click: true
      })
    },
    watch: {
      strategy () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    }
}
</script>

<style scoped>
  .title-box {
    padding: .28rem 0;
    padding-left: .2rem;
    margin-bottom: .2rem;
  }
  .mr1{
    margin-right:.1rem;
  }
  .hottravel-title {
    box-sizing:border-box;
    width: 100%;
    padding-left: .2rem;;
    overflow: hidden;
    line-height: .32rem;
    font-size: .3rem;
    font-weight: 900;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-left: .06rem solid #fdb92f;
  }
  .hottravel-more {
    position: absolute;
    font-size: .22rem;
    color: #808080;
    right: .2rem;
    margin-top: .05rem;
    line-height: .22rem;
  }
  .right-arr {
    font-size: .22rem;
    line-height: .22rem;
    float: right;
  }
  .hottravel-info {
    overflow: hidden;
    width: 100%;
    padding-left: .2rem;
  }
  .hottravel-info::before {
    border-color: #9e9e9e;
  }
  .hottravel-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 39rem;
  }
  .hottravel-item {
    width: 4rem;
    margin-right:.3rem;
  }
  .item-img {
    display: block;
    width: 100%;
    height: 2.8rem;
    margin-bottom: .2rem;
  }
  .item-title {
    width: 100%;
    line-height: .26rem;
    overflow: hidden;
    margin-bottom: .2rem;
    line-height: .38rem;
    font-weight: 900;
    font-size: .26rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-user {
    width: 100%;
    margin-bottom: .2rem;
    display: flex;
    justify-content: space-between;
  }
  .item-userimg {
    height: .4rem;
    width: .4rem;
    border-radius: 50%;
  }
  .browse,.reply {
    font-weight: 900;
  }
  .item-comment {
    line-height: .4rem;
    font-size: .24rem;
  }
  .h6{
  height:6.3rem;
  }
</style>