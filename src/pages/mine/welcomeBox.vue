<template>
	<div class="welcome-box">
    <div class="welcome-con">
      <div class="login-entrance">
        <div class="user-img">
          <img :src="userimg" alt="" class="userimg" v-if="showInfo">
          <img src="../../../static/img/userimg.png" alt="" class="userimg" v-if="!showInfo">
        </div>
        <router-link to="/login" tag="div" class="login-txt" v-if="!showInfo">
          登录/注册
        </router-link>
        <div class="userInfo" v-if="showInfo">
          <div class="user-name">
            {{nickname}}
          </div>
          <div class="info">
            <i class="iconfont location">&#xe61e;</i>{{city}}
            <span class="attentions">关注<em class="attentionsnum">{{attentionNum}}</em></span>
            <span class="fans">粉丝<em class="fansnum">{{fansNum}}</em></span>
          </div>
        </div>
      </div>
      <div class="welcome-word">{{word}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['userimg', 'showInfo', 'fansNum', 'attentionNum', 'nickname', 'word', 'desc'],
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped>
	.welcome-box {
    height: 4.3rem;
    background: #fff;
    padding: .3rem .2rem .56rem .2rem;
    box-sizing:border-box;
  }
  .welcome-con {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    height: 100%;
    border:.01rem solid #ffbf1c;
    border-radius: .2rem;
    box-sizing:border-box;
  }
  .login-entrance {
    display: flex;
    height: 2.6rem;
  }
  .user-img {
    height: 100%;
    width: 2.6rem;
  }
  .userimg {
    height: 1.4rem;
    width: 1.4rem;
    margin: .6rem;
    border-radius: 50%;
  }
  .login-txt {
    flex: 1;
    font-size: .4rem;
    overflow: hidden;
    line-height: 2.6rem;
    font-weight: bold;
    text-indent: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .userInfo {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .user-name {
    font-size: .36rem;
    font-weight: 900;
    margin-bottom: .3rem;
  }
  .attentionsnum, .fansnum {
    font-weight: 700;
  }
  .welcome-word {
    flex: 1;
    width: 100%;
    overflow: hidden;
    background: #ffbf1c;
    color: #fff;
    font-size: .32rem;
    font-weight: 400;
    text-align: center;
    line-height: .82rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>