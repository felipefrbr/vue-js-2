import Vue from 'vue'
import App from './App.vue'
import MyComponent from './my-component.vue'

Vue.component('my-component', MyComponent);

new Vue({
  el: '#app',
  render: h => h(App)
})
