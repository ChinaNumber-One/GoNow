<template>
  <div class="main">
  	<city-header></city-header>
    <city-search :cityList="cityList" :router="router" :type="type"></city-search>
    <city-list :cityList="cityList" :router="router" :type="type"></city-list>
  </div>
</template>

<script>
  import axios from 'axios'
  import cityHeader from './cityHeader'
  import citySearch from './citySearch'
  import cityList from './cityList'
  export default {
    name: 'city',
    components: {
      cityHeader,
      citySearch,
      cityList
    },
    data () {
      return {
        cityList: {},
        router: '',
        type: ''
      }
    },
    methods: {
      getCityDate () {
        axios.get('/common/city_list.html')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        res = res ? res.data : null
        if (res && res.data) {
          this.cityList = res.data.list
        }
      },
      handleGetDataErr () {
        alert('获取城市列表失败！')
      }
    },
    created () {
      this.getCityDate()
    },
    beforeRouteEnter (to, from, next) {
      if (from.name === 'hotel') {
        next((vm) => {
          vm.router = 'hotel'
        })
      } else if (from.name === 'destination') {
        next((vm) => {
          vm.router = 'destination'
        })
      } else if (from.name === 'ticket') {
        next((vm) => {
          vm.router = 'ticket'
          vm.type = to.params.type
        })
      }
    }
  }
</script>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>
