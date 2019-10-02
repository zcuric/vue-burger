import Vue from 'vue'
import App from './App.vue'
import VBurger from '../src';

Vue.use(VBurger);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
