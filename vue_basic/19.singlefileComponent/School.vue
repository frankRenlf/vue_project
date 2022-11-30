<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="showAddress">click</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "swjtu",
      age: 122,
      address: "cd",
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