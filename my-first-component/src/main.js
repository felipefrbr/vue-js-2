import Vue from 'vue'

Vue.component('my-component', {
  data: function(){
    return {
      status: 'Critical'
    }
  },
  template: '<div>Status: {{ status }} | <button @click="changeStatus()" >change</button> </div>',
  methods: {
    changeStatus: function(){
      this.status = this.status === 'Normal' ? 'Critical' : 'Normal'
    }
  }
});

new Vue({
  el: '#app'
})
