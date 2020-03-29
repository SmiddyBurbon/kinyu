import Vue from 'vue';
import VueHtml2Canvas from 'vue-html2canvas';
import TextareaAutosize from 'vue-textarea-autosize'
import VueRouter from 'vue-router'
import App from './App.vue'
import '@babel/polyfill'
import "regenerator-runtime/runtime";
import "canvas-toBlob";
import routes from './routes';

Vue.config.productionTip = false
Vue.use(VueHtml2Canvas);
Vue.use(VueRouter);
Vue.use(TextareaAutosize)

const router = new VueRouter({routes});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
