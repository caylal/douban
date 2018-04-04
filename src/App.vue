<template>
  <div id="app">   
    <header-box></header-box>
    <router-view/>
  </div>
</template>

<script>
import HeaderBox from './components/Header'
export default {
  name: 'App',
  components:{
    HeaderBox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;    
  color: #2c3e50;
  max-width: 650px;
  margin: 0 auto;
}
h2 {
  font-size: 1rem;
  font-weight: normal;
  color: #111;
}

ul, li, a, h2 {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
*{
  margin: 0;
  padding: 0;
}
</style>
