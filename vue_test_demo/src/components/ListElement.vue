<template>
  <ul class="todo-main">
    <ItemElement v-for="todo in todoList" :key="todo.id" :todo="todo">
      {{ todo }}
    </ItemElement>
  </ul>
</template>

<script>
import ItemElement from "@/components/ItemElement.vue";

export default {
  name: "ListElement",
  components: {
    ItemElement,
  },
  props:{
    todoList:{
      type:Array
    }
  },
  methods:{

  }
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 2px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>