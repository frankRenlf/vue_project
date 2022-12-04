<template>
  <div></div>
</template>

<script>
import ItemElement from "./ItemElement.Vue";

export default {
  name: "ListElement",
  components: {
    ItemElement,
  },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
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