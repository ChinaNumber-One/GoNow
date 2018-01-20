<template>
	<div class="common-footer">
    <div class="footer-con border-top" ref="footer">
      <router-link to="/" tag="div" class="footer-items">
        <i class="items-icon item-index" ref="index"></i>
        <em class="items-name" ref="indextxt">首页</em>
      </router-link>

      <router-link :to="'/destination/' + city" tag="div" class="footer-items">
        <i class="items-icon item-destination" ref="destination"></i>
        <em class="items-name" ref="destinationtxt">目的地</em>
      </router-link>

      <router-link to="/hotel" tag="div" class="footer-items">
        <i class="items-icon item-hotel" ref="hotel"></i>
        <em class="items-name" ref="hoteltxt">酒店</em>
      </router-link>

      <router-link to="/mine" tag="div" class="footer-items">
        <i class="items-icon item-mine" ref="mine"></i>
        <em class="items-name" ref="minetxt">我的</em>
      </router-link>
      
    </div> 
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    let title = this.$route.name
    if (title === 'index') {
      this.$refs.index.style.backgroundImage = 'url(../../../static/img/indexicon2.png)'
      this.$refs.destination.style.backgroundImage = 'url(../../../static/img/destinationicon1.png)'
      this.$refs.hotel.style.backgroundImage = 'url(../../../static/img/hotelicon1.png)'
      this.$refs.mine.style.backgroundImage = 'url(../../../static/img/mineicon1.png)'
    } else if (title === 'destination') {
      this.$refs.index.style.backgroundImage = 'url(../../../static/img/indexicon1.png)'
      this.$refs.destination.style.backgroundImage = 'url(../../../static/img/destinationicon2.png)'
      this.$refs.hotel.style.backgroundImage = 'url(../../../static/img/hotelicon1.png)'
      this.$refs.mine.style.backgroundImage = 'url(../../../static/img/mineicon1.png)'
    } else if (title === 'hotel') {
      this.$refs.index.style.backgroundImage = 'url(../../../static/img/indexicon1.png)'
      this.$refs.destination.style.backgroundImage = 'url(../../../static/img/destinationicon1.png)'
      this.$refs.hotel.style.backgroundImage = 'url(../../../static/img/hotelicon2.png)'
      this.$refs.mine.style.backgroundImage = 'url(../../../static/img/mineicon1.png)'
    } else {
      this.$refs.index.style.backgroundImage = 'url(../../../static/img/indexicon1.png)'
      this.$refs.destination.style.backgroundImage = 'url(../../../static/img/destinationicon1.png)'
      this.$refs.hotel.style.backgroundImage = 'url(../../../static/img/hotelicon1.png)'
      this.$refs.mine.style.backgroundImage = 'url(../../../static/img/mineicon2.png)'
    }
  }
}
</script>

<style scoped>
	.common-footer {
    position: fixed;
    bottom:0;
    height: 1rem;
    width: 100%;
  }
  .footer-con {
    display: flex;
    justify-content: space-around;
    position: fixed;
    height: 1rem;
    width: 100%;
    bottom: 0;
    background: #fff;
  }
  .footer-con::before {
    border-color: #9e9e9e;
  }
  .footer-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 25%;
    text-align: center;
  }
  .items-icon {
    display: inline-block;
    height: .4rem;
    width: .4rem;
  }
  .item-index {
    background: url(../../../static/img/indexicon2.png);
    background-size: 100% 100%!important;
  }
  .item-destination {
    background: url(../../../static/img/destinationicon1.png);
    background-size: 100% 100%!important;
  }
  .item-hotel {
    background: url(../../../static/img/hotelicon1.png);
    background-size: 100% 100%!important;
  }
  .item-mine {
    background: url(../../../static/img/mineicon1.png);
    background-size: 100% 100%!important;
  }
  .items-name {
    margin-top: .1rem;
    font-size: .24rem;
  }
  .router-link-exact-active {
    font-weight: 900;
  }
</style>