<template>
	<div class="searchList" ref="listScroll">
    <ul class="list">
      <li class="item border-bottom" v-for="item of list" :key="item.type + item.id" @click="gotoDetail(item.type, item.id)">
        <span class="type">
          {{item.type}}
        </span>
        <span class="title">
          {{item.title}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: ['list'],
  mounted () {
    this.scroll = new BScroll(this.$refs.listScroll, {
      click: true
    })
  },
  watch: {
    list () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  },
  methods: {
    gotoDetail (type, id) {
      if (type === '攻略') {
        this.$router.push('/strategyDetail/' + id)
      } else if (type === '游记') {
        this.$router.push('/travelsDetail/' + id)
      }
    }
  }
}
</script>

<style scoped>
	.searchList {
    flex: 1;
    overflow: hidden;
  }
  .list {
    width: 100%;
  }
  .item {
    display: flex;
    justify-content: space-between;
    line-height: .8rem;
    
  }
  .type {
    display: inline-block;
    width: .8rem;
    text-align: center;
    color: #ffbf1c;
  }
  .title {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>



