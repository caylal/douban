<template>    
    <li>
        <router-link :to="{name:'detail', params: {id:item.id}}">
            <img v-if="item.images" :src="item.images.large" alt="">
            <span class="m-title">{{item.title}}</span>
            <div class="rate-score">
                <star :average="item.rating.average" :length=".7"></star>
                <span class="average" v-if="item.rating.average"> {{item.rating.average}}</span>
            </div>
               
        </router-link>
    </li>    
</template>

<script>
import Star from '../common/Star'
export default {
    components:{
          Star
    },
    props:{
        item:{
            type: Object,
            required:true
        }
        
    }
}
</script>

<style>

</style>
