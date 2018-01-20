<template>
	<div class="destination-main">
		<div class="main-adds">
			<img src="../../../static/img/adds.jpg" alt="">
		</div>
		<div class="main-hotviews">
        <main-destination :views="views"></main-destination>
        <main-travels :travels="travels"></main-travels>
        <main-noscroll :strategy="strategy"></main-noscroll>
		</div>
	</div>
</template>

<script>
  import mainDestination from './mainDestination'
  import mainTravels from './mainTravels'
  import mainNoscroll from './mainNoscroll'
  export default {
    components: {
      mainDestination,
      mainTravels,
      mainNoscroll
    },
    props: ['adds', 'views', 'travels', 'strategy'],
    computed: {
      getRandBG () {
        const maxIndex = this.adds.length - 1
        const randomIndex = Math.round(Math.random() * maxIndex)
        return this.adds[randomIndex]
      }
    }
  }
</script>

<style scoped>
  .main-adds {
    margin: .2rem;
  }
  .main-adds img{
    width: 100%;
  }
  .main-hotviews {
    overflow: hidden;
    background: #fff;
  }

  
</style>