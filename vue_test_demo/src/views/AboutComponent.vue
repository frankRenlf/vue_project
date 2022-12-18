<template>
  <div>
    <h2>about</h2>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
  beforeRouteEnter(to,from,next){
    if (to.meta.authorise) {
      if (localStorage.getItem("name") === "james") {
        next()
      } else {
        alert("Insufficient permissions")
      }
    } else {
      next()
    }
  },
  beforeRouteLeave(to,from,next){
    
  }
}
</script>

<style scoped>

</style>