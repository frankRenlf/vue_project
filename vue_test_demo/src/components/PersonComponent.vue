<template>
  <div>
    <input type="text" placeholder="enter name"
           v-model="name"
           @keydown.enter="addPerson(name)">
    <button @click="addPerson(name)">submit</button>
    <ul>
      <li v-for="p in personList" :key="p.id">
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapState} from "vuex";

export default {
  name: "PersonComponent",
  data() {
    return {
      name: ''
    }
  },
  methods: {
    addPerson(name) {
      this.$store.commit('ADD_PERSON', {
        id: nanoid(),
        name: name
      })
    }
  },
  computed: {
    ...mapState(['personList'])
  }

}
</script>

<style scoped>

</style>