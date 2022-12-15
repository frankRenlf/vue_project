<template>
  <ul>
    <li v-for="p in personList" :key="p.id">
      {{p.name}}
    </li>
  </ul>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "HomeMessage",
  computed:{
    ...mapState('personOptions',['personList'])
  }
}
</script>

<style scoped>

</style>