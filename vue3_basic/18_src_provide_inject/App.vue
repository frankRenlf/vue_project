<template>
  <div class="app">
    <h3>app component</h3>
    <button @click="show=!show">switch</button>
    <hr>
    <DemoComponent v-if="show">
    </DemoComponent>
  </div>


</template>

<script>
// import {h} from 'vue'
import {ref, provide, reactive} from "vue";
import DemoComponent from "@/components/DemoComponent.vue";

export default {
  name: 'App',
  components: {DemoComponent},
  setup() {
    let show = ref(true)
    let car = reactive({
      name: 'bc',
      price: 40
    })
    provide('car',car)
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
