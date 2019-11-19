import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyApXuU1BCAR4ZhRlt7SNlFyLOVBOt0rGBs",
  authDomain: "calendar-sample-9332d.firebaseapp.com",
  databaseURL: "https://calendar-sample-9332d.firebaseio.com",
  projectId: "calendar-sample-9332d",
  storageBucket: "calendar-sample-9332d.appspot.com",
  messagingSenderId: "13705077573",
  appId: "1:13705077573:web:5c52e3dcfea11a1e1f542c"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
