<template>
  <div class="star">
    <div v-if="average ">
      <img v-for="n in 5" :src="imgSrc(n)" :style="`width:${length}rem;height: ${length}rem`"> 
    </div>   
    <div v-else>
      <span >暂无评分</span>
    </div>
  </div>
</template>

<script>
import startActive from './../../assets/starActive.png'
import startGrey from './../../assets/starGrey.png'

export default {
    name: 'Star',
    props: ['average', 'length'],    
    methods: {
    imgSrc(n) {
      return (
        (2 * n - 1 > this.average -1) ? startGrey : startActive
      )
    }
  }
}
</script>

<style>
.star {
  display: inline-block;
  margin-top: .3rem;
  /*height: .1rem;*/
  /*width: .1rem;*/
}
</style>
