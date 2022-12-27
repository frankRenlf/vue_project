import {nanoid} from "nanoid";

export default {
    namespace: true,
    actions: {
        add(context, value) {
            value.id = nanoid()
            context.commit('ADD', value)
        }
    },
    mutations: {
        ADD(state, value) {
            state.list.unshift(value)
        }
    },
    state() {
        return {
            list: localStorage.getItem('todoList') || [],
        }
    },
    getters: {}
}