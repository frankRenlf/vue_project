<template>
  <div>
    <h4>msg :{{ $route.params.id }}---{{ $route.params.name }}</h4>
  </div>
</template>

<script>
export default {
  name: "HomeMessageDetail",
  data() {
    return {}
  },
  computed: {
    params() {
      return this.$route.params
    }

  }


}
</script>

<style scoped>

</style>