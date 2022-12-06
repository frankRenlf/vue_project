<template>
  <div class="todo-footer" v-show="total!==0">
    <label>
      <!--      <input type="checkbox" :checked="isAll" @change="checkAll">-->
      <input type="checkbox" v-model="isAll">
    </label>
    <span>
          <span>have completed {{ completedTask }} / total {{ total }}</span>
      <!--          <span> Completion rate{{ (completedTask / todoList.length) }}</span>-->
    </span>
    <button class="btn btn-danger">clear completed task</button>
  </div>
</template>

<script>
export default {
  name: "FooterElement",
  props: ['todoList', 'checkAllTodo'],
  methods: {
    checkAll(e) {
      this.checkAllTodo(e.target.checked)
    }
  },
  computed: {
    completedTask() {
      return this.todoList.reduce((pre, cur) => {
        return pre + cur.completed
      }, 0)
    },
    total() {
      return this.todoList.length
    },
    isAll: {
      get() {
        return this.completedTask === this.total && this.total !== 0
      },
      set(val) {
        this.checkAllTodo(val)
      }
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