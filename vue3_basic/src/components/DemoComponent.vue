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
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
      window.addEventListener('click', (event) => {
        point.x = event.pageX
        point.y = event.pageY
      })
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    let point = reactive({
      x: 0,
      y: 0
    })
    let sum = ref(0)
    return {
      point,
      sum,
    }
  },

}
</script>

<style scoped>

</style>