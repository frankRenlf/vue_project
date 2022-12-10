<template>
  <div>
    <button @click="isShow=!isShow">Show/Hide</button>
    <transition>
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

.v-enter-active {
  animation: appear 1s;
}

.v-leave-active {
  animation: appear 1s reverse;
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