<template>
  <div>
    <h1>sum: {{ sum }}</h1>
    <h3>sum*10: {{ $store.getters.countSum }}</h3>
    <h3>{{ $store.state.school }} -> {{ $store.state.subject }}</h3>
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
import {mapState} from 'vuex'

export default {
  name: "CountComponent",
  data() {
    return {
      n: 1,
    }
  },
  computed: {},
  methods: {
    increment() {
      // this.sum = this.sum + this.n
      this.$store.commit('ADD', this.n)
    },
    decrement() {
      // this.sum = this.sum - this.n
      this.$store.commit('DELETE', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('addOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('addWait', this.n)
    }
  },
  mounted() {
    const x = mapState({
      sum: 'sum',
      school: 'school',
      subject: 'subject',
    })
    console.log(x)
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>