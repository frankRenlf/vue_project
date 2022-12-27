<template>
  <button @click="isShow=true">show</button>
  <teleport to="body">
    <div v-if="isShow" class="mask">
      <div class="dialog">
        <input type="text" placeholder="enter">
        <button @click="isShow=false">close</button>
      </div>
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
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 50px;
  background-color: pink;
  padding: 10px;
}
</style>