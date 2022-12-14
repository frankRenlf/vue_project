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
        if (state.sum % 2 !== 0) {
            context.commit('ADD', value)
        }
    },
    addWait(context, value) {
        setTimeout(() => {
            context.commit('ADD', value)
        }, 500)
    },
}
const mutations = {
    ADD(state, value) {
        state.sum += value
    },
    DELETE(state, value) {
        state.sum -= value
    },
}
const state = {
    sum: 0,
    school: 'swjtu',
    subject: 'math'
}
const getters = {
    countSum(state) {
        return state.sum * 10
    }
}

export default new vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    getters: getters
})

