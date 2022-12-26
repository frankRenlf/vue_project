<template>
  <input type="text" v-model="keyWork">
  <h3>{{ keyWork }}</h3>
</template>

<script>
import {reactive, ref, readonly, markRaw, customRef} from "vue";

export default {
  name: "DemoComponent",
  setup(props, context) {
    function myRef(value) {
      return customRef((track, trigger) => {
        return {
          get() {
            console.log('get')
            track()
            return value
          },
          set(newValue) {
            console.log('set')
            value = newValue
            trigger()
          }
        }
      })
    }

    let keyWork = myRef('hello')
    return {
      keyWork
    }
  }
}
</script>

<style scoped>

</style>