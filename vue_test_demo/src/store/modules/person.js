import axios from "axios";

export default {
    namespaced: true,
    actions: {
        addPersonFrank(context, value) {
            if (value.name.split(' ')[0] === 'frank') {
                context.commit('ADD_PERSON', value)
            }
        },
        addStudent(context, value) {
            axios.get('',)
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.push(value)
        }
    },
    state: {
        personList: [
            {id: '1', name: 'lily'}
        ],
    },
    getters: {
        getPersonFirst(state) {
            return state.personList[0].name
        }
    }
}