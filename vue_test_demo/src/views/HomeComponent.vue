<template>
    <div>
      <h2>home</h2>
      <router-link to="/msg">msg</router-link>&nbsp;
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