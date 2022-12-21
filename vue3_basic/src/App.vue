<template>
  <h3>app component</h3>
  <h4>{{ name }}</h4>
  <h4>{{ age }}</h4>
  <button @click="add">add</button>
</template>

<script>
// import {h} from 'vue'
import {ref} from "vue";

export default {
  name: 'App',
  components: {},
  setup() {
    let name = ref('frank')
    let age = ref(22)

    function add() {
      console.log(name, age)
      // age++
      // alert("add")
    }

    return {
      name,
      age,
      add
    }

    // return () => h('h1', 'null')
  }
}
</script>

<style>
</style>
