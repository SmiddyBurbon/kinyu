import Vue from 'vue';
import VueHtml2Canvas from 'vue-html2canvas';
import VueRouter from 'vue-router'
import App from './App.vue'
import '@babel/polyfill'
import "regenerator-runtime/runtime";
import "canvas-toBlob";

Vue.use(VueHtml2Canvas);
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
