import vuex from "vuex";
import Vue from 'vue'

Vue.use(vuex)

const actions = {
    add(context, value) {
        console.log(context, value)
        context.commit('ADD', value)
    }
}
const mutations = {
    ADD(a, b) {
        console.log(a, b)
    }
}
const state = {
    sum: 0,
}

export default new vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
})

