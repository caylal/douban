<template>
<div>
     <template v-if="film">
        <ul>
        <li v-for="item in subject" :key="item.id">
            <router-link :to="{name:'search', params: {id:item.id}}">
                <img v-if="item.avatars" :src="item.avatars.large" alt="">
                <span class="f-title">{{item.name}}</span>
                <span class="f-title f-color" v-if="item.isDirector">导演</span>
                <span class="f-title f-color" v-else>演员</span>
                
            </router-link>
        </li> 
    </ul>  
    </template>
    <template v-else> 
        <ul>
            <li v-for="item in subject" :key="item.id">
                <router-link :to="{name:'detail', params: {id:item.id}}">
                    <img v-if="item.images" :src="item.images.large" alt="">
                    <span class="m-title">{{item.title}}</span>
                    <div class="rate-score">
                        <star :average="item.rating.average" :length=".7"></star>
                        <span class="average" v-if="item.rating.average"> {{item.rating.average}}</span>
                    </div>                
                </router-link>
            </li> 
        </ul>    
    </template>
</div>
   
</template>




<script>
import Star from '../common/Star'
export default {
    name:'movie-item',
    components:{
          Star
    },
    props:['subject','film'],   
    data(){
        return{}
    }
}
</script>

<style>

</style>
