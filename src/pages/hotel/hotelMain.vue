<template>
	<div class="destination-main" >
		<div class="main-hotviews">
        <hotel-destination ></hotel-destination>
        <main-strategy :strategy="strategy"></main-strategy>
		</div>
	</div>
</template>

<script>
  import hotelDestination from './hotelDestination'
  import mainStrategy from './mainStrategy'
  export default {
    components: {
      hotelDestination,
      mainStrategy
    },
    props: ['strategy'],
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