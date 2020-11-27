<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
  // import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
