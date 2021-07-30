import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource"

Vue.use(VueResource);

Vue.http.options.root = "https://vue-training-1da0c-default-rtdb.firebaseio.com"


new Vue({
  el: '#app',
  render: h => h(App)
})
