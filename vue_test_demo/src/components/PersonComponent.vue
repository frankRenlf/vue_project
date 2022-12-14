<template>
  <div>
    <h2 style="color: blue">above sum is:{{ sum }}</h2>
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
    ...mapState(['personList','sum'])
  }

}
</script>

<style scoped>

</style>