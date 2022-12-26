<template>
  <h3>{{ sum }}</h3>
  <button @click="sum++"> change</button>
  <hr>
  <h3>{{ person.name }}</h3>
  <button @click="person.name+='?'"> change</button>
  <hr>
  <h3>{{ person.age }}</h3>
  <button @click="person.age++"> change</button>
  <hr>
  <h3>{{ person.job.salary }}</h3>
  <button @click="person.job.salary++"> change</button>
  <hr>
  <h3>{{ person.car }}</h3>
  <button @click="addCar"> add car</button>
  <button @click="modifyCar"> modify car</button>
</template>

<script>
import {reactive, ref, readonly, markRaw} from "vue";

export default {
  name: "DemoComponent",
  setup(props, context) {
    let sum = ref(0)
    let person = reactive({
      name: 'frank',
      age: 22,
      job: {
        name: 'programmer',
        salary: 30,
      }
    })

    function addCar() {
      person.car = {
        name: 'bwm',
        price: 40,
      }
      console.log(person.car)
    }

    function modifyCar() {
      person.car.name = 'bc'
      person.car.price = 50
    }

    return {
      person,
      sum,
      addCar, modifyCar
    }
  }
}
</script>

<style scoped>

</style>