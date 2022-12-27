<template>
  <div class="child">
    <h3>child {{car}}</h3>
    <DialogComponent></DialogComponent>
  </div>

</template>

<script>
import {inject} from "vue";
import DialogComponent from "@/components/DialogComponent.vue";
export default {
  name: "ChildComponent",
  components:{
    DialogComponent
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