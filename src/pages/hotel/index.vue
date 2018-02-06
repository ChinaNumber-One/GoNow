<template>
	<div class="destination">
		<hotel-header></hotel-header>
    <hotel-main
      :strategy="strategy">
    </hotel-main>
    <common-footer></common-footer>
	</div>
</template>
<script>
  import axios from 'axios'
  import hotelHeader from './hotelHeader'
  import hotelMain from './hotelMain'
  import commonFooter from '../../components/common/commonFooter'
  import { mapState, mapMutations } from 'vuex'
  export default {
    components: {
      hotelHeader,
      hotelMain,
      commonFooter
    },
    data () {
      return {
        strategy: []
      }
    },
    computed: {
      ...mapState(['city']),
      ...mapState(['recommend'])
    },
    watch: {
      city () {
        this.getDestData()
      }
    },
    methods: {
      ...mapMutations(['getCity']),
      ...mapMutations(['getRecommend']),
      getDestData () {
        axios.get('/common/hotel.html?city=' + this.city)
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        res = res ? res.data : null
        if (res && res.data) {
          res.data.adds && (this.adds = res.data.adds)
          res.data.recommend && (this.getRecommend(res.data.recommend))
          res.data.strategy && (this.strategy = res.data.strategy)
        }
      },
      handleGetDataErr () {
        console.log('获取信息失败')
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