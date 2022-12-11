<template>
  <ul class="todo-main">
    <transition-group :appear="true"
                      name="animate__animated animate__bounce"
                      enter-active-class="animate__fadeInDown"
                      leave-active-class="animate__fadeOutUp">
      <ItemElement v-for="todo in todoList"
                   :key="todo.id"
                   :todo="todo">
        {{ todo }}
      </ItemElement>
    </transition-group>
  </ul>
</template>

<script>
import 'animate.css'
import ItemElement from "@/components/ItemElement.vue";

export default {
  name: "ListElement",
  components: {
    ItemElement,
  },
  props: {
    todoList: {
      type: Array
    },
  },
  methods: {}
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