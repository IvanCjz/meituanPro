// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store.js'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'

Vue.use(ElementUI);

Vue.directive('document-click', {
  bind(el, binding, vNode) {
    document.addEventListener('click', binding.value, false);
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
