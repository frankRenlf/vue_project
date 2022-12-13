<template>
  <div>
    <h1>sum: ???</h1>
    <select name="" id="" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">if is odd +</button>
    <button @click="incrementWait">wait to +</button>
  </div>
</template>

<script>
export default {
  name: "CountComponent",
  data() {
    return {
      n: 1,
    }
  },
  methods: {
    increment() {
      // this.sum = this.sum + this.n
    },
    decrement() {
      // this.sum = this.sum - this.n
    },
    incrementOdd() {
      // if (this.sum % 2 !== 0) {
      //   this.sum = this.sum + this.n
      // }
    },
    incrementWait() {
      // setTimeout(() => {
      //   this.sum = this.sum + this.n
      // }, 200)
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>