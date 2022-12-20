<template>
  <h3>app component</h3>
  <h4>{{ name }}</h4>
  <h4>{{ age }}</h4>
  <button @click="add">add</button>
</template>

<script>
// import {h} from 'vue'

export default {
  name: 'App',
  components: {},
  setup() {
    let name = 'frank'
    let age = 22

    function add() {
      age = age + 1
      alert("add")
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
