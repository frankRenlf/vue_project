<template>
  <li>
    <label>
      <input type="checkbox"
             v-model="todoItem.completed">
      <span>{{ todoItem.content }} </span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todoItem.id)">delete</button>
  </li>
</template>

<script>
export default {
  name: "ItemElement",
  //声明接收todo
  props: ['todo', 'checkTodo', 'deleteTodo'],
  data() {
    return {
      todoItem: this.todo,
    }
  },
  methods: {
    handleCheck(id) {
      console.log(id)
      this.checkTodo(id)

    },
    handleDelete(id) {
      if (confirm('Confirm Delete')) {
        this.deleteTodo(id)
      }

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