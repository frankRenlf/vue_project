<template>
  <div>
    <input type="text" placeholder="enter name" v-model="name">
    <button @click="addPerson(name)">submit</button>
    <ul>
      <li v-for="p in personList" :key="p.id">
        {{ p }}
      </li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
  name: "PersonComponent",
  data() {
    return {
      name: ''
    }
  },
  methods: {
    addPerson(name) {
      this.$store.commit('ADDPERSON', {
        id: nanoid(),
        name: name
      })
    }
  },
  computed: {
    personList() {
      return this.$store.state.personList
    }
  }

}
</script>

<style scoped>

</style>