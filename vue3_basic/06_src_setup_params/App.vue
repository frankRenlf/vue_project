<template>
  <h3>app component</h3>

  <DemoComponent msg="farnk" msg2="123" @test="show">
    <template v-slot:d1>
      <input type="text" placeholder="enter">
    </template>
  </DemoComponent>
</template>

<script>
// import {h} from 'vue'
import {ref, reactive} from "vue";
import DemoComponent from "@/components/DemoComponent.vue";

export default {
  name: 'App',
  components: {DemoComponent},
  setup(){
    function show(val){
      console.log(val)
    }
    return {
      show
    }
  }

}
</script>

<style>
</style>
