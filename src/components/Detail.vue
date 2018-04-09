<template>
<div>
     <div class="detail" v-if="!showLoading">
        <div class="d-card">
            <h1 class="d-title">{{DETAIL_MOVIES.title}}</h1>
            <div class="d-info">
                 <div class="right">
                    <a href="#">
                        <img v-if="DETAIL_MOVIES.images" :src="DETAIL_MOVIES.images.large" alt="cover">
                    </a>
                </div>
                <div class="left" v-if="DETAIL_MOVIES.rating">
                    <star :average="DETAIL_MOVIES.rating.average" :length="1"></star>
                    <span class="rating">{{DETAIL_MOVIES.ratings_count}}人评价</span>
                    <div>
                        <p class="meta">{{tags}}</p>
                        <a href="#" class="open-app">用App查看影人资料</a>
                    </div>                   
                </div>
            </div>
            <div class="marking">
                <a href="#">想看</a>
                <a href="#">看过</a>                
            </div>
            <div class="d-intro">
                <h2>{{DETAIL_MOVIES.title}}的简介</h2>
                <p class="summary" v-if="summary && DETAIL_MOVIES.summary">                    
                    {{isExpand ? summary : DETAIL_MOVIES.summary}}……                    
                    <a href="javascript:;" v-show="isExpand" v-on:click="expand">
                    (展开)
                    </a>
                </p>
            </div> 
            <div class="film">
                <h2>影人</h2>
                <section-block :items="celebritys" tag="true"></section-block>    
            </div>           
            <!-- <div class="genres">
                <h2>查看更多相关分类</h2>
                <div v-if="genres">
                    <tags :items="genres"></tags>
                </div>
            </div> -->
        </div>
    </div>
    <div v-else>
        <loading></loading>
    </div>
</div>
   
</template>

<script>
import {mapGetters} from 'vuex'
import Loading from './common/Loading'
import Star from './common/Star'
import SectionBlock from './module/SectionBlock'
export default {
    components:{
        Loading,
        Star,
        SectionBlock
    },
    data(){
        return{
            showLoading: true,
            isExpand: true,
        }
    },
    computed: {
        ...mapGetters(['DETAIL_MOVIES']),
        tags(){
            const { genres, casts, year, directors, countries } = this.DETAIL_MOVIES
            const array = []
            Array.prototype.push.call(array,
                genres.reduce((pre, cur) => `${pre} / ${cur}`),
                directors.map(value => value.name).join(' / '),
                casts.map(value => value.name).join(' / '),
                `${year}年(${countries.reduce((pre, cur) => `${pre} / ${cur}`)})上映`
            )
            return array.join(' / ')
        },
        summary(){
            let summary = this.DETAIL_MOVIES.summary;
            if(summary){
                return summary.slice(0, 120)
            }
        },
        celebritys(){
            const { directors, casts } = this.DETAIL_MOVIES
            directors.forEach( value => {
                value.isDirector = true
            })
            casts.forEach( value => {
                value.isDirector = false
            })
            return Array.prototype.concat.call(directors, casts)
        }

    },
    methods: {   
        expand: function (event) {
            this.isExpand = false
        }
    },
    created () {    
        const id = this.$route.params.id 
        this.$store.dispatch({
        type: 'DETAIL_MOVIES',
        id: id,        
        }).then(res => {
            this.showLoading = false;           
        })
  }
}
</script>

<style>
.detail{
    margin: 0 1rem 0 1rem;
}
h1 {
    margin-top: 1.2rem;
    font-size: 1.2rem;
}
.d-info{
    overflow: hidden;
    margin-bottom: 2rem;
}
.right{
    float: right; 
}
.right img{
    display: block;
    width: 100%;
    max-width: 7rem;
    margin-right: 1rem;
}
.left{
     margin-right: 10rem;
}
.left .meta{  
    /* padding-right: 2rem; */
    line-height: 1.7;
    font-size: .9rem;
    color: #494949;
}
.left .open-app {
    display: block;
    margin-top: 1rem ;
    line-height: 1;
    font-size: .8rem;
    color: #42bd56;
}
.rating {
    margin: .4rem 0 0 .8rem;
    font-size: 1rem;
    color: #aaa;
}
.marking {    
    display: flex;
    margin: 2rem 0 2rem 0;
}
.marking a {
    display: block;
    height: 3rem;
    margin: 0 .5rem 0 .5rem;
    line-height: 3rem;
    font-size: 1rem;
    text-align: center;
    color: #ffb712;
    border: .05rem solid #ffb712;
    border-radius: .3rem;
    -ms-flex: 1;
    flex: 1;
}
.d-intro h2{   
    font-size: 1rem;
    color: #aaa;
}
.d-intro .summary{
    font-size: .8rem;
    color: #494949;
    line-height: 1.5rem;
  
}
.d-intro a {
    color: #42bd56;
  }
.film h2{
    margin-top: 1rem;
    color: #494949;    
}
</style>
