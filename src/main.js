import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

import Routes from './routes';

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// Custom Directive
Vue.directive('theme', {
  bind(el, binding, vnode) {
    if(binding.value == 'wide') {
      el.style.maxWidth = '1200px';
    } else if(binding.value == 'narrow') {
      el.style.maxWidth = '350px';
    }
  }
})

// Custom Filters
Vue.filter('snippet', function(value) {
  return value.slice(0, 100) + '...';
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
