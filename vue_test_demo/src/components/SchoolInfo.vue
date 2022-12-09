<template>
  <div class="school">
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "SchoolInfo",
  data() {
    return {
      name: "leeds",
      address: "british",
    };
  },
  mounted() {
    this.x.$on('send', (data) => {
      console.log('receive: ', data)
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