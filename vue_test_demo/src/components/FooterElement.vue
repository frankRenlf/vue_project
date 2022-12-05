<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox">
    </label>
    <span>
          <span>have completed {{ completedTask }} / total {{ todoList.length }}</span>
          </span>
    <button class="btn btn-danger">clear completed task</button>
  </div>
</template>

<script>
export default {
  name: "FooterElement",
  props: ['todoList'],
  computed: {
    completedTask() {
      let cnt = 0
      this.todoList.forEach((todo) => {
        if (todo.completed) cnt++
      })
      return cnt
    }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>