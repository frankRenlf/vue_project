<template>
  <h3>{{ sum }}</h3>
  <button @click="sum++">add</button>
  <hr>
  <h2>mouse location: {{ point.x }}---{{ point.y }}</h2>
</template>

<script>
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, reactive, ref} from "vue";

export default {
  name: "DemoComponent",
  setup(props, context) {
    console.log('setup')

    let sum = ref(0)
    return {
      sum,
    }
  },

}
</script>

<style scoped>

</style>