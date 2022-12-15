<template>
  <ul>
    <li v-for="p in personList" :key="p.id">
      <router-link to="/home/msg/detail" :data="p">{{p.id}} </router-link>
    </li>
    <router-view></router-view>
  </ul>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "HomeMessage",
  components: {},
  computed:{
    ...mapState('personOptions',['personList'])
  }
}
</script>

<style scoped>

</style>