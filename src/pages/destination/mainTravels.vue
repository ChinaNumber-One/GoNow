<template>
  <div>
    <div class="title-box">
      <h2 class="hottravel-title">热门游记<router-link to="/travelsList" tag="span" class="hottravel-more">更多<i class="iconfont right-arr">&#xe610;</i></router-link></h2>
    </div>
    <div class="hottravel-info border-bottom" ref="hotscroll">
      <ul class="hottravel-list">
        <li class="hottravel-item" v-for="item in travels" :key="item.id">
          <router-link :to="'/travelsDetail/' + item.id" tag="div">
            <img :src="item.imgUrl" alt="" class="item-img">
            <p class="item-title">{{item.title}}</p>
            <div class="item-user">
              <div class="userinfo">
                <img v-lazy="item.userImg" alt="" class="item-userimg">
                <span class="mr1 userName">{{item.nickname}}</span>
              </div>
              <p class="item-comment">  
                <span class="browse mr1"><i class="nums">{{item.browseNum}}</i><i>浏览·</i></span>
                <span class="reply mr1"><i class="nums">{{item.reply}}</i><i>评论</i></span>
              </p>
            </div>
          </router-link>  
        </li>
      </ul>
    </div> 
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
export default {
    props: ['travels'],
    mounted () {
      this.scroll = new BScroll(this.$refs.hotscroll, {
        scrollX: true,
        scrollY: false,
        eventPassthrough: 'vertical',
        click: true
      })
    },
    watch: {
      travels () {
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
    height: 4.6rem;
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
    display: inline-block;
    line-height: .26rem;
    text-align: right;
    display: flex;
  }
  .item-comment {
    line-height: .4rem;
    font-size: .18rem;
    flex: 1;
    display: flex;
    align-items: center;
  }
  .userinfo {
    display: flex;
    align-items: center;
  }
  .userName {
    display: inline-block;
    width: .8rem;
    text-align: right;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .24rem;
    line-height: .4rem;
  }
  .nums {
    display: inline-block;
    width: .7rem;
    text-align: right;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 600;
  }
</style>