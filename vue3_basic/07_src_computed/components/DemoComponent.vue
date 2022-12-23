<template>
  <input type="text" v-model="person.fullname">
  <h4>{{ person.firstname }}</h4>
  <input type="text" v-model="person.firstname">
  <h4>{{ person.lastname }}</h4>
  <input type="text" v-model="person.lastname">
  <h4>{{ person.age }}</h4>
  <h5>{{ msg }}</h5>
  <slot name="d1"></slot>
  <button @click="test">show</button>
</template>

<script>
import {reactive, computed} from "vue";

export default {
  name: "DemoComponent",
  props: ['msg', 'msg2'],
  emits: ['test'],
  setup(props, context) {
    // console.log()
    console.log(props.msg, context.slots)
    let person = reactive({
      firstname: 'frank',
      lastname: 'ren',
      age: 22,
      job: {
        type: 'backend',
        salary: 30
      }
    })

    person.fullname = computed({
      get() {
        return person.lastname + '_' + person.firstname
      },
      set(value) {
        let arr = value.split('_')
        person.lastname = arr[0]
        person.firstname = arr[1]
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