<template>
  <div>
    <button @click="isShow=!isShow">Show/Hide</button>
    <transition :appear="true" name="">
      <h1 v-show="isShow">hello</h1>
    </transition>
  </div>
</template>

<script>
import 'animate.css'

export default {
  name: "TestElement3",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: skyblue;
}

</style>