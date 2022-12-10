<template>
  <div class="school">
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: "SchoolInfo",
  data() {
    return {
      name: "leeds",
      address: "british",
    };
  },
  mounted() {
    pubsub.subscribe('hello', function (msgName, data) {
      console.log('receive', data)
    })
  }

};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>