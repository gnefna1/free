<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import pageHead from "./components/pageHead"
import sideBar from "./components/sideBar"
export default {
  name: 'App',
  components:{
    pageHead,sideBar
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
