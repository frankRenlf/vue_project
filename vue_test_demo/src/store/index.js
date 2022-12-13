import vuex from "vuex";
import Vue from 'vue'

Vue.use(vuex)

const actions = {
    add(context, value) {
        console.log(context, value)
    }
}
const mutations = {}
const state = {
    sum: 0,
}

export default new vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
})

