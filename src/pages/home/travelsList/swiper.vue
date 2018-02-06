<template>
<div class="swiper">
	<swiper :options="swiperOption" class="swiper-box">
    <swiper-slide v-for="item of banner" :key="item.id" class="swiper-list" @click.native="gotoDetail(item.id)">
      <img :src="item.imgUrl" class="swiper-img"/>
      <div class="swiper-info">
        <p class="swiper-title">{{item.title}}</p>
        <p class="swiper-numbers">
         <span class="swiper-time">时间：<i>{{item.createdDate}}</i></span>
          <span class="swiper-place">地点：<i>{{item.place}}</i></span>
        </p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  <ul class="small-img-list" ref="ul">
    <li v-for="(value, index) of banner" 
        :key="value.id" 
        class="small-img-item" 
        :class="{active:index == indexNum}"
        @click="changeSwiper(index)"
    >
      <img :src="value.imgUrl" alt="">
    </li>
  </ul>
 </div>
</template>

<script>
export default {
  props: ['banner'],
  data () {
    return {
      indexNum: 0,
      showBorder: false,
      swiperOption: {
        loop: true,
        autoplay: 3000,
        slidesPerView: 'auto',
        loopedSlides: 4,
        initialSlide: 0,
        autoplayDisableOnInteraction: false,
        onSlideChangeStart: function (swiper) {
          this.indexNum = (swiper.activeIndex) % 4
        }.bind(this)
      }
    }
  },
  methods: {
    changeSwiper (index) {},
    gotoDetail (id) {
      this.$router.push('/travelsDetail/ ' + id)
    }
  }
}
</script>

<style scoped>
  .swiper {
    color: #000;
    position: relative;
  }
	.swiper-box {
    width: 100%;    
    background: #21944a;
    padding-bottom: .1rem;
    box-sizing:border-box;
    padding: 0.2rem .4rem 1.4rem .4rem;
    min-height: 2.78rem;
  }
  .swiper-list {
    margin-right:.4rem;
    overflow: hidden;
    border-radius: .2rem;
    /*padding-bottom: .4rem;*/
    background: #fff;
  }
  .swiper-img {
    height: 2.6rem;
    width: 100%;
  }
  .swiper-info {
    /*height: 2rem;*/
    padding-bottom: .2rem;
    margin-top: .2rem;
  }
  .swiper-title {
    font-size: .36rem;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-indent: .72rem;
    font-weight: 900;
    margin-bottom: .2rem;
  }
  .swiper-numbers {
    margin-bottom: .1rem;
    display: flex;
    justify-content: space-around;
    font-size: .3rem;
  }
  .swiper-numbers i{
    color: #ffbf1c;
  }
  .swiper-pagination {
    bottom: 1.4rem;
  }
  .small-img-list {
    position: absolute;
    bottom: 0.2rem;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    z-index: 20;
    padding: 0 .4rem;
    left: 0;
  }
  .small-img-item {
    width: 22%;
    overflow: hidden;
    border-radius: .1rem;
  }
  .small-img-item img {
    width: 100%;
    height: 100%;
  }
  .active {
    border: .04rem solid #fff;
  }
</style>