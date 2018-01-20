<template>
  <header class="header">
    <router-link to="/setting" tag="span" class="icon setting"></router-link>
    <router-link to="/message" tag="span" class="icon message">
    </router-link>
  </header>
</template>

<script>
	export default {}
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