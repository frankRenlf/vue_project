<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="add">age++</button>
  </div>
</template>

<script>
export default {
  name: "StudentInfo",
  data() {
    return {
      name: "frank",
      age: 2,
    };
  },
  methods: {
    add() {
      this.age++;
    },
  },
};
</script>

<style scoped>
.demo {
  background-color: orange;
}
</style>