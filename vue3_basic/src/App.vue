<template>
  <div class="app">
    <h3>app component</h3>
    <button @click="show=!show">switch</button>
    <hr>
    <suspense>
      <template v-slot:default>
        <ChildComponent v-if="show"></ChildComponent>
      </template>
      <template v-slot:fallback>
        <h3>processing</h3>
      </template>
    </suspense>
  </div>
</template>

<script>
// import {h} from 'vue'
import {ref, provide, reactive, defineAsyncComponent} from "vue";
// import ChildComponent from "@/components/ChildComponent.vue";
const ChildComponent = defineAsyncComponent(() => import('./components/ChildComponent.vue'))
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
