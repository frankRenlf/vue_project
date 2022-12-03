<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "ElementOne",
  data() {
    return {
      name: "frank",
      address: "hz",
    };
  },
};
</script>

<style>
</style>