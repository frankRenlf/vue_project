export default {
    namespaced: true,
    actions: {
        addTodo(context, value) {
            context.commit('ADD_TODO', value)
        },

    },
    mutations: {
        ADD_TODO(state, value) {
            state.todoList.unshift(value)
        },

        addTodo(state, x) {
            state.todoList.unshift(x)
        },
        checkTodo(state, id) {
            state.todoList.forEach((todo) => {
                if (todo.id === id) todo.completed = !todo.completed
            })
        },
        deleteTodo(state, id) {
            state.todoList = state.todoList.filter((todo) => {
                return todo.id !== id
            })
        },
        checkAllTodo(state, checked) {
            state.todoList.forEach((todo) => {
                todo.completed = checked
            })
        },
        clearAllTodo(state,value) {
            state.todoList = state.todoList.filter((todo) => {
                return !todo.completed
            })
        },
        updateTodo(state, value) {
            state.todoList.forEach((todo) => {
                if (todo.id === value.id) {
                    todo.isEdit = value.isEdit === null ? todo.isEdit : !value.isEdit
                    todo.content = value.content === null ? todo.content : value.content
                }
            })
        }
    },
    state: {
        todoList: JSON.parse(localStorage.getItem('todoList')) || [],
    },
    getters: {
        get(state) {
            console.log(state)
        }
    }
}