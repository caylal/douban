<template>
  <div>
      <!-- <div class="m-list" v-if="MORE_MOVIES && MORE_MOVIES.length > 0"> -->
        <h2>{{MORE_MOVIES.title}}</h2>      
          <ul>
               <li is="movie-item" v-for="item in MORE_MOVIES.subjects" :key="item.id" :item="item"> </li>
          </ul>      
      <!-- </div>      -->
      <!-- <div v-else>
          <loading></loading>
      </div> -->
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import MovieItem from './module/MovieItem'
import Loading from './common/Loading'
export default {
    name:'movie-item',    
    components:{  
        MovieItem,
        Loading
    },
    data(){
        return{

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

        if(!!this.MORE_MOVIES && this.MORE_MOVIES.length > 0){
             console.log('MORE_MOVIES:' + this.MORE_MOVIES);
        }else{
            this.$store.dispatch({
            type: 'MORE_MOVIES',            
            title: type,
            start: 0,
            count: 20
        })
        }
       
    }
}
</script>

<style>

</style>
