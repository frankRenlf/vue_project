import vuex from "vuex";
import Vue from 'vue'

Vue.use(vuex)

const countOptions = {
    actions: {
        add(context, value) {
            context.commit('ADD', value)
        },
        delete(context, value) {
            context.commit('DELETE', value)
        },
        addOdd(context, value) {
            console.log('odd', value)
            if (state.sum % 2 !== 0) {
                context.commit('ADD', value.n)
            }
        },
        addWait(context, value) {
            console.log('wait', value)
            setTimeout(() => {
                context.commit('ADD', value)
            }, 500)
        },
    },
    mutations: {
        ADD(state, value) {
            // console.log('value', value)
            state.sum += value
        },
        DELETE(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: 'swjtu',
        subject: 'math',
    },
    getters: {}
}
const personOptions = {
    actions: {},
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.push(value)
        }
    },
    state: {
        personList: [],
    },
    getters: {}
}

const actions = {}
const mutations = {}
const state = {}
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

