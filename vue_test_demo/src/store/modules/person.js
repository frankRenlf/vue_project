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
            axios.get(`http://localhost:8082/student/${value}`).then(
                response => {
                    context.commit('ADD_PERSON', response.data.data)
                },
                error => {
                    console.log('falied', error)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.push(value)
        }
    },
    state: {
        personList: [
            {id: '0', name: 'lily'},
            {id: '1', name: 'jame'}
        ],
    },
    getters: {
        getPersonFirst(state) {
            return state.personList[0].name
        }
    }
}