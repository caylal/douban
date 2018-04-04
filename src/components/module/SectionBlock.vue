<template>
  <div class="section-box">
      <div class="m-header">
        <h2>{{title}}</h2>
        <span class="more">
           <router-link :to="{name:'more-list', params:{type:type}}">更多</router-link>
        </span>
      </div>
      <div class="m-content">
          <ul class="m-ul">
            <li is="movie-item" v-for="item in items" :key="item.id" :item="item">              
            </li>
          </ul>
      </div>
  </div>
</template>

<script>

import MovieItem from './MovieItem'
export default {
  name:'sectionbox',
  props:['title', 'type', 'items'],
  components:{  
    MovieItem
  },
  data(){
    return{}
  }
}
</script>

<style>
.section-box{
  padding-top: 1rem;
  max-width: 650px;
  margin: 0 auto;
}
.m-header{
  height: 2.4rem;
  padding: 0 1rem;  
}
.more {
  float: right;
  font-size: .85rem; 
}
.more a{
   color: #42bd56;
}
.m-content{
  box-sizing: content-box;  
}
.m-ul{ 
  font-size: 0;
  overflow-x: auto;
  white-space:nowrap; 
 
}
.m-ul li{
  display: inline-block;
 
  width: 7rem;
  margin-left: .8rem;
  text-align: center;
}
.rate-score{
  text-align: center;
  font-size: .2rem;
  color: #aaa;
}
.m-title{
  display: block;
  line-height: 1rem;
  font-size: .8rem;
  margin-top: .7rem;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
   
}
.average{
  color: #aaa;
  font-size: .7rem;
  padding-left: .3rem;
}
img{
  height: 10rem; 
}
h2{
  display: inline-block;  
}
</style>
