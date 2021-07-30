// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

import router from "./router/router";


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  
  //components: { App },
  //template: '<App/>'
  
}).$mount('#App')

/*
var stoneSelect = new Vue({
  el: '#stoneSelect',
  data: {
    test: ''
  },
  methods: {
    sendStoneType: function () {
//
    axios.get('http://localhost:8080/stone/getData')
    .then(function(response) {
      console.log(response);
    });
    }
  }

})
*/