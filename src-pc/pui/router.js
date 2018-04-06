import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "./pages/home/index.vue";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },  
    { path: '/home', component: home },  //首页
  ]
})
