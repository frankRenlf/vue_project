import {nanoid} from "nanoid";

export default {
    namespaced: true,
    actions: {
        add(context, value) {
            if (!value) return alert("null input")
            const todo = {
                id: nanoid(),
                content: value.trim(),
                isEdit: false,
                completed: false,
            }
            context.commit('ADD', todo)
        }
    },
    mutations: {
        ADD(state, value) {
            state.list.unshift(value)
        }
    },
    state() {
        return {

            list: JSON.parse(localStorage.getItem('todoList')) || [],
            // list:[
            //     {id: '0', name: 'lily'},
            //     {id: '2', name: 'fff'},
            // ]
        }
    },
    getters: {}
}