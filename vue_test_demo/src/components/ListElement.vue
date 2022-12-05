<template>
  <ul class="todo-main">
    <ItemElement v-for="todo in todoList" :key="todo.id">
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
  data() {
    return {
      todoList: [
        {id: '001', content: 'drink', completed: true},
        {id: '002', content: 'run', completed: false},
        {id: '003', content: 'sleep', completed: true},
      ]
    }
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