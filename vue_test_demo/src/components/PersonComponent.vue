<template>
  <div>
    <input type="text" placeholder="enter name">
    <button @click="">submit</button>
    <ul>
      <li v-for="(name,id)in personList" :key="id">

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PersonComponent",
  data() {
    return {}
  },

}
</script>

<style scoped>

</style>