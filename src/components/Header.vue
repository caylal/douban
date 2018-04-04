<template>
  <div class="header">
    <div class="logo-box">
        <router-link to="/">
        <h1 class="app-name">豆瓣</h1>
        </router-link>
    </div>   
    <div class="search-box">
        <input type="text" class="search-input" v-model="query" placeholder="请输入搜索内容" @keyup.enter="Search">
        <Icon class="search-btn" type="ios-search-strong" size="24" color="#bdbcbc" @click="Search()"></Icon>
    </div>    
  </div>
</template>

<script>
export default {
    data(){
        return{
             query: ''
        }       
    },
    methods: {
        Search() { 
            console.log('query is:' + this.query);
        }
    }
}
</script>

<style>
/*修改提示文字的颜色*/
input::-webkit-input-placeholder { /* WebKit browsers */ 
color: #bdbcbc; 
} 
input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
color: #bdbcbc; 
} 
input::-moz-placeholder { /* Mozilla Firefox 19+ */ 
color: #bdbcbc; 
} 
input:-ms-input-placeholder { /* Internet Explorer 10+ */ 
color: #bdbcbc; 
} 
input{outline:none} 
.header{     
    height: 47px;
    padding: 0 1rem;   
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #eae9e9;    
}
.logo-box{
    width: 4rem; 
    margin-top: .5rem; 
}
.search-box{
    width: calc(100% - 4rem);
    position: relative;
   
}
.search-input{
    width: 100%;
    height: 2rem;
    margin-top: .5rem;
    padding-left: .6rem;
    border-radius: 2rem;
    border: 1px solid #eae9e9;    
}
.search-btn{
    position: absolute;
    width: 2rem;
    height: 2rem;
    right: 0;
    top: .8rem;
    cursor: pointer;
}
.app-name{
    color: #00b600;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
}
</style>
