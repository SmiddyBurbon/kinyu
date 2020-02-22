import Vue from 'vue';
// import VueHtml2Canvas from 'vue-html2canvas';
import App from './App.vue'

// Vue.use(VueHtml2Canvas);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
