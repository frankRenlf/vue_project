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
    let car = inject('car')
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve({car})
      },1000)
    })
  }
}
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>