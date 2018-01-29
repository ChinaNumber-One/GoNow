<template>
	<div class="list">
		<ul class="list-list">
      <router-link :to="/strategyDetail/ + item.id " tag="li" class="list-item" v-for="item of list" :key="item.id" @click.native="changeTitle">
        <div class="item-txt">
          <p class="item-title">{{item.title}}</p>
          <span class="item-summary">{{item.summary}}</span>
          
          <p class="item-nums">
            <span class="item-time">{{item.createdDate}}</span>
            <span class="num">
              <i>{{item.collectCount}}</i>
              <em>收藏</em>
            </span>
            <span class="num">
              <i>{{item.viewCount}}</i>
              <em>浏览</em>
            </span>
          </p>
        </div>
        <div class="item-imgBox">
          <img v-lazy="item.imgUrl" alt="" class="item-img">
        </div>
      </router-link>  
    </ul>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: ['list'],
  data () {
    return {
      name: '攻略'
    }
  },
  methods: {
    changeTitle () {
      this.getTitle(this.name)
    },
    ...mapMutations(['getTitle'])
  },
  computed: {
    ...mapState(['title'])
  }
}
</script>

<style scoped>
	.list {
		margin-top: .2rem;
	}
  .list-item {
    display: flex;
    height: 2.4rem;
    margin: .2rem 0;
    background: #fff;
    box-sizing:border-box;
    padding: .1rem 0;
  }
  .item-txt{
    width: 60%;
    box-sizing:border-box;
    padding-left: .1rem;
  }
  .item-imgBox {
    width: 40%;
  } 
  .item-img {
    width:100%;
    height: 100%;
  }
  .item-txt {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-bottom: .02rem solid #999;
  }
  .item-title {
    font-size: .34rem;
    line-height: .34rem;
    height: .34rem;
    font-weight: 900;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-nums {
    display: flex;
    justify-content: space-around;
    font-size: .24rem;
  }
  .num{
    display: flex;
    align-items: center;
  }
  .num i{
    width: 30%;
    line-height: .24rem;
    display: inline-block;
    text-align: right;
    font-weight: 600;
    width: .6rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-time {
    width: 40%;
  }
  .item-summary {
    line-height: .3rem;
    height: .6rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-indent: 2em;
  }
  .item-nums span {
    font-weight: 100;
  }
</style>