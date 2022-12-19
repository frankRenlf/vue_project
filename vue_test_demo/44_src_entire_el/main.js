import Vue from 'vue'
import App from "@/App.vue";
import axios from "axios";

import store from "@/store";
import router from '@/router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(ElementUI)

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