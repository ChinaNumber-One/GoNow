<template>
  <div class="list" ref="scroller">
    <div>
      <div class="list-area" v-for="(area, key) of cityList">
          <div class="list-title">{{key}}</div>
          <div class="list-item border-bottom" v-for="item in area" :key="item.id" @click="handleChooseCity(item.name)">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import { mapState, mapMutations } from 'vuex'
  export default {
    props: ['cityList'],
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller, {
        bounceTime: 300,
        click: true
      })
    },
    methods: {
      handleChooseCity (city) {
        this.getCity(city)
        this.$nextTick(() => {
          this.$router.push('/destination/' + city)
        })
      },
      ...mapMutations(['getCity'])
    },
    computed: {
      ...mapState(['city'])
    },
    watch: {
      cityList () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    }
  }
</script>

<style scoped>
  .list {
    flex: 1;
    background: #fff;
    overflow: hidden;
  }
  .list-title {
    background: #eee;
    line-height:.54rem; 
    padding-left: .3rem;
  }
  .list-item {
    line-height: .6rem;
    padding-left: .3rem;
  }
</style>
