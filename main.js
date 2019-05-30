import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element, {size:'small', zIndex:3000})

Vue.config.productionTip = false

new Vue({
  el:"#app",
  render: h => h(App),
}).$mount('#app')
