import Vue from 'vue'
import App from './App'
import pageUtil from './src/index'

Vue.use(pageUtil)

new Vue({
  el: '#app',
  render: h => h(App)
})