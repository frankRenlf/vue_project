<template>
  <input type="text" placeholder="enter" v-model="keyWork">
  <h3>{{ keyWork }}</h3>
</template>

<script>
import {reactive, ref, readonly, markRaw} from "vue";

export default {
  name: "DemoComponent",
  setup(props, context) {
    function myRef(value) {
      let ret
      setTimeout(() => {
        ret = ref(value)
      }, 1000)
      return ret
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