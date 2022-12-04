<template>
  <div>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      msg: "welcome to todolist vue",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs.info);
    },
  },
};
</script>

<style>
</style>