<template>
  <div class="TopPage">
    <h1>{{msg}}</h1>
    <h3>食事管理</h3>
    <ul>
      <li><router-link to="/routing">Rounting Test</router-link></li>
    </ul>
    <h3>楽天メニュー</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
