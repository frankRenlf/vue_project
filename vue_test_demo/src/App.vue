<template>
  <div>
    <ElementOne />
    <!-- <ElementOne /> -->
    <h2></h2>
  </div>
</template>

<script>
import ElementOne from "./components/ElementOne.vue";
export default {
  name: "App",
  components: {
    ElementOne,
  },
};
</script>

<style>
</style>