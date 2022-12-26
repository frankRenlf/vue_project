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
      return customRef(() => {
        return {
          get() {
            return value
          },
          set(newValue) {
            keyWork = newValue
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