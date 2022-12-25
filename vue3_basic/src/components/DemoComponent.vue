<template>
  <h3>{{ sum }}</h3>
  <button @click="sum++">add</button>

</template>

<script>
import {ref} from "vue";

export default {
  name: "DemoComponent",
  setup(props, context) {
    let sum = ref(0)
    return {
      sum,
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  }
}
</script>

<style scoped>

</style>