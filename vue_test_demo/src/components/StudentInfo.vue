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
    console.log(this);
    return {
      identify: "student",
      // name: "frank",
      // gender: "male",
      // address: "hz",
    };
  },
  props: ["name", "gender", "address"],
};
</script>

<style>
</style>