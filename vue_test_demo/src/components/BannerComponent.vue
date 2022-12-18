<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">back</button>
      <button @click="forward">forward</button>
      <button @click="identify">identify</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
  methods: {
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    },
    identify(){
      localStorage.setItem("name","james")
    }
  }
}
</script>

<style scoped>

</style>