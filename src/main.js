import Vue from 'vue';
import VueHtml2Canvas from 'vue-html2canvas';
import TextareaAutosize from 'vue-textarea-autosize'
import Router from 'vue-router'
import router from './router'

import firebase from 'firebase'
import '@babel/polyfill'
import "regenerator-runtime/runtime";
import "canvas-toBlob";

import App from './App.vue'
let app = '';

Vue.config.productionTip = false
Vue.use(VueHtml2Canvas);
Vue.use(Router);
Vue.use(TextareaAutosize);

var firebaseConfig = {
  apiKey: "AIzaSyC-GhYfD9TW1Nv4W_mWxvkmj5vqpEblE-8",
  authDomain: "feeder-fbacc.firebaseapp.com",
  databaseURL: "https://feeder-fbacc.firebaseio.com",
  projectId: "feeder-fbacc",
  storageBucket: "feeder-fbacc.appspot.com",
  messagingSenderId: "905934867035",
  appId: "1:905934867035:web:9eaa1eb8f4ce8e4498cd7e",
  measurementId: "G-Z8BZ9Q8VL6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
})
