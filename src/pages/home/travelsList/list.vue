<template>
	<div class="list">
		<ul class="list-list">
      <router-link :to="/travelsDetail/ + item.id " tag="li" class="list-item" v-for="item of list" :key="item.id" @click.native="changeTitle">
        <div class="item-txt">
          <p class="item-title">{{item.title}}</p>
          <div class="item-user">
            <img :src="item.userImg" alt="" class="user-img">
            <span class="user-name">{{item.nickname}} 在</span><span class="user-place">{{item.place}}</span>
            
          </div>
          <p class="item-nums">
            <span class="item-time">{{item.createdDate}}</span>
            <span class="num">
              <i>{{item.browseNum}}</i>
              <em>浏览</em>
            </span>
            <span class="num">
              <i>{{item.reply}}</i>
              <em>回复</em>
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
      name: '游记'
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
    margin-top: .2rem;
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
    height: .68rem;
    font-weight: 900;
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .user-place {
    color:#ffbf10;
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
  .item-nums span {
    font-weight: 100;
  }
  .user-img {
    height: .6rem;
    width: .6rem;
    border-radius: 50%;
    border: 0.01rem solid #eee;
  }
  .item-user {
    display: flex;
    align-items: center;
  }
  .item-user span {
    display: inline-block;
  }
  .user-name {
    color:#999;
    max-width: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .user-place {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>