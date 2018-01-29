<template>
	<div class="hotviews">
    <div class="title-box">
      <h2 class="hotviews-title">
        热门目的地
        <span class="hotviews-more">更多<i class="iconfont right-arr">&#xe610;</i></span>
      </h2>
    </div>
    <div class="hotviews-info border-bottom" ref="hotscroll">
      <ul class="hotviews-list">
        <li class="hotviews-li" v-for="item in views" :key="item.id" @click="handlChangeCity(item.city)">
          <router-link :to="'/destination/' + item.city" class="hotviews-item" tag="div">
            <img v-lazy="item.imgUrl" alt="" class="item-img" >
            <p class="item-txt">
              <span class="item-addr">{{item.city}}</span>
              <span class="item-visitors">
                <i class="number">{{item.visiterNum}}</i>
                <em>人去过</em>
              </span>
            </p>
          </router-link>
        </li>
      </ul>
    </div> 
	</div>
</template>

<script>
  import BScroll from 'better-scroll'
  import { mapState, mapMutations } from 'vuex'
export default {
    props: ['views'],
    mounted () {
      this.scroll = new BScroll(this.$refs.hotscroll, {
        scrollX: true,
        scrollY: false,
        eventPassthrough: 'vertical',
        click: true
      })
    },
    watch: {
      views () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    methods: {
      handlChangeCity (city) {
        this.getCity(city)
      },
      ...mapMutations(['getCity'])
    },
    computed: {
      ...mapState(['city'])
    }
}
</script>

<style scoped>
  .hotviews {
    width: 100%;
  }
  .title-box {
    padding: .28rem 0;
    padding-left: .2rem;
    margin-bottom: .2rem;
  }
  .hotviews-title {
    box-sizing:border-box;
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-left: .2rem;
    line-height: .32rem;
    font-size: .3rem;
    font-weight: 900;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-left: .06rem solid #fdb92f;
  }
  .hotviews-more {
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
  .hotviews-info {
    overflow: hidden;
    width: 100%;
    padding-left: .2rem;
    height: 3.2rem;
  }
  .hotviews-info::before {
    border-color: #9e9e9e;
  }
  .hotviews-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 26.4rem;
  }
  .hotviews-item {
    display: flex;
    white-space: nowrap;
    width: 4.4rem;
  }
  .item-img {
    width: 2rem;
    height: 1.4rem;
    margin-bottom: .2rem;
  }
  .item-txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    padding: .2rem;
  }
  .item-addr {
    display: block;
    width: 100%;
    overflow: hidden;
    font-size: .3rem;
    font-weight: 900;
    margin-bottom: .3rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-visitors {
    display: flex;
    justify-content: flex-start;
    font-size: .24rem;
    line-height: .28rem;
  }
  .number {
    display: inline-block;
    max-width: 1rem;
    font-size: .24rem;
    line-height: .28rem;
    font-weight: 700;
    text-align: right;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>