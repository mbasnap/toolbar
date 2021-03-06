import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    sm: 360,
    md: 768,
    lg: Infinity,
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
