<template>
  <h3>app component</h3>
  <h4>{{ person.name }}</h4>
  <h4>{{ person.age }}</h4>
  <DemoComponent></DemoComponent>
</template>

<script>
// import {h} from 'vue'
import {ref, reactive} from "vue";
import DemoComponent from "@/components/DemoComponent.vue";

export default {
  name: 'App',
  components: {DemoComponent},
  setup() {
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

<style>
</style>
