import Vue from 'vue'
import App from './App.vue'
import router from'./router/index.js'
import store from './store/index.js'
import fastClick from 'fastclick'


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
fastClick.attach(document.body)

new Vue({
  render: createElement => {
	  return createElement(App)
  },
  router,
  store
  
}).$mount('#app')
