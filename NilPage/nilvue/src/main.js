// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
	  message: 'test 1234!! [' + new Date() + ']',
	  seen: true
  },
  methods: {
	onOffMessage: function () {
		this.seen = this.seen == true ? false : true;
	}
  }
  //router,
  //components: { App },
  //template: '<App/>'
})

new Vue({
  el: '#app2',
  data: {
	  seen: false
  },
  //router,
  //components: { App },
  //template: '<App/>'
})
