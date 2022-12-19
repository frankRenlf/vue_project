import Vue from 'vue'
import App from "@/App.vue";
import axios from "axios";

import store from "@/store";
import router from '@/router';

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
    el: '#app',
    data() {
        return {}
    },
    render: h => h(App),
    store: store,
    router: router,
    mounted() {
        // console.log('$router', this.$router)
        // console.log('$route', this.$route)
    }
})