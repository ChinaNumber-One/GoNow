<template>
  <div class="searchPage">


    <div class="search-header">
      <div class="searchBox">
        <span class="searchicon"></span>
        <input ref="input"type="text" placeholder="搜索游记/攻略/目的地/酒店" class="input" v-model="message">
      </div>
      <span class="cancel" @click="goBack">取消</span>
    </div>

    <search-list :list="list"></search-list>
    


  </div>
</template>

<script>
import axios from 'axios'
import searchList from './searchList'
export default {
  components: {
    searchList
  },
  data () {
    return {
      message: '',
      list: []
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    handleGetDataSucc (res) {
      if (res.data.data) {
        this.list = res.data.data.list
      }
    },
    handleGetDataErr () {
      console.log('获取数据失败~')
    }
  },
  watch: {
    message () {
      if (this.message !== '') {
        axios.get('/search/get.html?search=' + this.message)
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
      } else {
        this.list = []
      }
    }
  }
}
</script>

<style scoped>
  .searchPage {
    background: #fff;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .search-header {
    height: .88rem;
    display: flex;
    justify-content: space-between;
  }
  .input {
    flex:1;
    height: .48rem;
    border:0;
    text-indent: .2rem;
    background: #eee;
    border-radius: .14rem;
  }
  .searchBox {
    padding-left: .1rem;
    flex: 1;
    display: flex;
    margin: .2rem;
    background: #eee;
    border-radius: .14rem;
  }
  .cancel {
    display: inline-block;
    width: 1.2rem;
    line-height: .88rem;
    text-align: center;
    font-size: .3rem;
    color: #ffbf1c;
    font-weight: 600;
  }
  .searchicon {
    display: inline-block;
    height: .3rem;
    width: .3rem;
    margin-top: .1rem;
    background: url(../../../../static/img/searchicon2.png);
    background-size: 100% 100%;
  }

  
</style>