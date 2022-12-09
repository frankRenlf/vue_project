import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

Vue.prototype.x = {
    a: 1,
    b: 2
}

new Vue({
    el: '#app',
    data() {
        return {}
    },
    render: h => h(App)
})