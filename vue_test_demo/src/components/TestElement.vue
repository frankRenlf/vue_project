<template>
  <div>
    <button @click="isShow=!isShow">Show/Hide</button>
    <h1 v-show="isShow">hello</h1>
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

</style>