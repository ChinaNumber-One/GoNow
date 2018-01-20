<template>
	<div class="destination">
		<destination-header :headerInfo="headerInfo"></destination-header>
    <destination-icons></destination-icons>
    <destination-main 
      :adds="adds" 
      :views="views" 
      :travels="travels"
      :strategy="strategy">
    </destination-main>
    <common-footer></common-footer>
	</div>
</template>
<script>
  import axios from 'axios'
  import destinationHeader from './destinationHeader'
  import destinationIcons from './destinationIcons'
  import destinationMain from './destinationMain'
  import commonFooter from '../../components/common/commonFooter'
  import { mapState, mapMutations } from 'vuex'
  export default {
    components: {
      destinationHeader,
      destinationIcons,
      destinationMain,
      commonFooter
    },
    data () {
      return {
        headerInfo: {},
        views: [],
        travels: [],
        strategy: [],
        adds: ''
      }
    },
    computed: {
      ...mapState(['city'])
    },
    watch: {
      city () {
        window.scrollTo(0, 0)
        this.getDestData()
      }
    },
    methods: {
      ...mapMutations(['getCity']),
      getDestData () {
        axios.get('/api/place.html?city=' + this.city)
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        res = res ? res.data : null
        if (res && res.data) {
          res.data.headerInfo && (this.headerInfo = res.data.headerInfo)
          res.data.adds && (this.adds = res.data.adds)
          res.data.views && (this.views = res.data.views)
          res.data.travels && (this.travels = res.data.travels)
          res.data.strategy && (this.strategy = res.data.strategy)
        }
      },
      handleGetDataErr () {
        console.log('获取数据失败')
      },
      changeCity () {
        if (!this.city) {
          this.getCity(this.$route.params.city)
        }
      }
    },
    created () {
      this.changeCity()
      this.getDestData()
    }
  }
</script>
<style scoped lang="stylus">
  .destination {
    height:100%;
    width: 100%; 
  }
  
</style>