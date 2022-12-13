import vuex from "vuex";
import Vue from 'vue'

Vue.use(vuex)

const actions = {
    add(context, value) {
        context.commit('ADD', value)
    },
    delete(context, value) {
        context.commit('DELETE', value)
    },
    addOdd(context, value) {
        context.commit('ADDODD', value)
    },
    addWait(context, value) {
        context.commit('ADDWAIT', value)
    }
}
const mutations = {
    ADD(state, value) {
        state.sum += value
    },
    DELETE(state, value) {
        state.sum -= value
    },
    ADDODD(state, value) {
        state.sum += value
    },
    ADDWAIT(state, value) {
        state.sum += value
    },
}
const state = {
    sum: 0,
}

export default new vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
})

