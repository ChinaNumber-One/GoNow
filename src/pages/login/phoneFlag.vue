<template>
	<div>
    <div class="phoneuser">
      <input ref="phone" type="text" placeholder="请输入手机号码" @blur="phonechange" autofocus>
    </div>
    <div class="mes-confirm">
      <input ref="mes" type="text" placeholder="短信验证码" @blur="meschange">
      <button @click="getcode">获取验证码</button>
    </div> 
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    phonechange () {
      const regPhone = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/
      if (regPhone.test(this.$refs.phone.value)) {
        this.$emit('getPhone', this.$refs.phone.value)
      } else {
        this.$message.error({
          message: '手机号码格式错误！',
          duration: 1000,
          center: true
        })
      }
    },
    meschange () {
      this.$emit('getMes', this.$refs.mes.value)
    },
    getcode () {
      axios.post('/common/send_login_code.html',
        {
          phone: this.$refs.phone.value
        }).then(this.handleIdentifyingSucc.bind(this))
          .catch(this.handleIdentifyingErr.bind(this))
    },
    handleIdentifyingSucc (res) {
      if (res.data.result) {
        this.$message({
          message: '验证码已发送成功！',
          duration: 1000,
          center: true,
          type: 'success'
        })
      } else {
        this.$message.error({
          message: res.data.error,
          duration: 1000,
          center: true
        })
      }
    },
    handleIdentifyingErr () {
      this.$message.error({
        message: '网络或服务器错误！',
        duration: 1000,
        center: true
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .phoneuser
    height:1.01rem
    line-height:1.01rem
    width:100%
    border-bottom:1px solid #ccc
    padding-left:.2rem
    box-sizing:border-box
    input
      position:absolute
      width:100%
      height:.98rem
      border:none
  .mes-confirm
    display:flex
    flex-direction:row
    justify-content:space-around
    width:100%
    padding-left:.2rem
    box-sizing:border-box
    height:1.01rem
    line-height:1.01rem
    border-bottom:1px solid #ccc
    span
      font-weight:600
    input
      border:none
      flex:1
    button
      width:1.8rem
      height:.64rem
      margin-top:.2rem
      background:#feb82c
      border:none
      border-radius: .2rem
      text-align: center
</style>