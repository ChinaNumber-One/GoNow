<template>
  <keep-alive :include="['index', 'travlesList', 'strategyList', 'city']">
    <router-view></router-view>
  </keep-alive>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
	
</style>
