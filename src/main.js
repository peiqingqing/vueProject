// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/reset.scss'

Vue.config.productionTip = false

let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
let htmlDom = document.getElementsByTagName('html')[0]
htmlDom.style.fontSize = (htmlWidth / 10 > 41.4 ? 41.4 : htmlWidth / 10) + 'px'

window.addEventListener('resize', () => {
  htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  htmlDom.style.fontSize = (htmlWidth / 10 > 41.4 ? 41.4 : htmlWidth / 10) + 'px'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
