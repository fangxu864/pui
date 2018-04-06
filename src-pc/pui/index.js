import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
// import { Button, Select } from 'element-ui';
import VueHighlightJS from 'vue-highlight.js';

Vue.use(VueHighlightJS);
// Vue.use(Button)
// Vue.use(Select)

import 'highlight.js/styles/default.css';
require("./index.scss");

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
