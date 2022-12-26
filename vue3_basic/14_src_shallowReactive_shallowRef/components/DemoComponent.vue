<template>
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
import {reactive, watch, toRefs, shallowRef, shallowReactive} from "vue";

export default {
  name: "DemoComponent",
  setup(props, context) {

    let person = shallowReactive({
      name: 'frank',
      age: 22,
      job: {
        name: 'programmer',
        salary: 30,
      }
    })

    return {
      person,
    }

    // return () => h('h1', 'null')
  }
}
</script>

<style scoped>

</style>