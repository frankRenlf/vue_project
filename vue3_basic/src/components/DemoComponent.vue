<template>
  <h3>{{ sum }}</h3>
  <button @click="sum++">add</button>
  <hr>
  <h2>mouse location: {{ ret.point.x }}---{{ ret.point.y }}</h2>
</template>

<script>
import {ref} from "vue";
import usePoint from '../hooks/usePoint'

export default {
  name: "DemoComponent",
  setup(props, context) {
    console.log('setup')
    let ret = usePoint()
    let sum = ref(0)
    return {
      sum,
      ret
    }
  },

}
</script>

<style scoped>

</style>