import vuex from "vuex";
import Vue from 'vue'
import countOptions from './modules/count'
import personOptions from './modules/person'
import todoList from "@/store/modules/todoList";

Vue.use(vuex)

export default new vuex.Store({
    modules: {
        todoList,
        // countOptions,
        // personOptions
    }
})

