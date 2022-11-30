import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
let a = 1
new Vue({
  el:'#app',
  // template:`<h1>hello</h1>`,
  // render: h => h(App),

  render(h) {
    return h(App)
  },
  // components:{
  //   App,
  // }
})
console.log('success')
 