<template>
  <div class="student">
    <h2>{{ name }}</h2>
    <h2 class="test">{{ age }}</h2>
    <button @click="sendStudentName">sendStudentName</button>
  </div>
</template>
<script>
export default {
  name: "StudentInfo",
  data() {
    return {
      name: "frank",
      age: 2,
    };
  },
  methods: {
    sendStudentName() {
      this.x.$emit('send', this.name)
    }
  }
  // mounted() {
  //   console.log(this.x)
  // }

};
</script>

<style lang="less" scoped>
.student {
  background-color: orange;

  .test {
    font-size: 40px;
  }
}
</style>