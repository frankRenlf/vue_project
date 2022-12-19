<template>
  <div class="todo-header">
    <input type="text" placeholder="enter your task"
           v-model="content"
           @keyup.enter="add">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapMutations} from "vuex";
export default {
  name: "HeaderElement",
  // props: {
  //   addTodo: {
  //     type: Function
  //   }
  // },
  data() {
    return {
      content: ''
    }
  },
  methods: {
    ...mapMutations('todoList',['addTodo']),
    add() {
      if (!this.content) return alert("null input")
      const todo = {
        id: nanoid(),
        content: this.content.trim(),
        isEdit: false,
        completed: false,
      }
      // this.$emit('addTodo', todo)
      this.addTodo(todo)
      this.content = ''
    }

  }

};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>