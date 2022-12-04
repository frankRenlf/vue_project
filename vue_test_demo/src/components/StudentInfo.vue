<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="add">age++</button>
    <button @click="showInfo">showinfo</button>
  </div>
</template>

<script>
import { mixin1 } from "../mixin";
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
  mixins: [mixin1],
};
</script>

<style>
</style>