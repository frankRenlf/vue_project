<template>
  <div>
    <h2>home</h2>
    <router-link to="/home/msg">msg</router-link>&nbsp;
    <router-link to="/home/news">news</router-link>
    <keep-alive :include="['HomeNews','msg']">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: "HomeComponent"
}
</script>

<style scoped>

</style>