<template>
  <h4>{{ person.name }}</h4>
  <h4>{{ person.age }}</h4>
  <h5>{{ msg }}</h5>
  <slot name="d1"></slot>
  <button @click="test">show</button>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "DemoComponent",
  props: ['msg', 'msg2'],
  emits: ['test'],
  setup(props, context) {
    // console.log()
    console.log(props.msg, context.slots)
    let person = reactive({
      name: 'frank',
      age: 22,
      job: {
        type: 'backend',
        salary: 30
      }
    })

    function test() {
      context.emit('test', 22)
    }

    return {
      person,
      test
    }

    // return () => h('h1', 'null')
  }
}
</script>

<style scoped>

</style>