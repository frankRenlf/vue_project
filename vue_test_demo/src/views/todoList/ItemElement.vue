<template>
  <li>
    <label>
      <input type="checkbox"
             :checked="todoItem.completed"
             @change="checkTodo(todoItem.id)">
      <span v-show="!todoItem.isEdit">{{ todoItem.content }} </span>
      <input type="text" v-show="todoItem.isEdit"
             :value="todoItem.content"
             @keydown.enter="handleComplete(todoItem.id,todoItem.isEdit,$event)"

             ref="input">
      <!--      @blur="handleComplete(todoItem.id,todoItem.isEdit,$event)"-->

    </label>
    <button class="btn btn-danger" @click="handleDelete(todoItem.id)">delete</button>
    <button class="btn btn-edit" @click="handleEdit(todoItem.id,todoItem.isEdit)">edit</button>
  </li>
</template>

<script>


import {mapMutations} from "vuex";

export default {
  name: "ItemElement",
  //声明接收todo
  props: ['todo'],
  data() {
    return {
      todoItem: this.todo,
    }
  },
  methods: {
    ...mapMutations('todoList', ['checkTodo', 'deleteTodo', 'updateTodo']),
    // handleCheck(id) {
    //   // this.checkTodo(id)
    //   this.$root.$emit('checkTodo', id)
    // },
    handleDelete(id) {
      if (confirm('Confirm Delete')) {
        // this.deleteTodo(id)
        this.deleteTodo(id)
      }
    },
    handleEdit(id, isEdit) {
      // this.todoItem.isEdit = !this.todoItem.isEdit
      console.log(this.todoItem)
      this.updateTodo(this.todoItem)
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
    handleComplete(id, isEdit, e) {
      if (!e.target.value.trim()) {
        return alert('null input')
      }
      // this.todoItem.isEdit = !this.todoItem.isEdit
      this.todoItem.content = e.target.value
      this.updateTodo(this.todoItem)
    }
  },
  mounted() {
    // console.log(this.todo)
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}


li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background: #ddd;
}

li:hover button {
  display: block;
}
</style>