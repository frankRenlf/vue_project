<template>
  <div class="student">
    <h2>{{ name }}</h2>
    <h2 class="test">{{ age }}</h2>
    <button @click="sendStudentName">sendStudentName</button>
    <!--    <button @click="sendStudentName">off send</button>-->

  </div>
</template>
<script>
import pubsub from 'pubsub-js'

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
      // this.$bus.$emit('send', this.age)
      pubsub.publish('hello', 123)
    }
  },
  beforeDestroy() {

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