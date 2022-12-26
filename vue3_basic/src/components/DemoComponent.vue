<template>
  <h3>{{ person.name }}</h3>
  <h3>{{ person.age }}</h3>
  <button @click="person.age++"> change</button>
  <hr>
  <h3>{{ person.job.salary }}</h3>
  <button @click="person.job.salary++"> change</button>
</template>

<script>
import {reactive, computed, ref, watch} from "vue";

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


    watch(() => person.job, (newVal, oldVal) => {
      console.log("person is change", newVal, oldVal)
    }, {
      immediate: true,
      deep: true,
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