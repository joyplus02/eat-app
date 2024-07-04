<template>
    <div :class="$style.parent">
      <div :class="$style.child">
        <h1>Routing Test Page</h1>
      </div>
    </div>
  </template>

<script>
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
</script>
