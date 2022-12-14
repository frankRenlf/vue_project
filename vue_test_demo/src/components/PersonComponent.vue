<template>
  <div>
    <h2 style="color: blue">above sum is:{{ sum }}</h2>
    <h3>first one is {{ first_name }}</h3>
    <input type="text" placeholder="enter name"
           v-model="name"
           @keydown.enter="addPerson(name)">
    <button @click="addPerson(name)">submit</button>
    <button @click="addFrank(name)">frank</button>
    <input type="text" placeholder="enter name"
           v-model.number="id"
           @keydown.enter="student">
    <button @click="student">student</button>
    <ul>
      <li v-for="p in personList" :key="p.id">
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

export default {
  name: "PersonComponent",
  data() {
    return {
      name: '',
      id: 0,
    }
  },
  methods: {
    ...mapActions('personOptions', ['addPersonFrank', 'addStudent']),
    student() {
      this.addStudent(this.id)
    },
    addPerson() {
      this.$store.commit('personOptions/ADD_PERSON', {
        id: nanoid(),
        name: this.name
      })
    },
    addFrank() {
      this.addPersonFrank({
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