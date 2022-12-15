<template>
  <div>
    <h1>sum: {{ sum }}</h1>
    <h3>sum*10: {{ countSum }}</h3>
    <h3>{{ school }} -> {{ subject }}</h3>
    <select name="" id="" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd({n,$event})">if is odd +</button>
    <button @click="incrementWait(n)">wait to +</button>

    <h2 style="color: skyblue">person number : {{ personList.length }}</h2>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "CountComponent",
  data() {
    return {
      n: 1,
    }
  },
  computed: {
    // ...mapState({
    //   sum: 'sum',
    //   school: 'school',
    //   subject: 'subject',
    // }),
    ...mapState('countOptions', ['sum', 'school', 'subject']),
    ...mapState('personOptions', ['personList']),
    // ...mapGetters({
    //   countSum: 'countSum'
    // })
    ...mapGetters('countOptions', ['countSum'])
  },
  methods: {
    // increment() {
    //   // this.sum = this.sum + this.n
    //   this.$store.commit('ADD', this.n)
    // },
    // decrement() {
    //   // this.sum = this.sum - this.n
    //   this.$store.commit('DELETE', this.n)
    // },
    ...mapMutations('countOptions', {increment: 'ADD', decrement: 'DELETE'}),
    // incrementOdd() {
    //   this.$store.dispatch('addOdd', this.n)
    // },
    // incrementWait() {
    //   this.$store.dispatch('addWait', this.n)
    // }
    ...mapActions('countOptions', {
      incrementOdd: 'addOdd',
      incrementWait: 'addWait'
    })
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>