import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

new Vue({
  render: h => h(App)
}).$mount('#app')
