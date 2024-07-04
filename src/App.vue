<template>
  <div id="app">
    <TopPage msg="食事管理アプリ"/>
    <img alt="eat logo" src="./assets/OIG4.jpg">

  </div>
</template>

<script>
import { createApp } from 'vue';
import TopPage from './components/TopPage.vue';

const app = createApp(TopPage);
app.mount('#app');
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
