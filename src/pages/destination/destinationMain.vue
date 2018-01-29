<template>
	<div class="destination-main">
		<div class="main-adds" v-if="addImg">
      <a :href="this.addLink">
			 <img :src="this.addImg" alt="">
      </a>
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
    data () {
      return {
        addImg: '',
        addLink: ''
      }
    },
    props: ['adds', 'views', 'travels', 'strategy'],
    watch: {
      adds () {
        const maxIndex = this.adds.length - 1
        const randomIndex = Math.abs(Math.round(Math.random() * maxIndex))
        this.addImg = this.adds[randomIndex].imgUrl
        this.addLink = this.adds[randomIndex].linkUrl
      }
    }
  }
</script>

<style scoped>
  .main-adds {
    margin: .1rem;
    height: 2rem;
  }
  .main-adds img{
    width: 100%;
    height: 100%;
  }
  .main-hotviews {
    overflow: hidden;
    background: #fff;
  }

  
</style>