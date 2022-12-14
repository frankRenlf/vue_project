import vuex from "vuex";
import Vue from 'vue'

Vue.use(vuex)

const countOptions = {
    namespaced: true,
    actions: {
        add(context, value) {
            context.commit('ADD', value)
        },
        delete(context, value) {
            context.commit('DELETE', value)
        },
        addOdd(context, value) {
            console.log('odd', value)
            if (context.state.sum % 2 !== 0) {
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
    getters: {
        countSum(state) {
            return state.sum * 10
        },
    }
}
const personOptions = {
    namespaced: true,
    actions: {
        addPersonFrank(context, value) {
            if (value.split(' ')[0] === 'frank') {
                context.commit('ADD_PERSON', value)
            }
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.push(value)
        }
    },
    state: {
        personList: [],
    },
    getters: {
        getPersonFirst(state) {
            return state.personList[0].name
        }
    }
}

export default new vuex.Store({
    modules: {
        countOptions,
        personOptions
    }
})

