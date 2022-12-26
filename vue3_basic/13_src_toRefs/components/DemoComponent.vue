<template>
  <h3>{{ person.name }}</h3>
  <button @click="person.name+='?'"> change</button>
  <hr>
  <h3>{{ age }}</h3>
  <button @click="age++"> change</button>
  <hr>
  <h3>{{ job.salary }}</h3>
  <button @click="job.salary++"> change</button>
</template>

<script>
import {reactive, watch,toRefs} from "vue";

export default {
  name: "DemoComponent",
  setup(props, context) {

    let person = reactive({
      name: 'frank',
      age: 22,
      job: {
        name: 'programmer',
        salary: 30,
      }
    })

    return {
      person,
      ...toRefs(person)
    }

    // return () => h('h1', 'null')
  }
}
</script>

<style scoped>

</style>