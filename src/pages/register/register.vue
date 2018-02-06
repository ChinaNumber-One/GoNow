<template>
  <div class="registerBox">
  	<div class="header">
  	  <img @click="handleBack" class="back" src="/static/img/back.png">
  	  <h1 class="title">注册</h1>
    </div>
    <div class="phone">
      <span>账号</span>
      <input type="text" ref="conPhone" placeholder="请输入手机号" autofocus>
    </div>
    <div class="mes">
      <span class="text">短信验证码</span>
      <input type="text" ref="vali" @blur="validationConfirm" plain>
      <span @click="getValidation" ref='getCode' class="validation" plain>{{getCode}}</span>
    </div>
    <div class="nickname">
      <span>昵称</span>
      <input @blur="nameConfirm" ref="conName" type="text" placeholder="昵称为3-15位">
    </div>
    <div class="setpass">
      <span>设置密码</span>
      <input @blur="passConfirm" type="password" ref="passtype" placeholder="6-15位数字或字母" >
      <img @click="handlePassSee" src="/static/img/eye.png">
    </div>
    <div class="read" >点击完成注册即同意《即刻出发用户注册协议》</div>
    <div @click="handleComplete" class="regsucc">完成注册</div>
    <transition name="fade">
    <div class="tips1" v-show="tipsBox">{{tips}}</div>
    </transition>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'register',
    data () {
      return {
        tips: '',
        tipsBox: false,
        hasPhone: false,
        hasValidation: false,
        hasNickname: false,
        hasPassword: true,
        getCode: '获取验证码'
      }
    },
    methods: {
      handlePassSee () {
        if (this.passShow) {
          this.$refs.passtype.type = 'text'
        } else {
          this.$refs.passtype.type = 'password'
        }
        this.passShow = !this.passShow
      },
      handleBack () {
        this.$router.push('/mine')
      },
      getValidation () {
        const regPhone = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/
        const str = this.$refs.conPhone.value
        if (regPhone.test(str)) {
          this.tipsBox = false
          axios.post('/common/send_register_code.html',
            {
              phone: str
            }).then(this.handleIdentifyingSucc.bind(this))
              .catch(this.handleIdentifyingErr.bind(this))
        } else {
          this.$message({
            message: '手机号码格式错误！',
            duration: 1000,
            type: 'warning',
            center: true
          })
        }
      },
      validationConfirm () {
        if (this.$refs.vali.value && this.$refs.vali.value) {
          this.hasValidation = true
        } else {
          this.$message({
            message: '请填写验证码！',
            duration: 1000,
            type: 'warning',
            center: true
          })
        }
      },
      nameConfirm () {
        const regName = /^.{3,15}$/
        const str = this.$refs.conName.value
        if (regName.test(str)) {
          this.hasNickname = true
        } else {
          this.$message({
            message: '昵称为3-15位！',
            duration: 1000,
            type: 'warning',
            center: true
          })
        }
      },
      passConfirm () {
        const regPass = /^[0-9a-z]{6,15}$/
        const str = this.$refs.passtype.value
        if (regPass.test(str)) {
          this.hasPassword = true
        } else {
          this.$message({
            message: '密码为6-15位数字或字母',
            duration: 1000,
            type: 'warning',
            center: true
          })
        }
      },
      handleComplete () {
        var username = this.$refs.conPhone.value
        var identifying = this.$refs.vali.value
        var nickname = this.$refs.conName.value
        var password = this.$refs.passtype.value
        if (this.hasPhone && this.hasValidation && this.hasNickname && this.hasPassword) {
          axios.post('/common/register.html',
            {
              phone: username,
              nickname: nickname,
              code: identifying,
              pwd: password
            }).then(this.handleRegisterSucc.bind(this))
          .catch(this.handleRegisterErr.bind(this))
        } else {
          this.$message.error({
            message: '请填写完整！',
            duration: 2000,
            center: true
          })
        }
      },
      handleRegisterSucc (res) {
        if (res.data.result) {
          this.$message({
            message: '注册成功!',
            duration: 1000,
            type: 'success',
            center: true,
            onClose: () => {
              this.$router.push('/login')
            }
          })
        } else {
          this.$message.error({
            message: '网络或服务器发生错误！',
            duration: 2000,
            center: true
          })
        }
      },
      handleRegisterErr () {
        this.$message.error({
          message: '网络或服务器发生错误！',
          duration: 2000,
          center: true
        })
      },
      handleIdentifyingSucc (res) {
        if (res.data.result) {
          this.hasPhone = true
        } else {
          this.$message.error({
            message: '网络或服务器发生错误！',
            duration: 2000,
            center: true
          })
        }
      },
      handleIdentifyingErr () {
        this.$message.error({
          message: '网络或服务器发生错误！',
          duration: 2000,
          center: true
        })
      }
    }
  }
</script>
<style scoped lang="stylus">
.registerBox
  background: #fff
  height: 100vh
  .header
    position: relative
    height: .93rem
    line-height: .93rem
    width:100%
    border-bottom:1px solid #ccc
    .back
      position:absolute
      left:.17rem
      top:.25rem
      width:.25rem
      height:.41rem
    .title
      font-size:.32rem
      width:2.4rem
      margin:0 auto
      text-align:center
      font-size:.38rem
  .phone
    height:1rem
    line-height:1rem
    width:96%
    padding:0 0.2rem
    margin:0 auto
    box-sizing:border-box
    border-bottom:1px solid #ccc
    span
      width:.94rem
      text-align:center
      font-size:.3rem
      font-weight:600
      margin-right:.3rem
    input	
      border:none
      margin-bottom:.1rem
  .mes
    display:flex
    justify-content:space-around
    align-items:center
    width:96%
    margin-left:2%
    height:1rem
    border-bottom:1px solid #ccc
    .text
      margin:0 .2rem
      font-size:.3rem
      font-weight:600
      height:.3rem
    input
      flex:1
      width:30%
      border:none
    .validation
      width:35%
      font-size:.26rem
      height:.6rem
      line-height:.6rem
      text-align:center
      background:orange
      border-radius: .2rem
      color:#000
  .nickname
    display:flex
    flex-direction:row
    justify-content:space-around
    align-items:center 
    height:1rem
    line-height:1rem
    width:96%
    margin:0 auto
    box-sizing:border-box
    border-bottom:1px solid #ccc
    span
      padding-left: .2rem
      font-size:.3rem
      font-weight:600
      margin-right:.3rem
    input
      flex:1
      border:none
  .setpass
    display:flex
    flex-direction:row
    justify-content:space-around
    align-items:center 
    height:1rem
    line-height:1rem
    width:96%
    margin:0 auto
    box-sizing:border-box
    border-bottom:1px solid #ccc
    span
      padding-left: .2rem
      font-size:.3rem
      font-weight:600
      margin-right:.3rem
    input
      flex:1
      border:none
    img
      width:.38rem
      height:.26rem
  .read
    margin-left:.3rem
    margin-right:.2rem
    height:1.3rem
    line-height:1.3rem
  .regsucc
    width:94%;
    height:.98rem
    line-height:.98rem
    text-align:center
    background:orange
    margin:0 0.2rem
    font-size:.34rem
    font-weight:600
    color:#fff
    border-radius:.1rem
  .tips1
    position:absolute
    top:0
    left:0
    width:100%
    height:.93rem
    line-height:.93rem
    background:#ffa500
    text-align:center
    font-weight:900
    font-size:.36rem
    span
      font-weight:600
      font-size:.32rem
      color:#fff
      line-height:.93rem
  .fade-enter-active, .fade-leave-active {
      transition: opacity 1s;
    }
  .fade-enter, .fade-leave-to {
      opacity: 0;
    }
</style>