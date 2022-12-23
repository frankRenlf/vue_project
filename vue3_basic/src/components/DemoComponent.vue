<template>
  <h3>{{ sum }}</h3>
  <button @click="sum++">show</button>
  <h3>{{ msg }}</h3>
  <button @click="msg+='!'">add</button>
</template>

<script>
import {reactive, computed, ref, watch} from "vue";

export default {
  name: "DemoComponent",
  props: ['msg', 'msg2'],
  emits: ['test'],
  setup(props, context) {
    let sum = ref(0)
    let msg = ref('hello')
    watch('sum', {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        console.log("sum is change", newVal, oldVal)
      }
    })
    return {
      sum,
      msg
    }

    // return () => h('h1', 'null')
  }
}
</script>

<style scoped>

</style>