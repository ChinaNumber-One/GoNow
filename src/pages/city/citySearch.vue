<template>
  <div>
    <div class="search border-bottom">
      <input type="text" placeholder="搜索目的地" class="seacth-box" @input="handleInputChange">
    </div>
    <div class="search-list" v-show="showList" ref="list">
      <ul>
        <li class="search-item border-bottom" v-show="!filterResult.length">
          无匹配城市
        </li>
        <li class="search-item border-bottom" v-for="item in filterResult" @click="handleChooseCity(item.name)">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  props: ['cityList', 'router', 'type'],
  data () {
    return {
      showList: false,
      filterResult: []
    }
  },
  computed: {
    result () {
      const result = []
      for (let i in this.cityList) {
        this.cityList[i].forEach((value) => {
          result.push({
            name: value.name,
            spell: value.spell
          })
        })
      }
      return result
    }
  },
  methods: {
    handleChooseCity (city) {
      console.log(this.$route)
      this.getCity(city)
      this.$nextTick(() => {
        if (this.router === 'destination') {
          console.log('destination')
          this.$router.push('/destination/' + city)
        } else if (this.router === 'hotel') {
          console.log('hotel')
          this.$router.push('/hotel')
        } else if (this.router === 'ticket') {
          console.log('ticket')
          if (this.type === 'from') {
            this.getStartPlace(city)
          } else if (this.type === 'to') {
            this.getEndPlace(city)
          }
          this.$router.push('/ticket')
        }
      })
    },
    ...mapMutations(['getCity', 'getStartPlace', 'getEndPlace']),
    handleInputChange (e) {
      const value = e.target.value.toLowerCase()
      if (value) {
        this.showList = true
        this.filterResult = this.result.filter((item) => {
          if (item.spell.indexOf(value) > -1 ||
            item.name.indexOf(value) > -1) {
            return true
          }
        })
      } else {
        this.showList = false
      }
    }
  },
  watch: {
    filterResult () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.list)
  }
}
</script>

<style scoped>
  .search {
  	box-sizing: border-box;
    height: .88rem;
    padding: .16rem .4rem;
  }
  .seacth-box {
  	text-align: center;
  	width: 100%;
  	height: 100%;
  	background: #e0e0e0;
  	border: 0;
  	border-radius:.08rem;
  	color:#333;
  }
  .search-list {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.62rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f5f5f5;
  }
  .search-item {
    padding-left: .2rem;
    line-height: .8rem;
    background: #fff;
    color: #333;
  }
</style>
