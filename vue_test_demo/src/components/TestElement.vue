<template>
  <div>
    <button @click="isShow=!isShow">Show/Hide</button>
    <h1 v-show="isShow" class="come">hello</h1>
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

.come {
  animation: appear 1s;
}

.go {
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