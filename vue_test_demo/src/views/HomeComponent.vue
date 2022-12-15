<template>
    <div>
      <h2>home</h2>
      <router-link to="/msg">msg</router-link>
      <router-link to="/news">news</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "HomeComponent"
}
</script>

<style scoped>

</style>