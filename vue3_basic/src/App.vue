<template>
  <h3>app component</h3>
  <h4>{{ name }}</h4>
  <h4>{{ age }}</h4>
  <button @click="add">add</button>
  <h3>{{ job.type }}</h3>
  <h3>{{ job.salary }}</h3>
  <button @click="modify">modify</button>
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
    let job = ref({
      type: 'backend',
      salary: 30
    })

    function modify() {
      job.value.type = 'frontend'
      job.value.salary = 50
    }

    function add() {
      age.value++
      console.log(name, age)
      // alert("add")
    }

    return {
      name,
      age,
      add,
      job,
      modify
    }

    // return () => h('h1', 'null')
  }
}
</script>

<style>
</style>
