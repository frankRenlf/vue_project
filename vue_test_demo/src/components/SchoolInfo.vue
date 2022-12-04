<template>
  <h2 @click="showInfo">{{ name }}</h2>
</template>

<script>
import { mixin1 } from "../mixin";
export default {
  name: "SchoolInfo",
  data() {
    return {
      name: "leeds",
    };
  },
  mixins: [mixin1],
};
</script>

<style>
</style>