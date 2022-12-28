<template>
  <div class="app">
    <h3>app component</h3>
    <button @click="show=!show">switch</button>
    <hr>
    <ChildComponent v-if="show"></ChildComponent>
  </div>
</template>

<script>
// import {h} from 'vue'
import {ref, provide, reactive} from "vue";
import ChildComponent from "@/components/ChildComponent.vue";

export default {
  name: 'App',
  components: {ChildComponent},
  setup() {
    let show = ref(true)
    let car = reactive({
      name: 'bc',
      price: 40
    })
    provide('car', car)
    return {
      show
    }
  }

}
</script>

<style scoped>
.app {
  background-color: green;
  padding: 10px;
}
</style>
