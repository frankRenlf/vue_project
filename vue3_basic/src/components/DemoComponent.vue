<template>
  <input type="text">
  <h3>{{ keyWork}}</h3>
</template>

<script>
import {reactive, ref, readonly, markRaw} from "vue";

export default {
  name: "DemoComponent",
  setup(props, context) {
    function myRef(value){
      setTimeout(()=>{
      },1000)
      return value
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