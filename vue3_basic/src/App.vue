<template>
  <h3>app component</h3>
  <h4>{{ person.name }}</h4>
  <h4>{{ person.age }}</h4>
  <button @click="add">add</button>
  <h3>{{ person.job.type }}</h3>
  <h3>{{ person.job.salary }}</h3>
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
    let person = reactive({
      name: 'frank',
      age: 22,
      job: {
        type: 'backend',
        salary: 30
      }
    })
    let arr = reactive(['he', 'ha'])

    function modify() {
      console.log(person.job)
      person.job.type = 'frontend'
      person.job.salary = 50
      arr[1] = 'hei'
    }

    function add() {
      person.age++
      console.log(name, person.age)
      // alert("add")
    }

    return {
      arr,
      add,
      person,
      modify
    }

    // return () => h('h1', 'null')
  }
}
</script>

<style>
</style>
