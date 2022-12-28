<template>
  <div class="child">
    <h3>child {{car}}</h3>
  </div>

</template>

<script>
import {inject} from "vue";
export default {
  name: "ChildComponent",
  components:{
  },
  setup() {
    const car = inject('car')
    return {car}
  }
}
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>