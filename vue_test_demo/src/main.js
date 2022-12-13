import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import vuex from 'vuex'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(vuex)
new Vue({
    el: '#app',
    data() {
        return {}
    },
    render: h => h(App),
    store
})