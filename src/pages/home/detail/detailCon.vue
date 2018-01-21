<template>
    <div class="detail-con">
      <div class="con-img">
        <img :src="detail.detailTopImg" alt="" class="topImg">
        <div class="detail-txt">
          <p class="txt-title">{{detail.title}}</p>
          <p class="txt-publish">发表于
						<span> {{detail.publishTime}} </span>
            <span>&nbsp;&nbsp;{{detail.visiterNum}}</span>浏览
            <span>{{detail.replay}}</span>回复
          </p>
          <div class="txt-user">
          	<div class="userInfo">
          		<img :src="detail.userImg" alt="" class="user-img">
          		<div class="user-txt">
          			<span class="user-nickName">{{detail.nickName}}</span>
          			<span class="user-works">
          				<i class="user-artile">{{detail.artileNum}}篇游记</i>
          				<i class="user-fans">{{detail.fansNum}}粉丝</i>
          			</span>
          		</div>
          	</div>
          	<div class="user-city">{{detail.city}}</div>
          	
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['detail']
}
</script>

<style scoped>
  .topImg {
    width: 100%;
  }
  .detail-txt {
    margin-top: .2rem;
    padding: 0 .2rem;
  }
  .txt-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: .3rem;
    font-weight: 900;
    height: .6rem;
  }
  .txt-publish {
  	text-align: center;
  	margin: .2rem 0;
  }
  .txt-publish span {
  	font-weight: 900;
  }
  .txt-user {
  	padding-right: .8rem;
  	display: flex;
  	justify-content: space-between;
  }
  .user-img {
  	height: .8rem;
  	width: .8rem;
  	border-radius: 50%;
  	margin-right: .3rem;
  }
  .userInfo {
  	display: flex;
  }
  .user-works {
  	font-size: .16rem;
  }
  .user-txt {
  	display: flex;
  	flex-direction: column;
  	justify-content: space-around;
  }
  .user-city {
  	line-height: .8rem;
  	font-weight: 900;
  	font-size: .36rem;
  }   
</style>