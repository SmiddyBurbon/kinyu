import Vue from 'vue';
import VueHtml2Canvas from 'vue-html2canvas';
import VueMeta from 'vue-meta'
import TextareaAutosize from 'vue-textarea-autosize'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import FontPicker from 'font-picker-vue';
import router from './router'
import { VueGrid } from '@liqueflies/vue-grid'
import VuePapaParse from 'vue-papa-parse'

import firebase from 'firebase'
import 'firebase/firestore';

import '@babel/polyfill'
import "regenerator-runtime/runtime";
import "canvas-toBlob";

Vue.config.productionTip = false
Vue.use(VueHtml2Canvas);
Vue.use(Router);
Vue.use(VuePapaParse);
Vue.use(TextareaAutosize);
Vue.use(VueAxios, axios)
Vue.use(FontPicker);
Vue.use(VueGrid, {
  columns: 12,
  gutter: 32,
  breakpoints: {
    xs: 320,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1680
  },
})

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

import App from './App.vue'
let app = '';

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
export const db = firebase.firestore();

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
})
