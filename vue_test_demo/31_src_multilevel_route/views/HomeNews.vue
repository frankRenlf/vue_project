<template>
  <h3>{{school}}--{{subject}}---{{sum}}</h3>
</template>

<script>
import {mapState} from "vuex";


export default {
  name: "HomeNews",
  computed:{
    ...mapState('countOptions',['sum','school','subject'])
  }
}
</script>

<style scoped>

</style>