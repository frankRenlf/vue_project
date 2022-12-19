<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <HeaderElement></HeaderElement>
        <ListElement :todoList="todoList">
        </ListElement>
        <footer-element :todoList="todoList"
                        @checkAllTodo="checkAllTodo"
                        @clearAllTodo="clearAllTodo">
        </footer-element>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderElement from "@/views/todoList/HeaderElement.vue";
import ListElement from "@/views/todoList/ListElement.vue";
import FooterElement from "@/views/todoList/FooterElement.vue";

import {nanoid} from 'nanoid'
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

export default {
  name: "ListComponent",
  components: {
    HeaderElement,
    ListElement,
    FooterElement,
  },
  data() {
    return {
      msg: "welcome to todolist vue",
      // todoList: JSON.parse(localStorage.getItem('todoList')) || []
    };
  },
  methods: {
    ...mapMutations('todoList', ['addTodo', 'checkTodo', 'deleteTodo',
      'checkAllTodo', 'clearAllTodo', 'updateTodo'])
  },
  watch: {
    todoList: {
      deep: true,
      handler(value) {
        localStorage.setItem('todoList', JSON.stringify(value))
      }
    }

  },
  computed: {
    ...mapState('todoList', {todoList: 'todoList'})
  },
  mounted() {
    this.$root.$on('checkTodo', this.checkTodo)
    this.$root.$on('deleteTodo', this.deleteTodo)
    this.$root.$on('updateTodo', this.updateTodo)
  },
  beforeDestroy() {
    this.$root.$off('checkTodo')
    this.$root.$off('deleteTodo')
    this.$root.$off('updateTodo')
  }

};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: #5ac1b8;
  border: 1px solid #3b856e;
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>