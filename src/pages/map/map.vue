<template>
<div>
  <div class="amap-page-container" ref="map">
    <el-amap  vid="amapDemo"
              class="amap-demo" 
              :amap-manager="amapManager" 
              :center="center" 
              :zoom="zoom" 
              :plugin="plugin"  
              isHotspot="true"
              >
    </el-amap>
  </div>
  <span class="iconfont back" @click="handleBack">&#xe662;</span>
</div>
</template>

<script>
import Vue from 'vue'
import VueAMap from 'vue-amap'
Vue.use(VueAMap)

export default {
  data () {
    let self = this
    return {
      amapManager: VueAMap.initAMapApiLoader({
      // 高德的key
        key: 'fe3e75828a1bc86b5dd5cae6d194ca6e',
      // 插件集合
        plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation']
      }),
      zoom: 12,
      center: [116.397516, 39.907646],
      plugin: [{
        pName: 'Geolocation',
        events: {
          init (o) {
            o.getCurrentPosition((status, result) => {
              if (result && result.position) {
                self.center = [result.position.lng, result.position.lat]
              }
            })
          }
        }
      }]
    }
  },
  mounted () {
    this.$refs.map.style.height = window.screen.height + 'px'
  },
  methods: {
    handleBack () {
      this.$router.go(-1)
    },
    getMap () {
      console.log(this.amapManager._map)
    }
  }
}
</script>

<style scoped>
  .amap-page-container {
    height: 100%;
  }
  .amap-demo {
      height: 100%;
  }
  .back {
    position: absolute;
    left: .4rem;
    top: .4rem;
    line-height: .6rem;
    width: .6rem;
    text-align: center;
    background: #ea440f;
    color: #fff;
    font-weight: 900;
    border-radius: 50%;
  }
</style>

























