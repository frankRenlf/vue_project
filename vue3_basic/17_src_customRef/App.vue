<template>
  <h3>app component</h3>
  <button @click="show=!show">switch</button>
  <hr>
  <DemoComponent v-if="show">
  </DemoComponent>

</template>

<script>
// import {h} from 'vue'
import {ref} from "vue";
import DemoComponent from "@/components/DemoComponent.vue";

export default {
  name: 'App',
  components: {DemoComponent},
  setup() {
    let show = ref(true)
    return {
      show
    }
  }

}
</script>

<style>
</style>
