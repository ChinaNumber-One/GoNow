<template>
  <header class="header">
    <router-link to="/setting" tag="span" class="icon setting"></router-link>
    <span class="icon message" @click="goTomessage">
    </span>
  </header>
</template>

<script>
export default {
  methods: {
    goTomessage () {
      if (window.localStorage.isLogin) {
        this.$router.push('/message')
      } else {
        this.$message({
          message: '请先登录！',
          duration: 1000,
          type: 'warning',
          center: true,
          onClose: () => {
            this.$router.push('/mine')
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    height: .88rem;
    background: #fff;
  }
  .icon {
    display: inline-block;
    height: .5rem;
    width: .5rem;
    margin:.18rem .28rem ;
  }
  .setting {
    background: url(../../../static/img/setting.png);
    background-size: 100% 100%;
  }
  .message {
    background: url(../../../static/img/message.png);
    background-size: 100% 100%;
  }
</style>