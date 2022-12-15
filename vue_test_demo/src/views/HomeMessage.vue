<template>
  <ul>
    <li v-for="p in personList" :key="p.id">
      <router-link :to="{
        // name:'detail_info',
        path:`/home/msg/detail/${p.id}/${p.name}`,

      }">
        {{ p.id }}
      </router-link>
    </li>
    <hr/>
    <router-view></router-view>
  </ul>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "HomeMessage",
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapState('personOptions', ['personList'])
  }
}
</script>

<style scoped>

</style>