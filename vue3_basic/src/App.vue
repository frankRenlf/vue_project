<template>
  <h3>app component</h3>

  <DemoComponent msg="farnk"></DemoComponent>
</template>

<script>
// import {h} from 'vue'
import {ref, reactive} from "vue";
import DemoComponent from "@/components/DemoComponent.vue";

export default {
  name: 'App',
  components: {DemoComponent},

}
</script>

<style>
</style>
