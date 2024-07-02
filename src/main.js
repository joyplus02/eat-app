import Vue from 'vue'
import App from './views/App.vue'
// ルーティングのために追加
import app_router from './router'

Vue.config.productionTip = false

new Vue({
  app_router, // ルーティングのために追加
  render: h => h(App),
}).$mount('#app')
