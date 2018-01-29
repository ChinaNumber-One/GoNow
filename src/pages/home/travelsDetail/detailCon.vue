<template>
    <div class="detail-con">
      <div class="con-img">
        <div class="imgBox">
          <img :src="detail.imgUrl" alt="" class="topImg">
        </div>
        <div class="detail-txt">
          <p class="txt-title">{{detail.title}}</p>
          <p class="txt-publish">发表于
            <span> {{detail.createdDate}} </span>
            <span>&nbsp;&nbsp;{{detail.browseNum}}</span>浏览
            <span>{{detail.reply}}</span>回复
          </p>
          <div class="txt-user">
            <div class="userInfo">
              <img :src="detail.userImg" alt="" class="user-img">
              <div class="user-txt">
                <span class="user-nickName">{{detail.nickname}}</span>
              </div>
            </div>
            <div class="user-city">{{detail.place}}</div>
          </div>
          <!-- <div class="txt-info" v-html="detail.content"> </div> -->
        </div>
        <div class="txt-info" v-html="detail.content"> </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['detail']
}
</script>

<style scoped>
  .imgBox {
    height: 4rem;
    width: 100%;
  }
  .topImg {
    width: 100%;
    height: 100%;
  }
  .detail-txt {
    margin-top: .2rem;
    padding: 0 .2rem;
  }
  .txt-info {
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
    margin-bottom: .4rem;
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
  .user-nickName {
    font-weight: 900;
  }
  .txt-info {
    font-size:.28rem!important;
    line-height: .4rem;
  }
  .txt-info p img {
    margin:.2rem 0!important;
  }
  .strategy-city {
    line-height: .8rem;
    font-weight: 900;
    font-size: .36rem;
    text-align: right;
    width: 100%;
  }
</style>