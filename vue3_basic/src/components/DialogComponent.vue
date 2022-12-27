<template>
  <button @click="isShow=true">show</button>
  <teleport to="body">
    <div v-if="isShow" class="dialog">
      <input type="text" placeholder="enter">
      <button @click="isShow=false">close</button>
    </div>
  </teleport>
</template>

<script>
import {ref} from "vue";

export default {
  name: "DialogComponent",
  setup() {
    return {
      isShow: ref(false)
    }
  }
}
</script>

<style scoped>
.dialog {
  width: 300px;
  height: 50px;
  background-color: pink;
  padding: 10px;
}
</style>