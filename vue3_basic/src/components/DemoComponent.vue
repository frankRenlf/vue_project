<template>
  <h4>{{ person.name }}</h4>
  <h4>{{ person.age }}</h4>
  <h5></h5>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "DemoComponent",
  props:['msg'],
  setup(props) {
    console.log(props)
    let person = reactive({
      name: 'frank',
      age: 22,
      job: {
        type: 'backend',
        salary: 30
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