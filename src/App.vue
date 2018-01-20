<template>
  <keep-alive include="index">
    <router-view></router-view>
  </keep-alive>
</template>

<script>
export default {
  name: 'app',
  created () {
    let phoneOS = navigator.userAgent
    const IOS = new RegExp('iPhone', 'g')
    if (IOS.test(phoneOS)) {
      document.body.style.fontFamily = 'iosfont'
    }
  }
}
</script>

<style>
	@font-face {
    font-family: 'iosfont';   /*字体名称*/
    src: url('./assets/styles/fontStyle/PingFang Medium.ttf');       /*字体源文件*/
  }
</style>
