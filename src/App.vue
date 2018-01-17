<template>
  <div id="app">
    <header-page/>
    <router-view/>
  </div>
</template>

<script>
import headerPage from './components/header'
export default {
  name: 'app',
  components:{
    headerPage
  }
}
</script>

<style>
body{
  padding:0px;
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
