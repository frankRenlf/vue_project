<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "SchoolInfo",
  data() {
    return {
      name: "leeds",
      address: "british",
    };
  },
};
</script>

<style scoped>
.demo {
  background-color: skyblue;
}
</style>