<template>
  <div class="m-view" v-if="hotMovies && newMovies && topMovies">
      <section-block title="影院热映" :type="hotMovies.title" :items="hotMovies.subjects"></section-block>
      <section-block title="免费在线观影" :type="topMovies.title" :items="topMovies.subjects"></section-block>
      <section-block title="新片速递" :type="newMovies.title" :items="newMovies.subjects"></section-block>
      <types></types>
  </div>
  <div v-else>
      <loading></loading>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import SectionBlock from './module/SectionBlock'
import Types from './module/Types'
import Loading from './common/Loading'
export default {
    name:'home',
    components:{
        SectionBlock,
        Types,
        Loading
    },
    data(){
        return{}
    },
    computed:{
        ...mapState({           
            hotMovies: state => state.movie.hotMovies,
            newMovies: state => state.movie.newMovies,
            topMovies: state => state.movie.topMovies
        })
    },
    methods:{
        getMovies(){
           this.$store.dispatch('FETCH_MOVIES');
        }
    },
    created(){
        this.getMovies()
    }

}
</script>

<style>

</style>
