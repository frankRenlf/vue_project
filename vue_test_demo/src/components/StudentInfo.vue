<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ gender }}</h2>
    <h2>{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "StudentInfo",
  data() {
    return {
      identify: "student",
      // name: "frank",
      // gender: "male",
      // address: "hz",
    };
  },
};
</script>

<style>
</style>