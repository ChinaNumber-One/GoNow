<template>
	<div class="mine">
    <mine-header></mine-header>
    
    <welcome-box  :userimg="userimg"
                  :nickname="nickname"
                  :city="city" 
                  :showInfo="showInfo"
                  :fansNum="fansNum"
                  :attentionNum="attentionNum"
                  :word="word"
                  :desc="desc"></welcome-box>
    
    <mine-icons></mine-icons>

    <div class="blank"></div>
		<common-footer></common-footer>
	</div>
</template>

<script>
import commonFooter from '../../components/common/commonFooter'
import welcomeBox from './welcomeBox.vue'
import mineIcons from './mineIcons.vue'
import mineHeader from './mineHeader.vue'
import axios from 'axios'
export default {
  components: {
    commonFooter,
    welcomeBox,
    mineIcons,
    mineHeader
  },
  data () {
    return {
      userimg: '',
      showInfo: false,
      nickname: '',
      fansNum: 0,
      attentionNum: 0,
      city: '',
      birth: '',
      word: '欢迎来到即刻出发！',
      desc: '',
      sex: ''
    }
  },
  methods: {
    getDateInfo () {
      if (window.localStorage.isLogin) {
        axios.get('/common/mine.html?id=' + window.localStorage.userId)
            .then(this.handleGetDataSucc.bind(this))
            .catch(this.handleGetDataErr.bind(this))
        this.showInfo = true
        this.word = '这里就放心交给我吧！'
      }
    },
    handleGetDataSucc (res) {
      if (res.data) {
        this.userimg = res.data.data.headImg || '../../../static/img/userdefault.png'
        this.nickname = res.data.data.nickname
        this.fansNum = res.data.data.fansNum
        this.attentionNum = res.data.data.attentionNum
        this.birth = res.data.data.birth
        this.desc = res.data.data.desc
        this.sex = res.data.data.sex
      }
      window.localStorage.userName = this.nickname
      window.localStorage.userImg = this.userimg
      window.localStorage.desc = this.desc || '这个人很懒，什么都没留下~'
      window.localStorage.birth = this.birth
      window.localStorage.sex = this.sex
    },
    handleGetDataErr () {
      console.log('服务器发生错误！')
    }
  },
  created () {
    this.getDateInfo()
  }
}
</script>

<style scoped>
  .mine {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .blank {
    flex: 1;
    background: #fff;
    background: url(../../../static/img/tabikaeru.png) no-repeat;
    background-size: 100% 100%;
    margin-bottom: 1rem;
  }
</style>