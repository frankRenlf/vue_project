import Vue from 'vue'
import App from "@/App.vue";
import axios from "axios";
import VueRouter from "vue-router";

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
    router: 'hello',
    mounted() {
        console.log('ori', this)
    }
})