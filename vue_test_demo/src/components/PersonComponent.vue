<template>
  <div>
    <h2 style="color: blue">above sum is:{{ sum }}</h2>
    <h3>first one is {{ first_name }}</h3>
    <input type="text" placeholder="enter name"
           v-model="name"
           @keydown.enter="addPerson(name)">
    <button @click="addPerson(name)">submit</button>
    <button @click="addFrank(name)">frank</button>
    <ul>
      <li v-for="p in personList" :key="p.id">
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapMutations, mapState} from "vuex";

export default {
  name: "PersonComponent",
  data() {
    return {
      name: ''
    }
  },
  methods: {
    addPerson() {
      this.$store.commit('personOptions/ADD_PERSON', {
        id: nanoid(),
        name: this.name
      })
    },
    addFrank() {
      this.$store.dispatch('personOptions/addPersonFrank', {
        id: nanoid(),
        name: this.name
      })
    }

  },
  computed: {
    ...mapState('personOptions', ['personList']),
    first_name() {
      return this.$store.getters['personOptions/getPersonFirst']
    },
    sum() {
      return this.$store.state.countOptions.sum
    }
  }
}
</script>

<style scoped>

</style>