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

const Studio  = {
  template: '<div>Studio</div>'
}

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
    { path: '/studio', component: Studio }
  ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
