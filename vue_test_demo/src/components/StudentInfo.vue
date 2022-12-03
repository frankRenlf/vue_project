<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ gender }}</h2>
    <h2>{{ address }}</h2>
    <h2>{{ cur_age }}</h2>
    <button @click="cur_age++">age++</button>
  </div>
</template>

<script>
export default {
  name: "StudentInfo",
  data() {
    // console.log(this);
    return {
      identify: "student",
      // name: "frank",
      // gender: "male",
      // address: "hz",
      cur_age: this.age,
    };
  },
  // props: ["name", "gender", "address", "age"],
  // props: {
  //   name: String,
  //   gender: String,
  //   address: String,
  //   age: Number,
  // },
  props: {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
</style>