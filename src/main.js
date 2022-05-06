import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { store } from "./store";
// import VueSocialSharing from 'vue-social-sharing'

Vue.config.productionTip = false
// Vue.use(VueSocialSharing);
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
