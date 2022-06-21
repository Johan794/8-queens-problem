<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import ChessBoard from './components/ChessBoard.vue'
</script>

<template>

 <!--<HelloWorld msg="Hello Vue 3 + Vite" />  --> 
 <h1>8 queen's problem</h1>
 <h1>Please take your queens</h1>
 <br>

  <ChessBoard />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 40px;
  margin-bottom: 40px;
}
</style>
