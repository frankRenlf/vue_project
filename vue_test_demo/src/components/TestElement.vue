<template>
  <div>
    <button @click="isShow=!isShow">Show/Hide</button>
    <transition :appear="true" name="test">
      <h1 v-show="isShow">hello</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TestElement",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>

.test-enter-active {
  animation: appear 1s linear;
}

.test-leave-active {
  animation: appear 1s linear reverse;
}

@keyframes appear {
  from {
    transform: translateX(-100px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>