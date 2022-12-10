<template>
  <div>
    <button @click="isShow=!isShow">Show/Hide</button>
    <transition-group :appear="true" name="test">
      <h1 v-show="isShow" key="1">hello</h1>
      <h1 v-show="isShow" key="2">hello</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "TestElement2",
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>

.test-enter-active {
  animation: appear 0.5s linear;
}

.test-leave-active {
  animation: appear 0.5s linear reverse;
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