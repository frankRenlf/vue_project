<template>
  <div>
    <h2 v-text="msg"></h2>
    <button @click="show">click</button>
    <ElementOne />
    <!-- <ElementOne /> -->
  </div>
</template>

<script>
import ElementOne from "./components/ElementOne.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "welcome to learn vue",
    };
  },
  components: {
    ElementOne,
  },
};
</script>

<style>
</style>