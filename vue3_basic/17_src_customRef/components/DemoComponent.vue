<template>
  <input type="text" v-model="keyWork">
  <h3>{{ keyWork }}</h3>
</template>

<script>
import {customRef} from "vue";

export default {
  name: "DemoComponent",
  setup() {
    function myRef(value, delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            console.log('get')
            track() // track value
            return value
          },
          set(newValue) {
            console.log('set')
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger() // Require vue to reparse the template
            }, delay)
          }
        }
      })
    }

    let keyWork = myRef('hello', 500)
    return {
      keyWork
    }
  }
}
</script>

<style scoped>

</style>