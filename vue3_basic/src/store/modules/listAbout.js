import {nanoid} from "nanoid";

export default {
    namespace: true,
    actions: {
        add(context, value) {
            value.id = nanoid()
            if (!value) return alert("null input")
            const todo = {
                id: nanoid(),
                content: this.content.trim(),
                isEdit: false,
                completed: false,
            }
            this.content = ''
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