<template>
    <div>
      <h2>home</h2>
      <router-link to="/home/msg">msg</router-link>&nbsp;
      <router-link to="/home/news">news</router-link>
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