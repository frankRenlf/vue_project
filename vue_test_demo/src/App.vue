<template>
  <div>
    <h2 v-text="msg"></h2>
    <button @click="showDOM">click</button>
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
  methods: {
    showDOM() {},
  },
  components: {
    ElementOne,
  },
};
</script>

<style>
</style>