<template>
  <div>
      <div class="m-list" v-if="!showLoading"> 
        <h2>{{MORE_MOVIES.title}}</h2>             
          <!-- <ul>
               <li class="list-li" v-for="item in MORE_MOVIES.subjects">                
                    <router-link :to="{name:'detail', params: {id:item.id}}">
                        <img v-if="item.images" :src="item.images.large" alt="">
                        <span class="m-title">{{item.title}}</span>
                        <div class="rate-score">
                            <star :average="item.rating.average" :length=".7"></star>
                            <span class="average" v-if="item.rating.average"> {{item.rating.average}}</span>
                        </div>               
                    </router-link>
                </li>    
          </ul>       -->
           <movie-item :subject="MORE_MOVIES.subjects" ></movie-item>
      </div>     
      <div v-else>
          <loading></loading>
      </div>
  </div>
</template>

<script>
import {mapGetters } from 'vuex'
import Loading from './common/Loading'
import Star from './common/Star'
import MovieItem from './module/MovieItem'
export default {
    name:'movie-list',    
    components:{ 
        Loading,
        Star,
        MovieItem
    },
    data(){
        return{
           showLoading: true,           
        }
    },
    computed: {
        ...mapGetters(['MORE_MOVIES'])        
    },   
    created(){       
       const title = this.$route.params.type;
        let type;
        switch(title){
            case '正在上映的电影-北京':
                console.log('正在上映的电影')
                type = 'in_theaters'
            break
            case '即将上映的电影':
                console.log('即将上映的电影')
                type = 'coming_soon'
            break
            case '豆瓣电影Top250':
                console.log('豆瓣电影Top250')
                type = 'top250'
            break
        }
        console.log('type:' + title);  
        
        this.$store.dispatch({
        type: 'MORE_MOVIES',            
        title: type,
        start: 0,
        count: 20
        }).then(res => {
            console.log('movies-title:' + this.MORE_MOVIES);
            this.showLoading = false;
        })    
    }
}
</script>

<style>
.m-list h2{
    line-height: 3rem;
    margin-left: 1rem;
}
.m-list ul{ 
  font-size: 0;
}
.m-list  li{
  display: inline-block; 
  width: 7rem; 
  text-align: center;
}
@media screen and (max-width: 400px) {
    .m-list  li{
         margin-left: .6rem;
    }
}
@media screen and (max-width: 350px) {
    .m-list  li{
         margin-left: 2rem;
    }
}
@media screen and (min-width: 400px) {
    .m-list  li{
         margin-left: 1rem;
    }
}
@media screen and (min-width: 650px) {
    .m-list  li{
         margin-left: 2rem;
    }
}
</style>
