<template>
  <h3>app component</h3>
  <h4>{{ name }}</h4>
  <h4>{{ age }}</h4>
  <button @click="add">add</button>
  <h3>{{ job.type }}</h3>
  <h3>{{ job.salary }}</h3>
  <h3>{{ arr }}</h3>
  <button @click="modify">modify</button>
</template>

<script>
// import {h} from 'vue'
import {ref, reactive} from "vue";

export default {
  name: 'App',
  components: {},
  setup() {
    let name = ref('frank')
    let age = ref(22)
    let job = reactive({
      type: 'backend',
      salary: 30
    })
    let arr = reactive(['he','ha'])
    function modify() {
      console.log(job)
      job.type = 'frontend'
      job.salary = 50
      arr[1]='hei'
    }

    function add() {
      age.value++
      console.log(name, age)
      // alert("add")
    }

    return {
      arr,
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
