import Vue from 'vue'
import App from "@/App.vue";
import axios from "axios";

import store from "@/store";

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// Vue.use(vuex)
new Vue({
    el: '#app',
    data() {
        return {}
    },
    render: h => h(App),
    store: store,
    mounted() {
        console.log('ori',this)
    }
})