import vuex from "vuex";
import Vue from 'vue'
import countOptions from './modules/count'
import personOptions from './modules/person'

Vue.use(vuex)

export default new vuex.Store({
    modules: {
        countOptions,
        personOptions
    }
})