<template>
	<div class="hotel-header" ref="header">
    <div class="hotel-con" ref="search">酒店预订</div>
    <div class="city-temp">
        <div class="title-box">
          <h2 class="hotviews-title">你想去哪里</h2>
        </div>
        <div class="hotel-tent">
          <div class="whither">
              <router-link to="/city" tag="div" class="routerLink">
                <em class="city">{{city}}</em>
                <router-link tag="div" to="/Chinesemap" class="geoloc iconfont">&#xe771;我的位置</router-link>
              </router-link>
          </div>
          <div class="hotel_date">
              <p @click = "setDate">{{data1}}入住</p>
              <p @click = "setDate2">{{data2}}离开<br>
                  <span class="dyas">共住{{nights}}晚</span>
              </p>
          </div>
          <div class="hotel_btn">
            <router-link to="/Chinesemap" tag="p" class="geoL iconfont">&#xe609; 地图</router-link>
            <p class="hotel_search">开始搜索</p>
          </div>
        </div> 
    </div>    
	</div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['city'])
    },
    data () {
      return {
        data1: '',
        data2: '',
        startMonth: 1,
        endMonth: 12,
        startDay: 0,
        endDay: 0,
        nights: 0,
        year: 0,
        month: 0,
        day: 0,
        days: 31,
        startyear: 0,
        endyear: 0,
        yearDays: 365
      }
    },
    watch: {
    },
    methods: {
      setDate () {
        this.$calendar.show({
          year: [this.year, this.year],
          onOk: (date) => {
            this.startDay = parseInt(date.split('-')[2], 10) || this.day
            this.startMonth = parseInt(date.split('-')[1], 10) || this.month
            this.startyear = parseInt(date.split('-')[0], 10) || this.year
            this.endyear = this.startMonth >= 12 ? (this.year + 1) : this.startyear
            this.data2 = this.data1 = this.year + '-' + this.startMonth + '-' + this.startDay
            switch (this.startMonth) {
              case 1 : this.days = 31
                break
              case 2 : this.days = 28
                break
              case 3 : this.days = 31
                break
              case 4 : this.days = 30
                break
              case 5 : this.days = 31
                break
              case 6 : this.days = 30
                break
              case 7 : this.days = 31
                break
              case 8 : this.days = 31
                break
              case 9 : this.days = 30
                break
              case 10 : this.days = 31
                break
              case 11 : this.days = 30
                break
              case 12: this.days = 31
                break
            }
            if ((this.startyear % 4 === 0) && (this.startyear % 100 !== 0 || this.startyear % 400 === 0) && this.startMonth === 2) {
              this.days = 29
              this.yearDays = 366
            }
          }
        })
      },
      setDate2 () {
        this.$calendar.show({
          year: [this.year, this.endyear || this.year], // 年份的范围,如果初始化的年份不在这个范围，会自动选最小的年份
          month: this.startMonth === 12 ? [1, 12] : [this.startMonth, this.startMonth + 1],
          onOk: (date) => {
            this.startyear = (this.startyear === 0 ? this.year : this.startyear)
            this.endDay = parseInt(date.split('-')[2], 10) === this.day ? this.startDay : parseInt(date.split('-')[2], 10)
            this.endMonth = parseInt(date.split('-')[1], 10)
            this.endyear = parseInt(date.split('-')[0], 10) === this.year ? this.year : parseInt(date.split('-')[0], 10)
            this.data2 = this.endyear + '-' + this.endMonth + '-' + this.endDay
            this.nights = (this.days * (this.endMonth - this.startMonth)) + this.endDay - this.startDay
            if (this.endyear !== this.startyear) {
              console.log(31 * (31 - this.startDay))
              this.nights = 31 * (31 - this.startDay) + this.endDay
            }

            if (this.nights < 0) {
              this.nights = 0
              alert('您选择的时间有误！')
            }
          },
          onCancel: () => {
            console.log('关闭')
          }
        })
      }
    },
    created () {
      const d = new Date()
      this.year = d.getFullYear()
      this.month = d.getMonth() + 1
      this.day = d.getDate()
      this.data2 = this.year + '-' + this.month + '-' + this.day
      this.data1 = this.year + '-' + this.month + '-' + this.day
      this.startDay = this.day
      switch (this.month) {
        case 1 : this.days = 31
          break
        case 2 : this.days = 28
          break
        case 3 : this.days = 31
          break
        case 4 : this.days = 30
          break
        case 5 : this.days = 31
          break
        case 6 : this.days = 30
          break
        case 7 : this.days = 31
          break
        case 8 : this.days = 31
          break
        case 9 : this.days = 30
          break
        case 10 : this.days = 31
          break
        case 11 : this.days = 30
          break
        case 12: this.days = 31
          break
      }
      if ((this.year % 4 === 0) && (this.year % 100 !== 0 || this.year % 400 === 0) && this.month === 2) {
        this.days = 29
        this.yearDays = 366
      }
    },
    destroyed () {}
  }
</script>
<style scoped lang="stylus">
  .hotel_btn{
    width: 100%;
    margin-top:20px;
  }
  .geoL{
    box-sizing:border-box;
    display:inline-block;
    padding:0 .36rem;
    max-width:40%;
    height:.72rem;
    line-height:.7rem;
    border:1px solid #dadada;
    font-size:.4rem;    font-weight: bold;
  }
  .hotel_search{
    width:50%;
    float:right;
    line-height:.7rem;
    height:.7rem;
    text-align:center;
    font-size:.4rem;
    border:1px solid #feb92e;
    background:#feb92e;    font-weight: bold;
  }
  .geoloc{
    position:absolute;
    right: 0rem;
    bottom: .2rem;
    font-size: .3rem; 
  }
  .hotviews-more {
    position: absolute;
    font-size: .22rem;
    color: #808080;
    right: .2rem;
    margin-top: .05rem;
    line-height: .22rem;
  }
  .hotviews-title {
    padding-left: 0.2rem;
    line-height: 0.32rem;
    font-size: 0.3rem;
    font-weight: 900;
    border-left: .06rem solid #fdb92f;
  }
  .title-box {
    background: #fff;
    padding: .28rem 0;
    padding-left: .2rem;
  }
  .hotel-header {
    width: 100%;
  }
  .hotel-con {
    background-color:#fff;
    height: .88rem;
    line-height:.88rem;
    justify-content:center;
    display: flex;
    color: #000;
    font-size:.4rem;
  }
  .hotel-tent{
    position :relative;
    padding:.5rem .6rem;
    margin:.2rem;
    padding-right:.2rem;
    background:#fff;
    border-radius: 5px;
  }
  .city-temp {
    box-sizing:border-box;
  }
  .city {
    overflow: hidden;
    max-width: 2.6rem;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .whither,.hotel_date{
    width:80%;
    border-bottom: 1px solid #333;
  }
  .hotel_date{
    margin-top:.3rem;
  }
  .hotel_date p{  
    font-size:.4rem;
    padding:.1rem 0;
  }
  .hotel_date span {
    font-size: .28rem;
  }
  .routerLink{
    position: relative;
    width:100%;
    font-size: .4rem;
    padding:.2rem 0rem;
  }
  .dyas {
    width: 100%;
    text-align: right;
    display: inline-block;
  }
</style>