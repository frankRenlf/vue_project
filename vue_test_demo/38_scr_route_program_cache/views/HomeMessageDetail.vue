<template>
  <div>
    <h4>msg :{{ id }}---{{ name }}---{{id2}}</h4>
  </div>
</template>

<script>
export default {
  name: "HomeMessageDetail",
  data() {
    return {}
  },
  props: ['id', 'name','id2'],
  computed: {
    params() {
      return this.$route.params
    }

  }


}
</script>

<style scoped>

</style>