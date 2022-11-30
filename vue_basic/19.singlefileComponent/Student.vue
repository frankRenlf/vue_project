<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="showAddress">click</button>
  </div>
</template>

<script>
export default {
  name: "student",
  data() {
    return {
      name: "frank",
      age: 22,
      address: "hz",
    };
  },
  methods: {
    showAddress() {
      alert(this.address);
    },
  },
};
</script>



<style>
.demo {
  background-color: orange;
}
</style>