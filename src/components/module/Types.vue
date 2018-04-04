<template>
  <div class="types">
      <h2>分类浏览</h2>
      <div class="t-conten">
          <ul class="t-list">
              <li v-for="item in items">                  
                    <a :href="Host + item.url">
                        {{item.title}}<span></span>
                    </a>                 
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {    
    name:'types',
    data(){
        return{
            Host:'https://m.douban.com/',
            items: [
                {
                    title: '经典',
                    url: 'movie/classic'
                },
                {
                title: '冷门佳片',
                url: 'movie/underrated'
                },
                {
                title: '豆瓣高分',
                url: 'movie/doubantop'
                },
                {
                title: '动作',
                url: 'movie/action'
                },
                {
                title: '喜剧',
                url: 'movie/comedy'
                },
                {
                title: '爱情',
                url: 'movie/love'
                },
                {
                title: '悬疑',
                url: 'movie/mystery'
                },
                {
                title: '恐怖',
                url: 'movie/horror'
                },
                {
                title: '科幻',
                url: 'movie/scifi'
                },
                {
                title: '治愈',
                url: 'movie/sweet'
                },
                {
                title: '文艺',
                url: 'movie/artfilm'
                },
                {
                title: '成长',
                url: 'movie/youth'
                },
                {
                title: '动画',
                url: 'movie/animation'
                },
                {
                title: '华语',
                url: 'movie/chinese'
                },
                {
                title: '欧美',
                url: 'movie/western'
                },
                {
                title: '韩国',
                url: 'movie/korean'
                }
                
            ]
        }
    }
}
</script>

<style>

.types{
    padding-top: 1rem;
     
}
.t-list{

    padding: 1rem 0 0  1rem; 
    overflow: hidden;
}
.t-list li{
    float: left;
    box-sizing: border-box;
    width: 50%;
    height: 3rem;
    line-height: 3rem;
    padding-right: .5rem;
    font-size: .8rem;
    border-top: solid 0.01rem #eee;
    border-right: solid .01rem #eee;
}
 .t-list li:nth-child(even) {
    padding-left: 1rem;
    border-right: none;
 }
.types h2{    
    padding: 0 1rem;   
}
.types a {
      color: #42bd56;
    }

 .types span {
    color: #ccc;
    float: right;
    font-weight: bold;   
    border-right: solid 0.1rem #ccc;
    border-bottom: solid 0.1rem #ccc;
    width: 0.7rem;
    height: 0.7rem;
    transform: rotate(-45deg);
    margin-top: 1.2rem;
    margin-right: .5rem;
  }
</style>
