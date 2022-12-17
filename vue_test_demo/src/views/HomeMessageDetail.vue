<template>
  <div>
    <h4>msg :{{ id }}---{{ name }}</h4>
  </div>
</template>

<script>
export default {
  name: "HomeMessageDetail",
  data() {
    return {}
  },
  props:['id','name'],
  computed: {
    params() {
      return this.$route.params
    }

  }


}
</script>

<style scoped>

</style>