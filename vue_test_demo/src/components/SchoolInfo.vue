<template>
  <div class="school">
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
    <button @click="retData">ret</button>
  </div>
</template>

<script>
export default {
  name: "SchoolInfo",
  props: ['passByProps'],
  data() {
    return {
      name: "leeds",
      address: "british",
    };
  },
  methods: {
    retData() {
      this.passByProps(this.address)
    }
  }
};
</script>

<style scoped>
.school {
  background-color: skyblue;
}
</style>