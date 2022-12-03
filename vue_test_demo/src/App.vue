<template>
  <div>
    <h2 v-text="msg" ref="info"></h2>
    <button @click="showDOM">click</button>
    <ElementOne ref="eo" />
    <!-- <ElementOne /> -->
  </div>
</template>

<script>
import ElementOne from "./components/ElementOne.vue";
export default {
  name: "App",
  components: {
    ElementOne,
  },
  data() {
    return {
      msg: "welcome to learn vue",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs.eo);
    },
  },
};
</script>

<style>
</style>