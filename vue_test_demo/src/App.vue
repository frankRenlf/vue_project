<template>
  <div>
    <CountComponent></CountComponent>
    <hr/>
    <PersonComponent></PersonComponent>
  </div>
</template>

<script>

import CountComponent from "@/components/CountComponent.vue";
import PersonComponent from "@/components/PersonComponent.vue";

export default {
  name: "App",
  components: {
    CountComponent,
    PersonComponent
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {
    console.log('app', this)
  }

};
</script>

<style scoped>

</style>