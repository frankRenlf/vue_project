<template>
  <ul>
    <li v-for="p in personList" :key="p.id">
      <router-link :to="{
        name:'detail',
        // path:`/home/msg/detail/${p.id}/${p.name}`,
        params:{
          name:p.name,
          id:p.id,
        },
        query:{
          name:p.name,
          id:p.id,
        }
      }">
        {{ p.id }}
      </router-link>
      <button @click="pushInfo(p)">push</button>
      <button @click="replaceInfo(p)">replace</button>
      <input type="text">
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
  },
  methods: {
    pushInfo(p) {
      this.$router.push({
        name: 'detail_info',
        // path:`/home/msg/detail/${p.id}/${p.name}`,
        params: {
          name: p.name,
          id: p.id,
        },
        query: {
          name: p.name,
          id: p.id,
        }
      })
    },
    replaceInfo(p) {
      this.$router.replace({
        name: 'detail_info',
        // path:`/home/msg/detail/${p.id}/${p.name}`,
        params: {
          name: p.name,
          id: p.id,
        },
        query: {
          name: p.name,
          id: p.id,
        }
      })
    }
  },
  beforeDestroy() {
    console.log('msg destroy')
  },
  activated() {
    console.log('msg activated')
  },
  deactivated() {
    console.log('msg deactivated')
  }
}
</script>

<style scoped>

</style>