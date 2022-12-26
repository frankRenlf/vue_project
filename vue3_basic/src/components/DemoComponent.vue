<template>
  <h3>{{ sum }}</h3>
  <button @click="sum++"> change</button>
  <hr>
  <h3>{{ person.name }}</h3>
  <button @click="person.name+='?'"> change</button>
  <hr>
  <h3>{{ person.age }}</h3>
  <button @click="person.age++"> change</button>
  <hr>
  <h3>{{ person.job.salary }}</h3>
  <button @click="person.job.salary++"> change</button>
</template>

<script>
import {reactive, ref, readonly} from "vue";

export default {
  name: "DemoComponent",
  setup(props, context) {
    let sum = ref(0)
    let person = readonly({
      name: 'frank',
      age: 22,
      job: {
        name: 'programmer',
        salary: 30,
      }
    })

    return {
      person,
      sum,
    }
  }
}
</script>

<style scoped>

</style>