import Vue from 'vue'
import App from './App.vue'
import store from './store/store'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // add store here
  store
}).$mount('#app')
